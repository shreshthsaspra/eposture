import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className='container_loader'>
            <div className='loader'>
            <img className='loader_img ms-lg-5 mb-5' src="/images/logo.png" alt="" />
                <div className='loader_dot'></div>
                <div className='loader_dot'></div>
                <div className='loader_dot'></div>
                <div className='loader_dot'></div>
                <div className='loader_dot'></div>
                <div className='loader_dot'></div>
                <div className='loader_text'>
                    {/* <img className='loader_img' src="/images/logo.png" alt="" /> */}
                </div>
            </div>
        </div>

    )
}

export default Loader
