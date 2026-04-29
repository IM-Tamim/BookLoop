import Banner from '@/components/homepage/Banner';
import Featured from '@/components/homepage/Featured';
import Marquee from '@/components/homepage/Marquee';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Marquee/>
            <Featured/>
        </div>
    );
};

export default HomePage;