"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetPropertiesQuery,
  useGetPassagerQuery,
} from "@/state/api";
import React from "react";

const Favorites = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: passager } = useGetPassagerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );

  const {
    data: favoriteProperties,
    isLoading,
    error,
  } = useGetPropertiesQuery(
    { favoriteIds: passager?.favorites?.map((fav: { id: number }) => fav.id) },
    { skip: !passager?.favorites || passager?.favorites.length === 0 }
  );

  if (isLoading) return <Loading />;
  if (error) return <div>Impossible de charger vos trajets enregistrés</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Trajets ajoutés aux favoris"
        subtitle="Parcourir et gérer vos trajets enregistrés"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteProperties?.map((property) => (
          <Card
            key={property.id}
            property={property}
            isFavorite={true}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            propertyLink={`/passagers/courses/${property.id}`}
          />
        ))}
      </div>
      {(!favoriteProperties || favoriteProperties.length === 0) && (
        <p>Vous n’&lsquo;avez enregistré aucun trajet pour le moment

        </p>
      )}
    </div>
  );
};

export default Favorites;