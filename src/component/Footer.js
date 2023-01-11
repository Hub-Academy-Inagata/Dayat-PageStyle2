import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6">
                            <img className='footer-logo' src={require('../img/footer-logo.svg').default} alt='' />
                            <p>Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-2">
                            <h5 className="footer-title">Informasi</h5>
                            <ul>
                                <li>
                                    <Link className='footer-links' to='' >Artikel</Link>
                                </li>
                                <li>
                                    <Link className='footer-links' to='' >Galeri</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-2">
                            <h5 className="footer-title">Tentang</h5>
                            <ul>
                                <li>
                                    <Link className='footer-links' to='' >Tentang Kami</Link>
                                </li>
                                <li>
                                    <Link className='footer-links' to='' >Hubungi Kami</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-2">
                            <h5 className="footer-title">Ikuti Kami</h5>
                            <ul>
                                <li>
                                    <Link className='footer-links' to='' ><FaFacebookF /> Nama Sekolah</Link>
                                </li>
                                <li>
                                    <Link className='footer-links' to='' ><FaTwitter /> Nama Sekolah</Link>
                                </li>
                                <li>
                                    <Link className='footer-links' to='' ><FaInstagram /> Nama Sekolah</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Copyright © 2021. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer