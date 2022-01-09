import React from 'react';


const LogoImage = (props) => {
  return (
    <>
        <img src={props.url} alt={props.title} className={props.cName}/>
    </>
  );
};

export default LogoImage;
