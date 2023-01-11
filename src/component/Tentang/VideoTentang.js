import React from 'react'
import ReactPlayer from 'react-player'

const VideoTentang = () => {
    return (
        <>
            <section className="video-tentang">
                <div className="container-fluid container container-sm container-md">
                    <p>Cuplikan Sekolah</p>
                    <h1>Video Profil</h1>
                    <div className="video-wrapper">
                        <ReactPlayer className='video-player' url='https://www.youtube.com/watch?v=AUPnG-VidS8' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoTentang