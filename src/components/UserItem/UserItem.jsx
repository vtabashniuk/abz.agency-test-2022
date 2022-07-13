import React from 'react';
import cover from '../../assets/photo-cover.svg';
import nameTrimming from '../../utils/nameTrimming.js';
import phoneNumberOutputFormatting from '../../utils/phoneNumberOutputFormatting.js';

const UserItem = ({ user }) => {
  const { photo, name, position, email, phone } = user;

  return (
    <div className="userCard">
      <img
        src={photo}
        alt={name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = cover;
        }}
        className="userPhoto"
      />
      <p className="userName">{nameTrimming(name)}</p>
      <p className="userPosition">{position}</p>
      <address className="userAddress">
        <ul>
          <li>
            <a href={`mailto:${email}`}>{nameTrimming(email, 26)}</a>
          </li>
          <li>
            <a href={`tel:${phone}`}>{phoneNumberOutputFormatting(phone)}</a>
          </li>
        </ul>
      </address>
    </div>
  );
};

export default UserItem;
