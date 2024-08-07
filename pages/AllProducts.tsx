import React from "react" ; 
import { propsList } from "../components/Product";
import Product from "../components/Product";
import Head from "next/head";
import Layout from "../components/Layout";

const productList: any= [
    {
        sectorName : "REMOTE VISUAL INSPECTION SOLUTIONS" ,
        p:[
            {
                sectorName :"REMOTE VISUAL INSPECTION (RVI) SOLUTIONS" , 
                productName : "XL Detect/ Detect+" ,
                productDetails : `Superior image clarity: Larger, brighter displays (3.7" and 5" options) with advanced optics reduce eyestrain and improve accuracy.\n
Military-grade durability: Built to withstand harsh industrial environments (IP65/IP55, MIL-STD-810G, MIL-STD-461F standards).\n
Streamlined workflow: Intuitive Menu Directed Inspection (MDI) system automates result organization and simplifies reporting.\n
Versatile application: Lightweight and portable, suitable for various challenging scenarios from wind turbines to jet engines.\n
Enhanced inspection results: Improves probability of detection, speeds up workflows, and delivers confident results in demanding industrial settings.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/remote-visual-inspection-rvi/video-borescopes/xl-detect-and-xl-detect`  ,
                imgSrc : `/assets/productImages/XL_Detect.png`

            },
            {
                sectorName :"REMOTE VISUAL INSPECTION (RVI) SOLUTIONS" , 
                productName : "Mentor Flex" ,
                productDetails :`Advanced Inspection Capabilities: Everest Mentor Flex provides high-resolution imaging and precise defect detection for comprehensive inspections.\n

User-Friendly Interface: Features an intuitive touchscreen interface and customizable menus to streamline the inspection process and reduce training time.\n

Durable and Portable: Designed for rugged environments with a lightweight, portable form factor, and an IP65 rating for dust and water resistance.\n

Enhanced Connectivity: Offers Wi-Fi and Bluetooth capabilities for real-time data sharing, remote collaboration, and integration with cloud-based platforms.\n

Versatile Functionality: Equipped with advanced analysis tools, dual-view capabilities, and a range of interchangeable probes for various inspection needs.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/remote-visual-inspection-rvi/video-borescopes/everest-mentor-flex`  ,
                imgSrc:`/assets/productImages/mentorflex.png`

            },
            {
                sectorName :"REMOTE VISUAL INSPECTION (RVI) SOLUTIONS" , 
                productName : "Mentor Visual iQ+" ,
                productDetails :`High-Resolution Imaging: The Mentor Visual iQ+ provides superior image clarity and detail with its advanced high-resolution camera and display, enabling precise visual inspections.\n

3D Measurement Capability: Equipped with 3D Phase and 3D Stereo measurement options, the device allows for accurate measurement of defects and features within inspected components.\n

Remote Collaboration: Features integrated Wi-Fi and Bluetooth connectivity for real-time remote collaboration and instant sharing of inspection data, enhancing team efficiency and decision-making.\n

Robust Design: Built to withstand tough industrial environments, the Mentor Visual iQ+ boasts an IP55 rating, ensuring durability and reliability in harsh conditions.\n

User-Friendly Interface: Intuitive touch screen interface with customizable inspection workflows and easy navigation, reducing operator training time and increasing productivity.` , 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/remote-visual-inspection-rvi/video-borescopes/everest-mentor-visual-iq`  ,
                imgSrc:`/assets/productImages/MVIQ.png`
            }
        ]
    },
    {
        sectorName : "ULTRASONIC TESTING SOLUTIONS" ,
        p:[
            {
                sectorName :"Ultrasonics" , 
                productName : "USM 36" ,
                productDetails :`Compact design: Powerful inspection features in an ergonomic package.\n
High-resolution display: Large 7-inch color screen for easy data interpretation.\n
Advanced flaw detection: State-of-the-art capabilities for precise inspections.\n
Comprehensive connectivity: Multiple options for data storage and sharing.\n
User-friendly interface: Streamlined operation familiar to market standards. `, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/consulting-services-ultrasound/portable-ultrasound-equipment/ultrasonic-flaw-detectors/krautkramer-usm-36-portable-ultrasonic-flaw-detector`  ,
                imgSrc:`/assets/productImages/usm36.png`

            },
            {
                sectorName :"Ultrasonics" , 
                productName : "USM/DMS Go+" ,
                productDetails :`Portable design: Lightweight (under two pounds) and ambidextrous for one-handed use.\n
High-definition recording: 800x480 pixel LCD screen with 8-minute video capability.\n
Versatile display: Adjustable screen for use in various lighting conditions.\n
Wide detection range: Broad Pulse Repetition Frequency for diverse inspection needs.\n
Near-surface precision: Excellent resolution for detecting flaws just under the surface` , 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-ultrasonic-testing/portable-ultrasound-equipment/ultrasonic-thickness-gauges/dms-go` ,
                imgSrc:`/assets/productImages/dmsgo.png` 

            },
            {
                sectorName :"Ultrasonics" , 
                productName : "USM 100" ,
                productDetails :`Advanced Flaw Detection: The Krautkrämer USM 100 enhances ultrasonic features, ensuring accurate and repeatable inspections with compatibility for legacy USM Go+ and USM 36 data sets.\n
Premium Features: Includes real-time averaging to eliminate noise, an iOS app for enriching ultrasound data, customizable filter settings, and an IF gate for consistent TOF measurement.\nErgonomic Design: Lightweight and easy to operate with a 7” LCD touch screen, viewable in any condition, and ergonomically placed buttons for comfortable extended use.\nRugged and Reliable: IP 67 rated for drop and vibration resistance, suitable for harsh environments, with a modern interface that reduces training time and enhances user experience.\nConnectivity and Data Management: Offers remote access, fleet management, secure cloud-based data management, customizable workflow apps, and remote annual calibration for increased efficiency and uptime.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-ultrasonic-testing/portable-ultrasound-equipment/ultrasonic-flaw-detectors/krautkramer-usm100`  ,
                imgSrc:`/assets/productImages/usm100.png`

            },
            {
                sectorName :"Ultrasonics" , 
                productName : "DM5E" ,
                productDetails :`User-friendly operation: Intuitive interface with automatic thickness readings.\n
High-temperature capability: Dedicated probes for improved performance in hot environments.\n
Coating-penetrating measurement: Dual-multi feature for readings through protective layers.\n
Extensive data storage: Built-in logger supporting up to 50,000 readings (DM5E DL version).\n
Ergonomic design: Lightweight construction for comfortable everyday use.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-ultrasonic-testing-0/portable-ultrasound-equipment-0/ultrasonic-thickness-gauges/dm5e`  ,
                imgSrc:`/assets/productImages/dm5e.png`

            },
            {
                sectorName :"Ultrasonics" , 
                productName : "Mentor UT" ,
                productDetails :`Wireless connectivity: Allows for live streaming and real-time second opinions.\n
Remote reporting: Generates comprehensive inspection reports from the cloud.\n
Customizable workflows: User-defined menus for consistent inspection procedures.\n
Multi-application support: Flexibility to load multiple workflows on one device.\n
Real-time collaboration: Enables immediate expert consultation during inspections.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-ultrasonic-testing/portable-ultrasound-equipment/ultrasonic-flaw-detectors/mentor-ut`  ,
                imgSrc:`/assets/productImages/mentorut.png`

            },
            {
                sectorName :"Ultrasonics" , 
                productName : "CL GO+" ,
                productDetails :`Compact and Portable: The CL GO+ is designed for portability and ease of use, making it ideal for on-the-go inspections. Its lightweight and compact form factor ensures it can be easily transported and operated in various field conditions.\n

High-Resolution Display: Equipped with a high-resolution color display, the CL GO+ provides clear and detailed imaging, enhancing the accuracy of inspections and making it easier to identify and evaluate flaws.\n

Advanced Connectivity: Features advanced connectivity options including Bluetooth and Wi-Fi, allowing for seamless data transfer and remote operation. This enhances efficiency and enables real-time collaboration and data sharing.\n

User-Friendly Interface: The intuitive interface of the CL GO+ simplifies the inspection process, reducing the learning curve for new users and increasing productivity. The touchscreen interface and customizable settings cater to user preferences and requirements.\n

Durable and Robust: Built to withstand harsh environments, the CL GO+ is rugged and durable, ensuring reliable performance in various industrial settings. Its robust construction and high ingress protection rating make it suitable for challenging inspection tasks.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-ultrasonic-testing/portable-ultrasound-equipment/ultrasonic-thickness-gauges/krautkramer-cl-go`  ,
                imgSrc:`/assets/productImages/clgo.png`
            },
            {
                sectorName :"Ultrasonics" , 
                productName : "RotoArray comPAct" ,
                productDetails :`Compact and Portable: The RotoArray comPAct is designed to be lightweight and portable, making it ideal for on-the-go inspections and use in tight spaces.\n

High-Resolution Imaging: Provides superior imaging quality with advanced ultrasonic technology, ensuring precise and reliable defect detection.\n

Versatile Application: Suitable for a wide range of applications, including weld inspections, corrosion mapping, and thickness measurements, catering to various industry needs.\n

User-Friendly Interface: Features an intuitive interface with easy-to-navigate controls, allowing both experienced and novice users to operate the device efficiently.\n

Robust Construction: Built to withstand harsh industrial environments, the RotoArray comPAct is durable and reliable, ensuring consistent performance under demanding conditions.`, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-ultrasonic-testing/portable-ultrasound-equipment/ultrasonic-applications/krautkramer-rotoarray-compact`  ,
                imgSrc:`/assets/productImages/rotoarray.png`

            }
        ]
    },
    {
        sectorName : "RADIOGRAPHIC TESTING SOLUTIONS" ,
        p:[
            {
                sectorName :"RADIOGRAPHIC TESTING (RT) SOLUTIONS" , 
                productName : "ERESCO" ,
                productDetails :`Reliability: Designed for tough conditions with robust construction.\n
Mobility: Lightweight and highly mobile for quick, accurate inspections.\n
Efficiency: Low power consumption and alternative field operations.\n
Compliance: Meets strict European X-ray regulations.\n
Productivity: High X-ray dose rate for short exposure times and high output. `, 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-radiography-and-ct/xray-tubes-and-generators/portable-xray-generators`  ,
                imgSrc:`/assets/productImages/ERESCO.png`

            },
            {
                sectorName :"RADIOGRAPHIC TESTING (RT) SOLUTIONS" , 
                productName : "ISOVOLT" ,
                productDetails :`Proven Reliability: Based on the Seifert ISOVOLT platform with over 25 years of experience and thousands of installations.\n
Versatile Applications: Designed for radiography, radioscopy, radiometry, and life-science applications demanding high reliability and quality.\n
Customization: Meets various degrees of automation and customization for industrial and scientific needs.\n
Wide Range of Systems: Offers generators and tubes from 160 kV to 450 kV, operable from as low as 5 kV and up to 45 mA.\n
Advanced Control: Features a state-of-the-art industrial control module for failsafe and intuitive operation, complemented by a powerful range of accessories.\n` , 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-radiography-and-ct/xray-tubes-and-generators/isovolt-xray-tubes`  ,
                imgSrc:`/assets/productImages/ISOVOLT.png`

            }
        ]
    },
    

]
    
const AllProducts:React.FC<propsList> = ({pp})=>{
    return(
        // <Layout>
        <div style={{width:"100vw", overflow: "hidden"}}>
            <Head>
                <title>Quadrant Marketing : Products</title>
                <meta name="description" content="Page with video background" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Product pp={productList} /> 

        </div>
            
        // </Layout>
    )
}

export default AllProducts;