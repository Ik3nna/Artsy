import React from "react";
import styles from "./index.module.css";
import useSticky from "./useSticky-hook";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

    const active = useSelector((state: RootState) => state.navbar.isActive)

    return(
        <>
            <header ref={stickyRef} className={`${active && styles.active} ${sticky && styles.fixedNav}`}>
                <div className={styles.header}>
                    <nav>
                        <ul>
                            {navItem.map((navlink)=>
                                <li key={navlink.id}>
                                    <NavLink className={navLinkClass} to={navlink.linkTo}>
                                        {navlink.item}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>

                    <div className="overlay"></div>
                        
                    <div className="hamburger-menu">
                        <div className="bar"></div>
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