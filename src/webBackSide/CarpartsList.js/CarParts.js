import React from 'react';
import { data } from './PartsData';

const CarParts = () => {
  const date = new Date();
  return (
     <>
      {
        data.map((item) => {
          return (
            <>
            <ul className='car-part-box'>
              <li className='car-part-photo-box'>
                <div className='col-1 photo-box' >
                  <span className='item-date'>{date.getFullYear()}</span>
                </div>
              </li>
              <li className='car-part-info'>
                <h3 className='col-2 carPart'>{item.carPart}</h3>
                <p className='col-3 carTitle'>Markė : {item.carTitle}</p>
                <p className='col-4 carPartcode'>Detalės kodas : {item.carPartcode}</p>
                <p className='col-4 partID'>sandėlio nr.: {item.partID}</p>
                <p className='col-4 carPartPrice'>Kaina : {item.carPartPrice}</p>
              </li>
            </ul>
            </>
          );
        })
      }
     </>
  );
};

export default CarParts;
