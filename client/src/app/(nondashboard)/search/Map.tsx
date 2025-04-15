"use client";
import { GoogleMapProvider } from "@/providers/google-map-provider";
import { useGetPropertiesQuery } from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Map, Marker } from "@vis.gl/react-google-maps";


import React from "react";

type GoogleMapProps = {
  center: { lat: number; lng: number };
  locations: { id: number; lat: number; lng: number; title: string }[];
};

const GoogleMap = ({ center, locations }: GoogleMapProps) => {

  const filters = useAppSelector((state) => state.global.filters);
  {/* Get Properties by filters */}
  const {
      data: properties,
      isLoading,
      isError
  } = useGetPropertiesQuery(filters);

  console.log(filters)
  console.log(properties)
  if (isLoading) return <>Loading ...</>;
  if (isError || !properties) return <div> Failed to fetch location </div>
  
  return (
    <div className="w-full h-screen">
        <GoogleMapProvider apiKey="AIzaSyAgGu8x5z4EUb3NefC1VZ4CQzg4apnFXkg">
            <Map
                defaultZoom={11}
                defaultCenter={{ lat: filters.coordinates[1], lng: filters.coordinates[0] }}
                gestureHandling={"cooperative"}
                disableDefaultUI={false}
            >
              
              {properties?.map((property) => (
                <Marker
                  key={property.locationId}
                  position={{lat: property.location.coordinates.latitude, lng: property.location.coordinates.longitude}}
                  title={property.name}
                />
              ))}
            </Map>
        </GoogleMapProvider>
            

        
      
    </div>
  );
};

export default GoogleMap;