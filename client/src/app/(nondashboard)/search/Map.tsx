"use client";
import { GoogleMapProvider } from "@/providers/google-map-provider";
import { useGetCovoituragesQuery } from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Map, Marker } from "@vis.gl/react-google-maps";


import React from "react";


const GoogleMap = () => {

  const filters = useAppSelector((state) => state.global.filters);
  {/* Get Covoiturages by filters */}
  const {
      data: covoiturages,
      isLoading,
      isError
  } = useGetCovoituragesQuery(filters);


  if (isLoading) return <>Loading ...</>;
  if (isError || !covoiturages) return <div> Failed to fetch location </div>
  
  return (
    <div className="w-full h-screen">
        <GoogleMapProvider apiKey="AIzaSyAgGu8x5z4EUb3NefC1VZ4CQzg4apnFXkg">
            <Map
                defaultZoom={11}
                center={{ lat: filters.coordinates[1], lng: filters.coordinates[0] }}
                gestureHandling={"cooperative"}
                disableDefaultUI={false}
            >
              
              {covoiturages?.map((covoiturage) => (
                <Marker
                  key={covoiturage.locationId}
                  position={{lat: covoiturage.location.coordinates.latitude, lng: covoiturage.location.coordinates.longitude}}
                  title={covoiturage.name}
                />
              ))}
            </Map>
        </GoogleMapProvider>
            

        
      
    </div>
  );
};

export default GoogleMap;