import Banner from '@/components/homepage/Banner';
import Featured from '@/components/homepage/Featured';
import HowItWorks from '@/components/homepage/HowItWorks';
import MarqueeBar from '@/components/homepage/MarqueeBar';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <MarqueeBar/>
            <Featured/>
            <WhyChooseUs/>
            <HowItWorks/>
        </div>
    );
};

export default HomePage;