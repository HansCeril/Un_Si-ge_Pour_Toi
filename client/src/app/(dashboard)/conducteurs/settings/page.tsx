"use client";

import SettingsForm from '@/components/SettingsForm';
import { useGetAuthUserQuery, useUpdateConducteurSettingsMutation, useUpdatePassagerSettingsMutation } from '@/state/api';
import React from 'react'

const ConducteurSettings = () => {

    const { data: authUser, isLoading } = useGetAuthUserQuery();
    const [updateConducteur] = useUpdateConducteurSettingsMutation();
    
    if (isLoading) return <>Loading...</>;

    const initialData = {
        name: authUser?.userInfo.name,
        email: authUser?.userInfo.email,
        phoneNumber: authUser?.userInfo.phoneNumber,
    };

    const handleSubmit = async (data: typeof initialData) => {
        await updateConducteur({
          cognitoId: authUser?.cognitoInfo?.userId,
          ...data,
        });
    };
    

    return (

        
        <SettingsForm
            initialData={initialData}
            onSubmit={handleSubmit}
            userType="conducteur"
        />
    )
}

export default ConducteurSettings;