import React from 'react';
import styles from './Nav.module.css';
import * as data from './links.json';
// import { link } from 'fs';
const linksString= JSON.stringify(data);
const links=JSON.parse(linksString).links;



// type Link ={

//     label: string;
//     href: string;
// }

/* const Links: React.FC<{links: Link[]}> = ({links}) => {

    return(
        <div className={styles['links-container']}>
            {
                links.map((link: Link)=>{
                    return(
                        <div key={link.href} className={styles['link']}>
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}; */

const Nav = () => {
  return (
    <nav className={styles.navbar}>
        <div className= {styles['logo-container']}>
            <a href="/"><span><h3>Jogaar</h3></span></a>
        </div>

        {/* <div className= {styles['logo-direct-container']}>
            <span>
                <img src="search.svg" alt="search" />
            </span>
        </div> */}

        <div className={styles['links-container']}>
            {
                links.map((link)=>{
                    return(
                        <div key={link.href} className={styles['link']}>
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </div>
                    )
                })
            }
        </div>

        <div className={styles['link-logo-container']}>
            <div className={styles['link']}>
                <a href='/search'>
                    {/* <img src="search.svg" alt="search" /> */}
                </a>
            </div>

            <div className={styles['link']}>
                <a href='/profile'>
                    {/* <img src= "profile.svg" alt="profile" /> */}
                </a>
            </div>

            <div className={styles['link']}>
                <a href='/language'>
                    {/* <img src="language.svg" alt="language" /> */}
                </a>
            </div>

            <div className={styles['link']}>
                <a href='/theme'>
                    {/* <img src="contrast.svg" alt="theme" /> */}
                </a>
            </div>
        </div>

        

    </nav>


  )
}

export default Nav;