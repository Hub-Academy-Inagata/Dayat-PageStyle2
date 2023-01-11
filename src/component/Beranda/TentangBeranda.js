import React from 'react'

const TentangBeranda = () => {
    return (
        <>
            <div className="tentang-beranda">
                <div className="container-fluid container-md">
                    <div className="row justify-content-center">
                        <div className="tentang-col col-sm-6 col-md-6">
                            <img src={require('../../img/tentang.svg').default} alt='image' />
                        </div>
                        <div className="tentang-col col-sm-6 col-md-6">
                            <h1>Tentang Kami</h1>
                            <p>Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini.</p>
                            <button className='btn btn-primary rounded-pill mx-auto mx-sm-0'>Baca Selengkapnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TentangBeranda