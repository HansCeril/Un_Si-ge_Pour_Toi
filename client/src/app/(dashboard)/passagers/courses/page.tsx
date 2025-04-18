"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetCurrentCovoiturageQuery,
  useGetPassagerQuery,
} from "@/state/api";
import React from "react";

const Residences = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: passager } = useGetPassagerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );

  const {
    data: currentCovoiturages,
    isLoading,
    error,
  } = useGetCurrentCovoiturageQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  console.log(currentCovoiturages);

  if (isLoading) return <Loading />;
  if (error) return <div>Erreur de chargment de vos trajets en cours</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Trajets en cours"
        subtitle="Consultez et gérez vos trajets réservés"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCovoiturages?.map((covoiturage) => (
          <Card
            key={covoiturage.id}
            property={covoiturage}
            isFavorite={passager?.favorites.includes(covoiturage.id) || false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            propertyLink={`/passagers/courses/${covoiturage.id}`}
          />
        ))}
      </div>
      {(!currentCovoiturages || currentCovoiturages.length === 0) && (
        <p>Vous n&lsquo;avez aucune réservation en cours</p>
      )}
    </div>
  );
};

export default Residences;