import React from 'react'

const KeunggulanTentang = () => {
    return (
        <>
            <section className="keunggulan-tentang">
                <div className="container-fluid container-md">
                    <p>Kenapa Memilih Kami</p>
                    <h1>Keunggulan Sekolah Kami</h1>
                    <div className="row justify-content-center">
                        <div className="keunggulan-col col-sm-6 col-md-6 col-lg-4">
                            <div className="icon">
                                <img src={require('../../img/book.svg').default} alt='' />
                            </div>
                            <h4>Menggunakan <br />Kurikulum Terbaru</h4>
                            <p>Sekolah kami menerapkan kurikulum terbaru saat proses belajar agar siswa mendapatakan materi terbaru sesuai ketentuan</p>
                        </div>
                        <div className="keunggulan-col col-sm-6 col-md-6 col-lg-4">
                            <div className="icon">
                                <img src={require('../../img/clock.svg').default} alt='' />
                            </div>
                            <h4>Efektifitas Waktu <br />Saat Belajar Disekolah</h4>
                            <p>Sekolah kami memiliki waktu belajar yang dirancang agar para siswa tidak jenuh dan dapat menerima pelajaran dengan baik </p>
                        </div>
                        <div className="keunggulan-col col-sm-6 col-md-6 col-lg-4">
                            <div className="icon">
                                <img src={require('../../img/pen-tool.svg').default} alt='' />
                            </div>
                            <h4>Penyaluran <br />Bakat dan Minat</h4>
                            <p>Sekolah kami memiliki berbagai macam kegitan akademik maupun non akademik untuk menyalurkan bakat dan minat siswa</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KeunggulanTentang