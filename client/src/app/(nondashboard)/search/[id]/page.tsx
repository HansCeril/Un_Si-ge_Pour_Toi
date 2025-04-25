"use client";


import { useGetAuthUserQuery } from '@/state/api';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import ImagePreviews from './ImagePreviews';
import CovoiturageOverview from './CovoiturageOverview';
import CovoiturageLocation from './CovoiturageLocation';
import ContactWidget from './ContactWidget';
import ApplicationModal from './ApplicationModal';



const DetailSearch = () => {
    const { id }  = useParams();
    const covoiturageId = Number(id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: authUser } = useGetAuthUserQuery();

    return (
        <div>
            <ImagePreviews images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}/>
            <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
                <div className="order-2 md:order-1">
                    <CovoiturageOverview covoiturageId={covoiturageId} />
                    <CovoiturageLocation covoiturageId={covoiturageId} />
                </div>
                <div className="order-1 md:order-2">
                    <ContactWidget onOpenModal={() => setIsModalOpen(true)} />
                </div>
            </div>
            {authUser && (
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    covoiturageId={covoiturageId}
                />
            )}
        </div>
    )
}

export default DetailSearch;