// Path: app/properties/index.jsx
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import react from 'react';
import FeaturedProperties from '@/components/FeaturedProperties';
const HomePage = () => {

    return (
        <>
            <Hero />
            <InfoBoxes />
            <FeaturedProperties />
            <HomeProperties />
        </>
    );
};
export default HomePage;

