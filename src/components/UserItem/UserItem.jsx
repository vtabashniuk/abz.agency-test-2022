import React from 'react';
import cover from '../../assets/photo-cover.svg';

const UserItem = ({ user }) => {
  const { photo, name, position, email, phone, registration_timestamp } = user;
  const regDate = new Date(registration_timestamp);

  return (
    <div>
      <img
        src={photo}
        alt={name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = cover;
        }}
      />
      <p>{name}</p>
      <p>{position}</p>
      <address>
        <ul>
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        </ul>
        <p>{`${regDate.getFullYear()}-${
          regDate.getMonth() + 1
        }-${regDate.getDay()}`}</p>
      </address>
    </div>
  );
};

export default UserItem;
