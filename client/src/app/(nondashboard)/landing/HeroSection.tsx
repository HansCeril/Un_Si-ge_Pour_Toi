
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
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
                        value="search query"
                        onChange={() => {}}
                        placeholder="Rechercher par ville, quartier ou adresse"
                        className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
                    />
                    <Button
                        className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
                        onClick={() => {}}
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