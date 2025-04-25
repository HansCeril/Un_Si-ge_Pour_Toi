import Card from '@/components/Card';
import CardCompact from '@/components/CardCompact';
import { useAddFavoriteCovoiturageMutation, useGetAuthUserQuery, useGetCovoituragesQuery, useGetPassagerQuery, useRemoveFavoriteCovoiturageMutation } from '@/state/api'
import { useAppSelector } from '@/state/redux'
import { Covoiturage } from '@/types/prismaTypes';
import React from 'react'

const Listings = () => {

    const { data: authUser } = useGetAuthUserQuery();
    const { data: passager } = useGetPassagerQuery(
        authUser?.cognitoInfo?.userId || "",
        {
            skip: !authUser?.cognitoInfo?.userId
        }
    );
    const [addFavorite] = useAddFavoriteCovoiturageMutation();
    const[removeFavorite] = useRemoveFavoriteCovoiturageMutation();

    {/* Get View Mode */}
    const viewMode = useAppSelector((state) => state.global.viewMode);
    {/* Get Filters */}
    const filters = useAppSelector((state) => state.global.filters);

    {/* Get Covoiturages by filters */}
    const {
        data: covoiturages,
        isLoading,
        isError
    } = useGetCovoituragesQuery(filters);
    
    const handleFavoriteToggle = async (covoiturageId: number) => {
        if(!authUser) return;

        const isFavorite = passager?.favorites?.some(
            (fav: Covoiturage) => fav.id === covoiturageId
        );

        if (isFavorite) {
            await removeFavorite(
                {
                    cognitoId: authUser.cognitoInfo.userId,
                    covoiturageId
                }
            );
        } else {
            await addFavorite(
                {
                    cognitoId: authUser.cognitoInfo.userId,
                    covoiturageId
                }
            );
        }
    };

    if (isLoading) return <>Loading ...</>;
    if (isError || !covoiturages) return <div> Failed to fetch location </div>

    return (
        <div className='w-full'>
            <h3 className='text-sm px-4 font-bold'>
                {covoiturages.length}{" "}
                <span className='text-gray-700 font-normal'>
                    Places in {filters.location}
                </span>
            </h3>
            <div className='flex'>
                <div className='p-4 w-full'>
                    {covoiturages?.map((covoiturage) =>
                        viewMode === "grid" ? (
                            <Card 
                                key={covoiturage.id}
                                covoiturage={covoiturage}
                                isFavorite={
                                    passager?.favorites?.some(
                                        (fav: Covoiturage) => fav.id === covoiturage.id
                                    ) || false
                                }
                                onFavoriteToggle={() => handleFavoriteToggle(covoiturage.id)}
                                showFavoriteButton={!!authUser}
                                covoiturageLink={`/search/${covoiturage.id}`}
                            />
                        ) : (
                            <CardCompact
                              key={covoiturage.id}
                              covoiturage={covoiturage}
                              isFavorite={
                                passager?.favorites?.some(
                                  (fav: Covoiturage) => fav.id === covoiturage.id
                                ) || false
                              }
                              onFavoriteToggle={() => handleFavoriteToggle(covoiturage.id)}
                              showFavoriteButton={!!authUser}
                              covoiturageLink={`/search/${covoiturage.id}`}
                            />
                          )
                    )}

                </div>

            </div>
        </div>
  )
}

export default Listings