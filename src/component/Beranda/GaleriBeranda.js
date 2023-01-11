import React from 'react'
import { Link } from 'react-router-dom'

const GaleriBeranda = () => {
    return (
        <>
            <div className="galeri-beranda">
                <div className="container-fluid container-md">
                    <p>Galeri</p>
                    <div className="dokumentasi">
                        <h1>Dokumentasi Sekolah</h1>
                        <span><Link className='all-link' to='/galeri'>Lihat Semua</Link></span>
                    </div>
                    <div className="row">
                        <div className="card-col vintage col-12 col-sm-4 col-md-4">
                            <img src={require('../../img/galeri-1.svg').default} alt='geleri1' />
                            <h4>Sharing Session</h4>
                            <p>Kegiatan menukar pendapat dan pikiran anatara guru dan siswa</p>
                        </div>
                        <div className="card-col vintage col-12 col-sm-4 col-md-4">
                            <img src={require('../../img/galeri-2.svg').default} alt='geleri2' />
                            <h4>Belajar Mengajar</h4>
                            <p>Kegiatan belajar mengajar diadakan setiap hari Senin hingga Jum’at</p>
                        </div>
                        <div className="card-col vintage col-12 col-sm-4 col-md-4">
                            <img src={require('../../img/galeri-3.svg').default} alt='geleri3' />
                            <h4>Presentasi Projek</h4>
                            <p>Kegiatan menunjukan hasil pekerjaan dari guru untuk melatih keberanian</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GaleriBeranda