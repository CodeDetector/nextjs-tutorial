import React from "react"
import styles from "../styles/about.module.css"
import { CarouselComp } from "../components/CarouselComp"
// import { CarouselComp } from "../components/CarouselComp"
import {CarouselImage  } from "../components/CarouselComp"
import { useEffect,useState } from "react"
import ClientLogoSlider from "./ClientLogoSlider"
const images: CarouselImage[] = [
    {
      src: "/assets/image.png",
      alt: "Corousel Images ",
      caption: "Seifert ERESCO MF4 Portable Industrial X-ray Generators",
      description: "Rely on the highest radiation stability and performance with ultra-low ripple ±1% even with low-density materials (e. g. aluminium, composites and plastics)."
    },
    {
      src: '/assets/image.png',
      alt: "Corousel Images ",
      caption: "Seifert ERESCO MF4 Portable Industrial X-ray Generators",
      description: "Rely on the highest radiation stability and performance with ultra-low ripple ±1% even with low-density materials (e. g. aluminium, composites and plastics)."
    },
    {
      src: '/assets/image.png',
      alt: "Corousel Images ",
      caption: "Seifert ERESCO MF4 Portable Industrial X-ray Generators",
      description: "Rely on the highest radiation stability and performance with ultra-low ripple ±1% even with low-density materials (e. g. aluminium, composites and plastics)."
    }
  ];

const About : React.FC = () =>{
    const [clientLogos, setClientLogos] = useState<string[]>([]);
    useEffect(() => {
        fetch('/api/client-logos')
          .then(response =>response.json())
          .then(data => setClientLogos(data))
          .catch(error => console.error('Error fetching client logos:', error));
          console.log("Client logos : " , clientLogos)
      }, []);
    return (
        <div>
            <div className={styles.container}>
                <div style={{width:"100%" ,marginLeft:"5%" , alignItems:"center"}}>
                    <h1 className={styles.heading1} style={{color: "white" , textDecoration:"underline" , textUnderlineOffset:"20%", textDecorationWidth:"20px"}}  >QUADRANT MARKETING</h1>
                    {/* <h1 className={styles.heading1} style={{color: "white"}}></h1> */}
                </div>
                {/* <CarouselComp images={images} /> */}
                <div style ={{width:"100%" ,marginLeft:"5%"}}>
                    <p style={{color:"white" , fontSize:"1.5rem"}}>Trusted Channel Partners of <strong>WAYGATE TECHNOLOGIES</strong></p>
                </div>
            </div>
            <div>
            <div className={styles.storyContainer}>
                    <div className={styles.storyHeading}>
                        <h2 style={{ textTransform: "uppercase" }}>Our Story</h2>
                    </div>

                    <div className={styles.storyDetails}>
                        <p>Founded in 2003, our company has grown to become an authorized dealer for Waygate Technologies (Baker Hughes Digital Solutions GMBH) in Northern and Eastern India. Specializing in a comprehensive range of non-destructive testing solutions, we have established a reputation for excellence and reliability in the industry.<br/><br/>

Our headquarters are located in the scenic city of Haridwar, Uttarakhand, where our dedicated team works tirelessly to ensure we provide the highest quality products and services to our clients. To better serve our customers, we have strategically positioned our sales and service teams in Delhi NCR and Kolkata, enabling us to offer prompt and efficient support across a wide geographical area.<br/><br/>

Over the years, we have built strong relationships with our partners and clients, driven by our commitment to innovation, integrity, and customer satisfaction. Our journey is marked by a relentless pursuit of excellence and a passion for helping our clients achieve their goals through advanced non-destructive testing solutions.<br/><br/>

As we look to the future, we remain dedicated to expanding our capabilities, fostering innovation, and continuing to provide unparalleled service and support to our valued clients.</p>
                    </div>
                </div>
            </div>
            {/* <div className={styles.storyContainer}>
                    <div className={styles.storyHeading}>
                        <h2 style={{ textTransform: "uppercase" }}>Our Story</h2>
                    </div>

                    <div className={styles.storyDetails}>
                        <p>Founded in 2003, our company has grown to become an authorized dealer for Waygate Technologies (Baker Hughes Digital Solutions GMBH) in Northern and Eastern India. Specializing in a comprehensive range of non-destructive testing solutions, we have established a reputation for excellence and reliability in the industry.<br/><br/>

Our headquarters are located in the scenic city of Haridwar, Uttarakhand, where our dedicated team works tirelessly to ensure we provide the highest quality products and services to our clients. To better serve our customers, we have strategically positioned our sales and service teams in Delhi NCR and Kolkata, enabling us to offer prompt and efficient support across a wide geographical area.<br/><br/>

Over the years, we have built strong relationships with our partners and clients, driven by our commitment to innovation, integrity, and customer satisfaction. Our journey is marked by a relentless pursuit of excellence and a passion for helping our clients achieve their goals through advanced non-destructive testing solutions.<br/><br/>

As we look to the future, we remain dedicated to expanding our capabilities, fostering innovation, and continuing to provide unparalleled service and support to our valued clients.</p>
                    </div>
                </div> */}
                      <ClientLogoSlider images={clientLogos} /> 
            </div>
        // </div>
    )
}

export default About ; 