import React, { useState } from 'react';
import { useEffect } from 'react';
import Services from './Services';
import background from "../../photoes/background/bg2.jpg";

const LoadServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('service.json')
      .then(res => res.json())
      .then(data => setServices(data))
   },[]);
   return (
         <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="p-lg-5 p-3 "
    >
      <h1 className="text-center fw-bold fs-1 mt-5 p-4">Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-5 px-lg-5 mx-lg-3 pb-5 mb-5">
      {
            services.map(service => <Services
               key={service.id}
               service={service}
            ></Services>)
         }
      </div>
    </div>
   );
};

export default LoadServices;