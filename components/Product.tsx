import React, { useEffect, useRef } from "react";
import styles from "../styles/product.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState  } from "react";
import FormModal from "./FormModel";
// import handler from "../pages/api/send-email";
import { useRouter } from "next/router";

export interface product {
    sectorName: String;
    productName: String;
    productDetails: String;
    productBakerHugesLink: any;
    imgSrc: any;
}

export interface props {
    sectorName: String;
    p: product[];
}

export interface propsList {
    pp: props[];
}

const Product: React.FC<propsList> = ({ pp }) => {
    const productRefs = useRef<HTMLDivElement[]>([]);

    const [modalShow, setModalShow] = useState(false);
    const [currentProductName, setCurrentProductName] = useState("");


    const openModal = (productName: any) => {
        setCurrentProductName(productName);
        setModalShow(true);
    };

    const closeModal = () => {
        setModalShow(false);
    };
    const router = useRouter();

    useEffect(() => {
        // console.log("yo wtf !")
        if (router.asPath.includes('#')) {
            const id = router.asPath.split('#')[1];
            const element = document.getElementById(id);
            console.log("element : " , id)
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [router.asPath]);
    useEffect(() => {
        console.log("HEy ther ")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    } else {
                        entry.target.classList.remove(styles.animate);
                    }
                });
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        productRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);
   
    return (
        <div className={styles.container}>
            {pp.map((sector, index) => (
                
                <div className={styles.sectorContainer} key={index} id={sector.sectorName.toLowerCase().replace(/\s/g, '')}>
                    {console.log("sector : " , sector.sectorName.replace(' ', '').toLowerCase()) }
                    <div className={styles.sectorHeading}>
                        <h2 style={{ textTransform: "uppercase" }}>{sector.sectorName}</h2>
                    </div>

                    <div className={styles.sectorProductList}>
                        {sector.p.map((prod, ndx) => (
                            <div
                                key={ndx}
                                className={styles.productContainer}
                                ref={(el) => {
                                    if (el && !productRefs.current.includes(el)) {
                                        productRefs.current.push(el);
                                    }
                                }}
                            >
                                <div style={{ width: "80%" }}>
                                    <h2 className={styles.productName}>{prod.productName}</h2>
                                    <div className={styles.productDetailsContainer}>
                                    {
                                        prod.productDetails.split("\n").map((substring, index) =>{
                                            let head = substring.split(":")[0]
                                            let bod = substring.split(":")[1]
                                            return(
                                                // <span>
                                                    <div style={{width:'100%', paddingLeft:'2%'}}>
                                                            <p key={index} className={styles.productDetails} style={{fontWeight:"bold" }}>{head}</p>
                                                            <p  className={styles.productDetails} style={{paddingLeft:"2rem"}}>{bod}</p>
                                                    </div>
                                                    
                                                // </span>
                                                // <p key={index} className={styles.productDetails}>{head}{bod}</p>
                                            )
                                        })
                                    }
                                    </div>
                                    
                                    
                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                        <Link style={{margin:30 }} href={prod.productBakerHugesLink} className={styles.contactButton}>
                                            Learn More
                                        </Link>
                                        <Link href={"#"} className={styles.contactButtonInverted}  onClick={() => openModal(prod.productName)}>
                                            Request a Call
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.Image} style={{ width: "30%", padding: "1%", paddingLeft: "0%" }}>
                                    <img src={prod.imgSrc} alt="image" width={"100%"} height={"80%"} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <FormModal
                show={modalShow}
                handleClose={closeModal}
                productName={currentProductName}
                // onSubmit={sendEmail}
            />
        </div>
    );
};

export default Product;
