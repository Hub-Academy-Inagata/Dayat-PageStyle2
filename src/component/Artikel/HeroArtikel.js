import React from 'react'

const HeroArtikel = () => {
    return (
        <>
            <section className='hero-artikel'>
                <div className='container-fluid container-md'>
                    <div className='hero-row row align-items-end align-items-md-center'>
                        <div className='col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block d-sm-none'>
                            <img src={require('../../img/hero-artikel.svg').default} alt="" />
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <h1 className='mb-1'>Artikel</h1>
                            <p className='mb-4'>Artikel menarik seputar pendidikan yang bisa anda baca secara gratis </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroArtikel