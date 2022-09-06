import React from 'react';
import notFound from '../../photoes/404.jpg'
const NotFound = () => {
   return (
      <div className="d-flex align-items-center justify-content-center vw-100 vh-100 ">
         <img className='w-25' src={notFound} alt="" />
      </div>
   );
};

export default NotFound;