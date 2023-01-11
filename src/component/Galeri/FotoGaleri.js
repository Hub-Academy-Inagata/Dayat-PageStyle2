import React from 'react'

const FotoGaleri = () => {

    const fotos = [
        {
            image: "./img/galeri-1.png",
            title: "Ruangan Kelas",
            text: "Ruangan yang digunakan untuk proses belajar mengajar",
        },
        {
            image: "./img/galeri-2.png",
            title: "Halaman Sekolah",
            text: "Halaman tempat siswa dapat bermain dan berkumpul",
        },
        {
            image: "./img/galeri-3.png",
            title: "Lorong Sekolah",
            text: "Lorong sekolah sebagai jalan penghubung antar kelas",
        },
        {
            image: "./img/galeri-4.png",
            title: "Belajar Mengajar",
            text: "Kegiatan belajar mengajar yang dilakukan di dalam kelas",
        },
        {
            image: "./img/galeri-5.png",
            title: "Kelas Bahasa Inggris",
            text: "Kelas bahasa inggris agar siswa bisa lebih fasih berbahasa inggris",
        },
        {
            image: "./img/galeri-6.png",
            title: "Karya Murid",
            text: "Hasil karya murid dari kelas prakarya yang dikerjakan secara individu dan kelompok",
        },
        {
            image: "./img/galeri-7.png",
            title: "Lomba Tarik Tambang",
            text: "Kegiatan lomba tarik tambang yang diadakan diacara sekolah",
        },
        {
            image: "./img/galeri-8.png",
            title: "Pameran Teknologi",
            text: "Pameran alat alat dengan teknologi terbaru agar siswa bisa mengamati",
        },
        {
            image: "./img/galeri-9.png",
            title: "Kelas Menggambar",
            text: "Kelas agar siswa bisa mengembangkan kemampuan non akademik",
        },
        {
            image: "./img/galeri-10.png",
            title: "Tugas Kelompok",
            text: "Selain tugas individu, kami juga memberikan tugas kelompok",
        },
        {
            image: "./img/galeri-11.png",
            title: "Belajar dan Bermain",
            text: "Agar siswa tidak jenuh, kami menerapkan metode belajar dan bermain",
        },
        {
            image: "./img/galeri-12.png",
            title: "Tamasya Sekolah",
            text: "Tamasya bersama agar siswa lebih akrab dan tidak jenuh",
        },

    ]

    return (
        <>
            <div className="foto-galeri">
                <div className="container-fluid container-md">
                    <p>Galeri</p>
                    <div className="dokumentasi">
                        <h1>Dokumentasi Sekolah</h1>
                    </div>
                    <div className="row">
                        {
                            fotos.map((foto, index) => {
                                return (
                                    <div className="card-col vintage col-12 col-sm-4 col-md-4">
                                        <img src={foto.image} alt='geleri1' />
                                        <h4>{foto.title}</h4>
                                        <p>{foto.text}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default FotoGaleri