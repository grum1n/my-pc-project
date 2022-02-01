// import React,  {useState} from 'react';
// import './addEdit.css';
// import { fireDB } from '../../../server/firebase-config';
// import { ref, set } from 'firebase/database';
// import { uid } from 'uid';

// function AddEdit() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//       // write
//       const writeToDatabase = () => {
//         const uuid = uid();
//         set(ref(fireDB , `/customers/${uuid}`), {
//             name,
//             email,
//             uuid
//         });
//         setName('');
//         setEmail('');
//     };
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     }
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     }
   
//     return (
//         <div style={{ marginTop: '100px' }}>
//             <form 
//                 style={{
//                     margin: 'auto',
//                     padding: '15px',
//                     maxWidth: '400px',
//                     alignContent: 'center',
//                 }}
//                 onSubmit={writeToDatabase}
//             >
//                 <label htmlFor='name'>Customers Name</label>
//                 <input 
//                     type='text'
//                     id='name'
//                     name='name'
//                     placeholder='Your name.. '
//                     value={name || ''}
//                     onChange={handleNameChange}
//                 />
//                 <label htmlFor='email'>email</label>
//                 <input 
//                     type='email'
//                     id='email'
//                     name='email'
//                     placeholder='Your email.. '
//                     value={email || ''}
//                     onChange={handleEmailChange}
//                 />
               
//                 <input type='submit' />
//             </form>
//         </div>
//     )
// }

// export default AddEdit;
