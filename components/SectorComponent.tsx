import React from 'react';
import styles from "../styles/sectorComponent.module.css";
import Link from 'next/link';
import { UrlObject } from 'url';



export interface sectorProps {
    title : String  
    description : String 
    link : UrlObject
    sectionId: string;
}

export interface sectorPropsList { 
    sectorProps : sectorProps[]
}

const SectorComponent: React.FC<sectorPropsList> = ({sectorProps}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.productContainer}> Our Products </h2>

      <div className={styles.cardContainer}>
        {
            sectorProps.map((sector ,  index)=>
                <div key={index} className={styles.cardItem}>
                    
                    <h2 className={styles.cardItemTitle}> {sector.title}</h2>
                    <p className ={styles.cardItemDescription}>
                        {sector.description}
                    </p>
                    <div style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
                    <Link href={`/AllProducts#${sector.sectionId}`} className={styles.contactButton}>
                        Learn More
                    </Link>
                    </div>
                    
                </div>)
        }
      

      </div>
    </div>
  );
}
export default SectorComponent ; 