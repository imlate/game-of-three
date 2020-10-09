import React from 'react';
import styles from './UserImage.module.css';
import {User} from '../../models/user';

type UserImageProps = {
  user: User;
}

function UserImage({user}: UserImageProps) {
  return (
    <img src={user.imageSource}
         className={styles.UserImage}
         alt={user.name}/>
  );
}

export default UserImage;