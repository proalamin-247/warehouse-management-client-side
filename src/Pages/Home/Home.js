import React from 'react';
import Banner from './Banner/Banner';
import BenefitsToUse from './BenefitsToUse/BenefitsToUse';
import Items from './Items/Items';
import SendMessage from './SendMessage/SendMessage';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Items></Items>
           <BenefitsToUse></BenefitsToUse>
           <SendMessage></SendMessage>
        </div>
    );
};

export default Home;