"use client";

import SettingsForm from '@/components/SettingsForm';
import { useGetAuthUserQuery, useUpdatePassagerSettingsMutation } from '@/state/api';
import React from 'react'

const PassagerSettings = () => {

    const { data: authUser, isLoading } = useGetAuthUserQuery();
    const [updatePassager] = useUpdatePassagerSettingsMutation();
    
    if (isLoading) return <>Loading...</>;

    const initialData = {
        name: authUser?.userInfo.name,
        email: authUser?.userInfo.email,
        phoneNumber: authUser?.userInfo.phoneNumber,
    };

    const handleSubmit = async (data: typeof initialData) => {
        await updatePassager({
          cognitoId: authUser?.cognitoInfo?.userId,
          ...data,
        });
    };
    

    return (

        
        <SettingsForm
            initialData={initialData}
            onSubmit={handleSubmit}
            userType="passager"
        />
    )
}

export default PassagerSettings;