import Banner from '@/components/homepage/Banner';
import Featured from '@/components/homepage/Featured';
import Marquee from '@/components/homepage/Marquee';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Marquee/>
            <Featured/>
            <WhyChooseUs/>
        </div>
    );
};

export default HomePage;