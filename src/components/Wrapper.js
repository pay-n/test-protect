import React from 'react';
import  Banner  from './Banner';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';

const Wrapper = () => {
    return (
        <main id="wrapper" className="divided">
            <Header />
            <Banner />
            <Search />
            <Footer />
        </main>
    );
}

export default Wrapper;