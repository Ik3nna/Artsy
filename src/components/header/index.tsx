import React from "react";
import styles from "./index.module.css";
import useSticky from "./useSticky-hook";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../../store/navbar-slice";

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

    const { sticky, stickyRef } = useSticky();

    const active = useSelector((state: RootState)=>state.navbar.isActive);

    const dispatch = useDispatch();

    return(
        <>
            <header ref={stickyRef} className={`${active ? styles.active : ""} ${sticky && styles.fixedNav}`}>
                <div className={styles.header}>
                    <img src={artsy} alt="logo" />

                    <nav>
                        <ul>
                            {navItem.map((navlink)=>
                                <li key={navlink.id}>
                                    <NavLink className={navLinkClass} to={navlink.linkTo} onClick={()=> dispatch(navbarActions.hideSidebar())}>
                                        {navlink.item}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>

                    <div className={styles.icons}>
                        <BiSearch />

                        <BiCart />

                        <GrNotification />
                    </div>

                    <div className={styles.overlay}></div>
                        
                    <div className={styles.hamburger} onClick={()=>dispatch(navbarActions.toggleSidebar())}>
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