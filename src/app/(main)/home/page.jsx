import Banner from '@/components/homepage/Banner';
import Featured from '@/components/homepage/Featured';
import MarqueeBar from '@/components/homepage/MarqueeBar';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <MarqueeBar/>
            <Featured/>
            <WhyChooseUs/>
        </div>
    );
};

export default HomePage;