import React from 'react'
import HeroTentang from '../component/Tentang/HeroTentang'
import KeunggulanTentang from '../component/Tentang/KeunggulanTentang'
import ProfilTentang from '../component/Tentang/ProfilTentang'
import StaffTentang from '../component/Tentang/StaffTentang'
import VideoTentang from '../component/Tentang/VideoTentang'

const Tentang = () => {
    return (
        <>
            <HeroTentang />
            <ProfilTentang />
            <KeunggulanTentang />
            <StaffTentang />
            <VideoTentang />
        </>
    )
}

export default Tentang