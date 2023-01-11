import React from 'react'

const HeroTentang = () => {
    return (
        <>
            <section className='hero-tentang'>
                <div className='container-fluid container-md'>
                    <div className='hero-row row align-items-end align-items-md-center'>
                        <div className='col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block d-sm-none'>
                            <img src={require('../../img/hero-tentang.svg').default} alt="" />
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <h1 className='mb-1'>Tentang Kami</h1>
                            <p className='mb-4'>Informasi Tentang Kami</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroTentang