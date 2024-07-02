// import React, { useEffect, useState } from 'react'
// import './style.css'
// export const TempApp = () => {

//   const [city,setCity]=useState(null);
//   const [search,setSearch]= useState("Mumbai");
//   useEffect(()=>{
//     const fetchApi= async ()=>{
//       const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8f644c3273d2fca042bb0db0ae026ba4`;
//       const respose=await fetch(url);
//       const resJson=await respose.json();
//       // console.log(resJson);
//       setCity(resJson.main);
//     };
//     fetchApi();
//   },[search])
//   return (
// <>

// <div className='box'>
//     <div className='inputData'>
//         <input type='search' value={search} textField='enter city'
//         className='inputFeild'
//         onChange={(event)=>{setSearch(event.target.value)}}/>
//     </div>
//     </div>
//     {!city?(<p>No Data found</p>):(
//      <div>
//        <div className='info'>
//       <h2 className='location'>
//         {search}</h2>
//         <h1 className='temp'>{city.temp}°cel</h1>
//         <h3 className='temp_max'>Min :{city.temp_min}°cel | Max : {city.temp_max}°cel</h3></div>
//      </div>
//     )}
//     </>
//   )
// }

// export default TempApp

import React, { useEffect, useState } from 'react';
import './style.css';

export const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Mumbai');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8f644c3273d2fca042bb0db0ae026ba4`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input
            type='search'
            value={search}
            className='inputFeild'
            onChange={(event) => setSearch(event.target.value)}
            placeholder='Enter city'
          />
        </div>
        {!city ? (
          <p className='noData'>No Data Found</p>
        ) : (
          <div>
            <div className='info'>
              <h2 className='location'>{search}</h2>
              <h1 className='temp'>{city.temp}°C</h1>
              <h3 className='temp_max'>
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
