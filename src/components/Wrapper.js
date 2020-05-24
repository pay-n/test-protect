import React from 'react';
import  Banner  from './Banner';
import Footer from './Footer';

const Wrapper = () => {
    return (
        <div id="wrapper" className="divided">
            <Banner />
            <Footer />
        </div>
    );
}

export default Wrapper;