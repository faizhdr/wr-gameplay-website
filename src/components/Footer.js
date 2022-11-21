import React from 'react';
import logoImage from '../img/logo-blue.svg'


const Footer = () => {
    return (
        <div className="container">
            <footer className="my-5">
                <div className='align-content-center text-center text-muted border-bottom mb-3'>
                <p className='  pb-3 '><img
                alt=""
                src={logoImage}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
                </p>
                <p className='ps-5 pe-5'>Ayo mainkan League of Legends Wildrift</p>
                </div>
                <p className="text-center text-muted">&copy; 2022 faiz-zaki-syahdan-daus, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;
