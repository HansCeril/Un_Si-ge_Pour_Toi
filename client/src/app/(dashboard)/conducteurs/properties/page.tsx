"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetAuthUserQuery, useGetConducteurCovoituragesQuery } from "@/state/api";
import React from "react";

const Covoiturages = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: conducteurCovoiturages,
    isLoading,
    error,
  } = useGetConducteurCovoituragesQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading conducteur covoiturage</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Mes covoiturages"
        subtitle="Gérer mes offres de covoiturage"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {conducteurCovoiturages?.map((covoiturage) => (
          <Card
            key={covoiturage.id}
            covoiturage={covoiturage}
            isFavorite={false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            covoiturageLink={`/conducteurs/covoiturages/${covoiturage.id}`}
          />
        ))}
      </div>
      {(!conducteurCovoiturages || conducteurCovoiturages.length === 0) && (
        <p>Vous n&lsquo;avez encore proposé aucun trajet</p>
      )}
    </div>
  );
};

export default Covoiturages;