import React from 'react';
import Banner from '../../../Shared/Banner';
import Academis from '../Academy/Academis';
import Players from '../Players/Players';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Players></Players>
            <Academis></Academis>
        </div>
    );
};

export default Home;