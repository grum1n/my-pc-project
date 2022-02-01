import React, { useState } from "react";
import { storage } from '../../../../../server/firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import EditSubForm from "./EditSubForm";


const EditCarPartForm = ({ carId, carBrand, carModel, carYear,carPartId, carPartName}) => {
    const [ image, setImage ] = useState('');
    const [url, setUrl] = useState(null);
  
    const handleImageChange = (event) => {
      if (event.target.files[0]){
        setImage(event.target.files[0]);
      }
    }
    console.log('image',image)
  
    const handleSubmit = () => {
      const imageRef = ref(storage, `carPartImages/${image.name}`);
      uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          const images = [];
          if (url) {
            images.push(url)
          }
          setUrl(images);
        }).catch((error) => {
          console.log(error.message, 'error  getting the image url')
        })
        setImage(null);
      }).catch((error) => {
        console.log(error.message)
      })
    }
  
    return (
        <>
          <div>
              <img src={url} alt='' style={{ width: '213px', height: '160px' }}/>
              <input  type='file' onChange={handleImageChange} />
              <button onClick={handleSubmit}>Add foto to form</button>
              <h1>Hello world</h1>
              <hr />
          </div>
          <EditSubForm 
              carId={carId} 
              carBrand={carBrand} 
              carModel={carModel} 
              carYear={carYear} 
              carPartId={carPartId} 
              carPartName={carPartName}
              carPartImageUrl={url}
          />
        </>
    )
}

export default EditCarPartForm;