import React from 'react'

const KontakForm = () => {
    return (
        <>
            <section className="kontak-form">
                <div className="container-fluid container-sm container-md">
                    <p>Dapatkan Informasi Lengkap</p>
                    <h1>Kontak Kami</h1>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6">
                            <div className="contact-item d-flex">
                                <img src={require('../../img/telpon.svg').default} alt='' />
                                <div className="contact-text">
                                    <p>(+62) 812 698 15172</p>
                                    <p>(+62) 812 698 15172</p>
                                </div>
                            </div>
                            <div className="contact-item d-flex">
                                <img src={require('../../img/email.svg').default} alt='' />
                                <div className="contact-text">
                                    <p>contact@sekolahanak.com</p>
                                    <p>info@sekolah.anak.com</p>
                                </div>
                            </div>
                            <div className="contact-item d-flex">
                                <img src={require('../../img/lokasi.svg').default} alt='' />
                                <div className="contact-text">
                                    <p>jL. Soekarno hatta J-12 <br />Malang</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6">
                            <form>
                                <div className="mb-3">
                                    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Nama Anda*' />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email Anda*' />
                                </div>
                                <div className="mb-3">
                                    <input type="telpon" className="form-control" id="exampleInputPassword1" placeholder='Nomor Telpon*' />
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" />
                                    <label htmlFor="floatingTextarea2">Pesan Anda*</label>
                                </div>
                                <form className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary rounded-pill">Kirim Pesan</button>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KontakForm