import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PostArtikel = () => {

    const [datas, setDatas] = useState([]);



    const getArtikel = async () => {
        const artikels = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bbe53c2289844b2abc881fa290a6bc69");
        const value = await artikels.json();
        const result = value.articles.map(data => {
            return {
                dates: "12 Desember 2021",
                img: data.urlToImage,
                title: data.title,
                desc: data.description,
                newsUrl: data.url
            }
        })
        setDatas(result);
    }
    // console.log(datas);

    useEffect(() => {
        getArtikel()
    }, [])

    // let navigate = useNavigate();
    // const redirectPage = (datas) => {
    //     navigate(datas.newsUrl);
    // }
    // console.log(redirectPage)


    return (
        <>
            <section className="post-artikel">
                <div className="container-fluid container-sm container-md">
                    <div className="row">
                        <div className="col-post col-12 col-sm-12 col-md-6">
                            <img src={require('../../img/artikel-post.svg').default} className="card-img-top" alt="image" />
                        </div>
                        <div className="col-post col-12 col-sm-12 col-md-6">
                            <span className="col-post-dates"><p className='rounded-pill'>12 Desember 2021</p></span>
                            <h4>Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</h4>
                            <p>Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . . </p>
                            <p>Penulis : Shinta A.P</p>
                            <span><Link to='/artikel/1' className='col-post-button'>Baca Selengkapnya</Link></span>

                        </div>
                    </div>
                    <div className="row">
                        {
                            datas.map((artikels, index) => {
                                return (
                                    <div className="col-post col-12 col-sm-6 col-md-4" key={index}>
                                        <div className="card">
                                            <img src={artikels.img} className="card-img-top" alt="image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{artikels.title}</h5>
                                                <p className="card-text">{artikels.desc}</p>
                                                <a className="col-post-button" href={artikels.newsUrl} >Baca Selengkapnya</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostArtikel