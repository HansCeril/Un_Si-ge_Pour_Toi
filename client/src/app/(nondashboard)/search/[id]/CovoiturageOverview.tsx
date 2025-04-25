import { useGetCovoiturageQuery } from "@/state/api";
import { MapPin, Star } from "lucide-react";
import React from "react";

const CovoiturageOverview = ({ covoiturageId }: CovoiturageOverviewProps) => {
  const {
    data: covoiturage,
    isError,
    isLoading,
  } = useGetCovoiturageQuery(covoiturageId);

  if (isLoading) return <>Loading...</>;
  if (isError || !covoiturage) {
    return <>Covoiturage not Found</>;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {covoiturage.location?.country} / {covoiturage.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {covoiturage.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{covoiturage.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {covoiturage.location?.city}, {covoiturage.location?.state},{" "}
            {covoiturage.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {covoiturage.averageRating.toFixed(1)} ({covoiturage.numberOfReviews}{" "}
              Reviews)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {covoiturage.name}</h2>
        <p className="text-gray-500 leading-7">
          {covoiturage.description}
        </p>
      </div>
    </div>
  );
};

export default CovoiturageOverview;