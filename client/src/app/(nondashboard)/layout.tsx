"use client";

import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import { useGetAuthUserQuery } from '@/state/api'
import React, { Children } from 'react'

const layout = ({children}: { children: React.ReactNode}) => {

  const { data: authUser } = useGetAuthUserQuery();
  return (
    <div className="h-full w-full">
        {/* NAVBAR */}
        <Navbar />
        <main
            className={`h-full flex w-full flex-col`}
            style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
        >
            {children}
        </main>
    
    </div>
  )
}

export default layout