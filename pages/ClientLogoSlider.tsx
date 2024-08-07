import Image from 'next/image';
import styles from '../styles/ClientLogoSlider.module.css';
import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

interface GalleryProps {
  images: string[];
}

const ClientLogoSlider: React.FC<GalleryProps> = ({ images }) => {
  console.log("Images are ... ", images);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.heading}>
        <h3 style={{color:"black" }}> WHO WE WORK WITH </h3>
      </div>
      <div className={styles.slider}>
        {images.map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image src={"/assets/Clients/"+logo} alt={`Client logo ${index + 1}`} width={150} height={100} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const imageDirectory = path.join(process.cwd(), 'public/assets/Clients');
  console.log("Image directory is : ", imageDirectory);
  
  try {
    const imageFilenames = fs.readdirSync(imageDirectory);
    return {
      props: {
        images: imageFilenames,
      },
    };
  } catch (error) {
    console.error("Error reading image directory:", error);
    return {
      props: {
        images: [],
      },
    };
  }
};

export default ClientLogoSlider;