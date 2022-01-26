import React, { useEffect, useState } from 'react';
import './customers.css';
import Dashboard from '../../../components/Dashboard';
import DashboardContent from '../../../components/DashboardContent';
import { useUserAuth } from '../../../context/UserAuthContext';
import SingleCard from '../../../components/SingleCard';
import { uid } from 'uid';
import { fireDB } from '../../../server/firebase-config';
import { onValue, ref, remove, set, update } from 'firebase/database';
import * as FaIcons from 'react-icons/fa';

const Custumers = () => {
  const { user, logOut } = useUserAuth();

  const [customer, setCustomer] = useState('');
  const [customers, setCustomers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [groupUid, setGroupUid] = useState('');

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  }

  useEffect(() => {
    onValue(ref(fireDB, `/customers`), (snapshot) => {
      setCustomers([]);
        const data = snapshot.val();
        if(data !== null) {
          Object.values(data).map((customer) => {
            setCustomers((oldArray) => [ ...oldArray, customer]);
          });
        }
    });
  }, []);

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(fireDB , `/customers/${uuid}`), {
      customer,
      uuid
    });
    setCustomer('');
  };

  const handleUpdate = (customer) => {
    setIsEdit(true);
    setGroupUid(customer.uuid);
    setCustomer(customer.customer);
  };

  const handleSubmitChange = () => {
    update(ref(fireDB, `/customers/${groupUid}`), {
      customer,
      uuid: groupUid
    })
    setCustomer('');
    setIsEdit(false);
  };

  const handleDelete = (customer) => {
    remove(ref(fireDB, `/customers/${customer.uuid}`))
  };

  return (
    <Dashboard userEmail={user.email} logOut={logOut}>
      <DashboardContent name='Customers'>
      <section className='section-one-card'> 
        <SingleCard title='Customers page'>
          <ul className='groups-container'>
            <li>
            <input type='text' value={customer} onChange={handleCustomerChange} />
         
            {isEdit ? (
                <>
                  <button onClick={handleSubmitChange}>Change client info</button>
                  <button onClick={() => {
                      setIsEdit(false);
                      setCustomer('');
                  }}>x</button>
                </>
            ) :
              (
                  <>
                  <button className='group-button' onClick={writeToDatabase} >Add client</button>
                  </>
              )}
            </li>  
            <li>
              {
                customers.map((customer,index) => (
                  <p key={index} className='group-result' >
                    <span># {customer.customer}</span>
                    <div>
                      <button className='group-edit-btn'  onClick={() => handleUpdate(customer)}><FaIcons.FaEdit /></button>
                      <button  className='group-delete-btn' onClick={() => handleDelete(customer)}><FaIcons.FaTimes /></button>
                    </div>
                  </p>
                ))
              }
              </li>
          </ul>
        </SingleCard>
      </section>
      </DashboardContent>
    </Dashboard>
  );
};

export default Custumers;
