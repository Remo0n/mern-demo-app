import React from 'react';

import Card from '../../shared/components/UIElements/Card/Card.js';
import UserItem from './UserItem.js'
import './UserList.css'

const UserList = props => {
    
  if (props.users.length === 0) {
      return (<div className='center'>
          <Card>
            <h2>No Users Found</h2>
          </Card>
      </div>)
  };
  return <ul className="users-list"> 
      {props.users.map(user => (
      <UserItem
       id={user.id} 
       key={user.id} 
       name={user.name} 
       image={user.image} 
       placeCount={user.places} 
       />
       ))}
  </ul>
  
};


export default UserList;
