import React from 'react';
import { Link } from "react-router-dom";
import styles from "./index.module.css";

// type
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ children, linkTo }) => {
  return (
    <Link 
      to={`${linkTo}`} 
      className={styles.btn}
    >
      {children}
    </Link>
  )
}

export default Button