"use client";
import { GoogleMapProvider } from "@/providers/google-map-provider";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Map } from "@vis.gl/react-google-maps";


import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-screen">
        <GoogleMapProvider apiKey="AIzaSyAgGu8x5z4EUb3NefC1VZ4CQzg4apnFXkg">
            <Map
                defaultZoom={5}
                defaultCenter={{ lat: 53, lng: 10 }}
                gestureHandling={"cooperative"}
                disableDefaultUI={false}
            />
        </GoogleMapProvider>
            

        
      
    </div>
  );
};

export default GoogleMap;