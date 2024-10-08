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
                <div className={styles.sectorHeading}>
                    <h3 style={{ textTransform: "uppercase" }}>{sector.sectorName}</h3>
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
                            <h2 className={styles.productName}>{prod.productName}</h2>
                            <div className={styles.productContent}>
                                <div className={styles.productDescription}>
                                    <div className={styles.productDetailsContainer}>
                                        {prod.productDetails.split("\n").map((substring, index) => {
                                            let [head, bod] = substring.split(":");
                                            return (
                                                <div key={index} className={styles.productDetail}>
                                                    <p className={styles.productDetailHead}>{head}</p>
                                                    <p className={styles.productDetailBody}>{bod}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    
                                    <div className={styles.buttonContainer}>
                                        <Link href={prod.productBakerHugesLink} className={styles.contactButton}>
                                            Learn More
                                        </Link>
                                        <Link href={"#"} className={styles.contactButtonInverted} onClick={() => openModal(prod.productName)}>
                                            Inquire
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.Image}>
                                    <img src={prod.imgSrc} alt="product image" />
                                </div>
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
        />
    </div>
    );
};

export default Product;
