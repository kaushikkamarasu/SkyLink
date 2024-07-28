'use client'
import { Button } from '@/components/ui/button'
import CallList from '@/components/ui/CallList'
import { useRouter } from 'next/navigation'

import React from 'react'

const Recordings = () => {
    const router = useRouter();
    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <h1 className='text-3xl font-bold'>
                Recordings
            </h1>
            <CallList type='recordings' />
        </section>
    )
}

export default Recordings