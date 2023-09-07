import React from 'react';
import { Link } from "react-router-dom";
import styles from "./index.module.css";

interface ButtonProps {
  children: React.ReactNode;
  linkTo?: string,
}

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