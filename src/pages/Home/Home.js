import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import GetInTouch from './GetInTouch';
import Services from './Services';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <GetInTouch></GetInTouch>
      </div>
   );
};

export default Home;