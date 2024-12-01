import React from 'react';
import Carousel from '../components/HomePage_Carousel';
import Latest from '../components/Latest';
import OurPolicy from '../components/OurPolicy';
import Query from '../components/Query';
import Header from '../components/HomePage_Header';

export default function HomePage() {
    return (
        <div>
            <Header/>
            <Carousel />
            <Latest />
            <OurPolicy />
            <Query />
        </div>
    );
}
