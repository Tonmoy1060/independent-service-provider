import React from 'react';
import Banner from './Banner';
import GetInTouch from './GetInTouch';
import LoadServices from './LoadServices';


const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <LoadServices></LoadServices>
         <GetInTouch></GetInTouch>
      </div>
   );
};

export default Home;