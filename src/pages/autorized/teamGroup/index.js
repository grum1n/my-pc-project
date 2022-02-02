import React, { useEffect, useState } from 'react';
import './teamGroup.css';
import Dashboard from '../../../components/Dashboard';
import DashboardContent from '../../../components/DashboardContent';
import { useUserAuth } from '../../../context/UserAuthContext';
import SingleCard from '../../../components/SingleCard';
import { uid } from 'uid';
import { fireDB } from '../../../server/firebase-config';
import { onValue, ref, remove, set, update } from 'firebase/database';
import * as FaIcons from 'react-icons/fa';

const TeamGroup = () => {
  const { user, logOut } = useUserAuth();

  const [group, setGroup] = useState('');
  const [groups, setGroups] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [groupUid, setGroupUid] = useState('');

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
  }

  useEffect(() => {
      onValue(ref(fireDB, `/groups`), (snapshot) => {
          setGroups([]);
          const data = snapshot.val();
          if(data !== null) {
              Object.values(data).map((group) => {
                  setGroups((oldArray) => [ ...oldArray, group]);
              });
          }
      });
  }, []);

  const writeToDatabase = () => {
      const uuid = uid();
      set(ref(fireDB , `/groups/${uuid}`), {
        group,
        uuid
      });
      setGroup('');
  };

  const handleUpdate = (group) => {
      setIsEdit(true);
      setGroupUid(group.uuid);
      setGroup(group.group);
  };

  const handleSubmitChange = () => {
      update(ref(fireDB, `/groups/${groupUid}`), {
        group,
        uuid: groupUid
      })
      setGroup('');
      setIsEdit(false);
  };

  const handleDelete = (group) => {
      remove(ref(fireDB, `/groups/${group.uuid}`))
  };

  return (
    <Dashboard userEmail={user.email} logOut={logOut}>
      <DashboardContent name='Team group'>
      <section className='section-one-card'> 
        <SingleCard title='Groups'>
          <ul className='groups-container'>
            <li>
            <input type='text' value={group} onChange={handleGroupChange} />
            {isEdit ? (
                <>
                  <button onClick={handleSubmitChange}>Change Group</button>
                  <button onClick={() => {
                      setIsEdit(false);
                      setGroup('');
                  }}>x</button>
                </>
            ) :
              (
                  <>
                  <button className='group-button' onClick={writeToDatabase} >Add group</button>
                  </>
              )}
            </li>  
            <li>
              {
                groups.map((group,index) => (
                  <p key={index} className='group-result' >
                    <span># {group.group}</span>
                    <div>
                      <button className='group-edit-btn'  onClick={() => handleUpdate(group)}><FaIcons.FaEdit /></button>
                      <button  className='group-delete-btn' onClick={() => handleDelete(group)}><FaIcons.FaTimes /></button>
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

export default TeamGroup;
