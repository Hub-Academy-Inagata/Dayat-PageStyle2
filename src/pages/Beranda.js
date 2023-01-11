import React from 'react'
import ArtikelBeranda from '../component/Beranda/ArtikelBeranda'
import GaleriBeranda from '../component/Beranda/GaleriBeranda'
import HeroBeranda from '../component/Beranda/HeroBeranda'
import KeunggulanBeranda from '../component/Beranda/KeunggulanBeranda'
import TentangBeranda from '../component/Beranda/TentangBeranda'

const Beranda = () => {
    return (
        <>
            <HeroBeranda />
            <KeunggulanBeranda />
            <TentangBeranda />
            <GaleriBeranda />
            <ArtikelBeranda />
        </>
    )
}

export default Beranda