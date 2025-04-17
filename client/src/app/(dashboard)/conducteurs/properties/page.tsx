"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetAuthUserQuery, useGetConducteurPropertiesQuery } from "@/state/api";
import React from "react";

const Properties = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: conducteurProperties,
    isLoading,
    error,
  } = useGetConducteurPropertiesQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading conducteur properties</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Mes covoiturages"
        subtitle="Gérer mes offres de covoiturage"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {conducteurProperties?.map((property) => (
          <Card
            key={property.id}
            property={property}
            isFavorite={false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            propertyLink={`/conducteurs/properties/${property.id}`}
          />
        ))}
      </div>
      {(!conducteurProperties || conducteurProperties.length === 0) && (
        <p>Vous n&lsquo;avez encore proposé aucun trajet</p>
      )}
    </div>
  );
};

export default Properties;