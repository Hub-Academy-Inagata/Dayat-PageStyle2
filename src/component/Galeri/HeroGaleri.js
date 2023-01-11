import React from 'react'

const HeroGaleri = () => {
    return (
        <>
            <section className='hero-galeri'>
                <div className='container-fluid container-md'>
                    <div className='hero-row row align-items-end align-items-md-center'>
                        <div className='col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block d-sm-none'>
                            <img src={require('../../img/hero-galeri.svg').default} alt="" />
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <h1 className='mb-1'>Galeri</h1>
                            <p className='mb-4'>Beberapa dokumentasi area sekolah dan kegiatan sekolah</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroGaleri