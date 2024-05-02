import React from 'react';
import {  NavLink } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Button from '../button';
import styles from "./index.module.css";

// assets
import artsy from "../../assets/ARTSY..svg"

const Footer: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return `${isActive ? styles.activeLink : ""}`;
  };

  const navItem1 = [
    { id: 1, item: "Home", linkTo: "/home"},
    { id: 2, item: "Marketplace", linkTo: "/marketplace"}
  ]

  const navItem2 = [
    { id: 1, item: "Auctions", linkTo: "/auctions"},
    { id: 2, item: "Drop", linkTo: "/drop"}
  ]
  
  return (
    <footer>
      <section className={styles.newsletter}>
        <p>NEWSLETTER</p>

        <p>Subscribe to get daily updates on new drops & exciting deals </p>

        <div>
          <input type='text' placeholder='ENTER YOUR EMAIL' />
          <Button linkTo='#'>SUBSCRIBE</Button>
        </div>
                
      </section>

      <section className={styles.mn_footer}>
        <img src={artsy} alt="logo" onClick={()=> window.location.reload()}  />

        <ul>
          {navItem1.map((item)=>(
            <li key={item.id}>
              <NavLink className={navLinkClass} to={item.linkTo} onClick={()=>window.scroll(0, 0)}>
                {item.item}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul>
          {navItem2.map((item)=>(
            <li key={item.id}>
              <NavLink className={navLinkClass} to={item.linkTo} onClick={()=>window.scroll(0, 0)}>
                {item.item}
              </NavLink>
            </li>
          ))}
        </ul>
                  
        <section className={styles.other_links}>
          <article>
            <div>
              <BsEnvelope />
            </div>
           
            <div>
              <a href = "mailto: artsystudios@gmail.com">
                artsystudios@gmail.com
              </a>
            </div>
          </article>

          <article>
            <div>
              <GoLocation />
            </div>
           
            <div>
              Lagos, Nigeria.
            </div>
          </article>
        </section>
      </section>

      <div className={styles.copywright}>
        <p>Artystudios &copy; {new Date().getFullYear()}. All Rights Reserved</p>
        <p>codes by nduks &hearts;</p>
      </div>
    </footer>
  )
}

export default Footer;