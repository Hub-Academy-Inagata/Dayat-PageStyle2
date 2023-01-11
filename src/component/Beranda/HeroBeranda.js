import React from 'react'

const HeroBeranda = () => {
    return (
        <>
            <section className='hero'>
                <div className='container-fluid container-md'>
                    <div className='hero-row row align-items-end align-items-md-center'>
                        <div className='col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block d-sm-none'>
                            <img src={require('../../img/hero.svg').default} alt="" />
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <h1 className='mb-1'>Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik</h1>
                            <p className='mb-4'>jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                            <button className='btn btn-primary rounded-pill mx-auto mx-sm-0'>Daftar Sekarang</button>
                        </div>
                        {/* <div className='col-sm-6 col-md-6'>
                            <img src={require('../../img/hero.svg').default} alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBeranda