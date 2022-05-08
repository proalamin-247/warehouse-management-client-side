import React from 'react';
import Banner from './Banner/Banner';
import BenefitsToUse from './BenefitsToUse/BenefitsToUse';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Items></Items>
           <BenefitsToUse></BenefitsToUse>
        </div>
    );
};

export default Home;