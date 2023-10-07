import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import useSticky from "./useSticky-hook";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// assets
import artsy from "../../assets/ARTSY..svg"

// icons
import { BiSearch, BiCart } from "react-icons/bi";
import { GrNotification } from "react-icons/gr"
import { RootState } from "../../store";

const Header: React.FC = ()=> {
    const navItem = [
        { id: 1, item: "Home", linkTo: "/home"},
        { id: 2, item: "Marketplace", linkTo: "/marketplace"},
        { id: 3, item: "Auctions", linkTo: "/auctions"},
        { id: 4, item: "Drop", linkTo: "/drop"}
    ]

    const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return `${isActive ? styles.activeLink : ""}`;
    };

    const navigateToHomePage = () => {
        const homePageURL = '/home'; 
    
        window.location.href = homePageURL;
    };

    const { sticky, stickyRef } = useSticky();

    const [active, setActive] = useState(false);
    const [cartIcon, setCartIcon] = useState(0);

    const totalQuantity = useSelector((state: RootState)=> state.cart.totalQuantity);

    useEffect(()=>{
        if (totalQuantity) {
            setCartIcon(totalQuantity);
        }
    },[totalQuantity])

    return(
        <>
            <header ref={stickyRef} className={`${active ? styles.active : ""} ${sticky && styles.fixedNav}`}>
                <div className={styles.header}>
                    <img src={artsy} alt="logo" onClick={navigateToHomePage} />

                    <nav>
                        <ul>
                            {navItem.map((navlink)=>
                                <li key={navlink.id}>
                                    <NavLink className={navLinkClass} to={navlink.linkTo} onClick={()=> setActive(!active)}>
                                        {navlink.item}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>

                    <div className={styles.icons}>
                        <BiSearch />

                        <div className={styles.cart_icon}>
                            <BiCart onClick={()=>window.location.href="/marketplace/checkout"} />
                            {cartIcon > 0 &&
                                <div className={styles.cart_content}>{totalQuantity}</div>
                            }
                        </div>

                        <GrNotification />
                    </div>

                    <div className={styles.overlay}></div>
                        
                    <div className={styles.hamburger} onClick={()=> setActive(!active)}>
                        <div className={styles.bar}></div>
                    </div>
                </div>
            </header>

            <div style={{
                height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
            }} />
        </>
    );
}

export default Header;