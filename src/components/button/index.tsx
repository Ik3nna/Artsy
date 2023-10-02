import React from 'react';
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import shoppingStyles from "../../pages/marketplace/checkout/index.module.css"

// type
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ children, linkTo, className, onClick }) => {
  return (
    <Link 
      to={`${linkTo}`} 
      className={`${styles.btn} ${shoppingStyles[className]}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Button