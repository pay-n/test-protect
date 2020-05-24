import React from 'react';
import  Banner  from './Banner';
import Footer from './Footer';

const Wrapper = () => {
    return (
        <main id="wrapper" className="divided">
            <Banner />
            <Footer />
        </main>
    );
}

export default Wrapper;