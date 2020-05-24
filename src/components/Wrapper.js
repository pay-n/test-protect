import React from 'react';
import  Banner  from './Banner';
import Footer from './Footer';
import Header from './Header';

const Wrapper = () => {
    return (
        <div id="wrapper" className="divided">
            <Header />
            <Banner />
            <Footer />
        </div>
    );
}

export default Wrapper;