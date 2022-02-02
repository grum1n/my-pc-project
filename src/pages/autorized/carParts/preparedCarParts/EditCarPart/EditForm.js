import React, { useState } from "react";
import { storage } from '../../../../../server/firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import EditSubForm from "./EditSubForm";
import './editForm.css';
import SingleCard from '../../../../../components/SingleCard';


const EditCarPartForm = ({ carId, carBrand, carModel, carYear,carPartId, carPartName}) => {
    const [ image, setImage ] = useState('');
    const [url, setUrl] = useState(null);
  
    const handleImageChange = (event) => {
      if (event.target.files[0]){
        setImage(event.target.files[0]);
      }
    }
  
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
          alert(error.message, 'error  getting the image url')
        })
        setImage(null);
      }).catch((error) => {
        alert(error.message)
      })
    }
  
    return (
        <>
          <section className='section-two-cards'>
              <SingleCard title='Add Foto'>
                <div className='editForm-addFoto-container'>
                  <h3 className='editForm-partName'>{carPartName}</h3>
                  <img src={url} alt='' className='editForm-image'/>
                  <h5>Foto must be 640 x 480</h5>
                  <input  type='file' onChange={handleImageChange} />
                  <button className='editForm-img-button' onClick={handleSubmit}>Add foto to form</button>
                </div>
              </SingleCard>
              <SingleCard title='Add car part info'>
                <EditSubForm 
                  carId={carId} 
                  carBrand={carBrand} 
                  carModel={carModel} 
                  carYear={carYear} 
                  carPartId={carPartId} 
                  carPartName={carPartName}
                  carPartImageUrl={url}
              />
              </SingleCard>
          </section>
        </>
    )
}

export default EditCarPartForm;