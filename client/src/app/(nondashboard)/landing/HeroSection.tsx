
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cleanParams } from "@/lib/utils";
import { FiltersState, setFilters } from "@/state";
import { useAppSelector } from "@/state/redux";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";

const HeroSection = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();
    const filters = useAppSelector((state) => state.global.filters);
    const [searchInput, setSearchInput] = useState(filters.location);


    const updateURL = debounce((newFilters: FiltersState) => {
        const cleanFilters = cleanParams(newFilters);
        const updatedSearchParams = new URLSearchParams();
    
        Object.entries(cleanFilters).forEach(([key, value]) => {
        updatedSearchParams.set(
            key,
            Array.isArray(value) ? value.join(",") : value.toString()
        );
        });
    
        router.push(`${pathname}?${updatedSearchParams.toString()}`);
    });
    const handleFilterChange = (
          key: string,
          value: any,
          isMin: boolean | null
        ) => {
          let newValue = value;
      
          if (key === "coordinates") {
            newValue = value === "any" ? [0, 0] : value.map(Number);
          } else {
            newValue = value === "any" ? "any" : value;
          }
      
          const newFilters = { ...filters, [key]: newValue };
          dispatch(setFilters(newFilters));
          updateURL(newFilters);
        };
      
        const handleLocationSearch = async () => {
          console.log("click")
          try {
            const trimmedQuery = searchQuery.trim();
            if (!trimmedQuery) return;

            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                trimmedQuery
              )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
            );
        
            const data = await response.json();
            console.log(data)
        
            if (data.results && data.results.length > 0) {
              const { lat, lng } = data.results[0].geometry.location;
        
                dispatch(
                    setFilters({
                    location: trimmedQuery,
                    coordinates: [lng, lat],
                    })
                );
                const params = new URLSearchParams({
                    location: trimmedQuery,
                    lat: lat.toString(),
                    lng: lng,
                });
                router.push(`/search?${params.toString()}`);
            }
          } catch (err) {
            console.error("Error searching location:", err);
        }
    };

    return (
        <div className="relative h-screen">
            <video
            src='/hero.mp4'
            className='w-full h-full object-cover'
            preload='metadata'
            autoPlay
            loop
            muted
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/3 transform -translate-y-1/2 text-center w-full"
            >
                <div className="max-w-4xl mx-auto px-16 sm:px-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Ensemble, rapprochons les campagnes des villes grâce au covoiturage solidaire.
                    </h1>
                    <p className="text-xl text-white mb-8">
                        Une solution locale, écologique et solidaire pour connecter les habitants des campagnes aux opportunités urbaines.
                    </p>
                    <div className="flex justify-center">
                        <Input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher par ville, quartier ou adresse"
                            className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
                        />
                        <Button
                            className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
                            onClick={handleLocationSearch}
                        >
                        Search
                        </Button>
                    </div>
                </div>
            </motion.div>
            
        

        </div>
    )
}

export default HeroSection;