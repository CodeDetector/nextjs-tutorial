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
                    <div className={styles.cardItemTitle}>
                        <h2 style={{fontSize:"1.5vw"}}> {sector.title}</h2>
                    </div>
                    <div className ={styles.cardItemDescription}>
                    <p >
                        {sector.description}
                    </p>
                    </div>
                    
                    <div style={{display:"flex",justifyContent:"center" , alignItems:"center" ,margin:"2%" , height : "10%"}}>
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