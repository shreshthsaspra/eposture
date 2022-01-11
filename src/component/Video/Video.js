import React from 'react'
import './Video.css'

const Video = () => {
    return (
        <>
           <section className="video" id="video">
               <div className="container">
                   <div className="video_rap">
                       <div className="video_heading">
                        <img className='img_fluid video_logo me-4' src="/images/logo.png" alt="Video logo" />
                        <span>動画</span>
                       </div>
                       <div className="video_box">
                       <iframe width="100%" height="400" src="https://www.youtube.com/embed/gkOgxeQf0UE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                       </div>
                   </div>
               </div>
           </section>
        </>
    )
}

export default Video
