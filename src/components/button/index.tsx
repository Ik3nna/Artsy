import React from 'react';
import { Link } from "react-router-dom";
import styles from "./index.module.css";

// type
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ children, linkTo, onClick }) => {
  return (
    <Link 
      to={`${linkTo}`} 
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Button