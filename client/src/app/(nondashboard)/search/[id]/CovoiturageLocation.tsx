
import { useGetCovoiturageQuery } from "@/state/api";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Compass, MapPin } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const CovoiturageLocation = ({ covoiturageId }: CovoiturageDetailsProps) => {
    const {
        data: covoiturage,
        isError,
        isLoading,
    } = useGetCovoiturageQuery(covoiturageId);


    if (isLoading) return <>Loading...</>;

    if (isError || !covoiturage) return <>Covoiturage not Found</>;

    const position = {
        lat: covoiturage.location.coordinates.latitude,
        lng: covoiturage.location.coordinates.longitude,
    };

    return (
        <div className="py-16">
            <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
                Map and Location
            </h3>
            <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
                <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1 text-gray-700" />
                    Covoiturage Address:
                    <span className="ml-2 font-semibold text-gray-700">
                        {covoiturage.location?.address || "Address not available"}
                    </span>
                </div>

                <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                        covoiturage.location?.address || ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center hover:underline gap-2 text-primary-600"
                >
                    <Compass className="w-5 h-5" />
                    Get Directions
                </a>
            </div>

            <div className="relative mt-4 h-[300px] rounded-lg overflow-hidden">
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}>
                <Map
                    defaultCenter={position}
                    defaultZoom={14}
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                    className="h-full w-full"
                >
                    <Marker position={position} />
                </Map>
                </APIProvider>
            </div>
        </div>
    );
};

export default CovoiturageLocation;