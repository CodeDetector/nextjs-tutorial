import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

interface FooterProps {
  slogan: string;
  logoSrc: string;
  logoAlt: string;
}

const Footer: React.FC<FooterProps> = ({ slogan, logoSrc, logoAlt }) => {
  return (
    <footer className={styles.footerContainer} style={{backgroundColor:"black", height:"20%" , width:"100%" , overflowX:"hidden"}} >
      <div style = {{color : "white"}} className={styles.slogan}>{slogan}</div>
      <div className={styles.logo} style ={{paddingRight:"1%"}}>
        <Image src={logoSrc} alt={logoAlt} width={200} height={100} />
      </div>
    </footer>
  );
};

export default Footer;

