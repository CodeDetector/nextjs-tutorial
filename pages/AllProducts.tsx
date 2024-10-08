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
                productDetails :`Wide XGA Touchscreen Display: The device features a wide XGA touchscreen display with improved brightness and viewing angles, allowing users to see more details and increase the probability of detection.\n
Intuitive User Interface and MDI: The intuitive user interface and Menu Directed Inspection (MDI) speed up the workflow with digital tools for auto image tagging and report generation, enabling inspectors to consistently deliver results with confidence.\n
Advanced Mechanical Design: The advanced mechanical design enables increased articulation range and extended life to ensure thorough inspections of the entire asset in less time.\n
Wireless Capabilities: The device offers wireless video streaming and data transfer capabilities to iOS and Android devices, powered by InspectionWorks.\n
Measurement and Imaging Features: It provides Real3D Stereo Measurement for accurate and precise defect assessment through a 3D point cloud, and High Dynamic Range (HDR) optimizes image quality in scenes with shiny surfaces. Additionally, it maintains up-to-date functionality with easy wireless upgrades and software releases.`, 
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
                productDetails :`Maximum Portability: A small, lightweight yet powerful all-in-one solution weighing just 0.85 kg empty and 1.2 kg filled with glycol, enabling maximum portability.\n
Ease of Use: Ergonomic design and step-by-step instructions ensure easy and comprehensive operation, with pre-configured settings for phased array entry-level users.\n
Connectivity: High-speed data transfer via USB port, allowing connection to tablets or PCs for easy sharing and storing of inspection data.\n
Advanced Electronics: Fully integrated PA electronics directly into the probe, providing a true lightweight solution.\n
Versatile Applications: Suitable for a wide range of challenging scenarios, from wind turbines to jet engines, due to its robust and portable design.`, 
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

            },
            {
                sectorName :"RADIOGRAPHIC TESTING (RT) SOLUTIONS" , 
                productName : "CRxVision" ,
                productDetails :`Weld standards and diconde compliant : Compliant to ISO 17636-2 Class A and B, ASME, ASTM and EN weld inspection standard.\n
High Resolution : Extremely wide latitude eliminating the need for multiple gain settings when exposing over a wide range of thicknesses. Providing 40 micron SRb, the CRxVision is offering the highest resolution outcome in NDT. Extremely wide latitude eliminating the need for multiple gain settings when exposing over a wide range of thicknesses.\n
Designed for extremely high throughput: 90 plates/hr at 70 microns or 28 plates/hr at 35 microns for a 10 x 40 cm (4.5 x 17”) plate.Allows multiple imaging plates to be scanned simultaneously reaching 84 plates/hour at 35 microns for 10 x 40 cm (4.5 x 17”) plate at 3 image plates entry.\n
Flexible : Ability to scan any shape or size of imaging plate from 20 to 1500 mm (0.75 to 60”) in length.\n
Extended plate life : Each imaging plate has the ability to return to a flat state after being constantly bent around pipes for the inspection of welds.Improves productivity by allowing the imaging plates to be easily extracted and reinserted into cassettes.\n
Simplifies inspection workflow: Ability to automatically crop the images by detecting the physical edges of each individual plate when they are processed
` , 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-radiography-and-ct/computed-digital-radiography-crdr/computed-radiography-cassettes/crxvision-high-resolution-cr-scanner`  ,
                imgSrc:`/assets/productImages/crx.png`

            },
            {
                sectorName :"RADIOGRAPHIC TESTING (RT) SOLUTIONS" , 
                productName : "Digital X-Ray Detectors" ,
                productDetails :` DXR75P-HR: Small size, high-resolution detector for critical applications.75-micron pixel resolution delivers fine details for critical applications .Narrow width ideal for situations with limited detector positioning freedom.Precision imaging that meets the most stringent standards\n
DXR140P-HC: Large size, high contrast detector for all-purpose radiography.Ideal for corrosion monitoring in the oil & gas and energy industries.High contrast with 140-micron pixel resolution.Increased dose sensitivity for shorter exposure times and faster throughput.Can be used with X-ray as well as isotopes.\n
DXR100P-HP: Large size, high performing imager, covering most applications.The DXR100P-HP gives you the high, 100-micron pixel resolution, so this versatile detector can cover both worlds: O&G inspections but also weld inspection, supporting ISO 17636-2 class B for weld inspection.` , 
                productBakerHugesLink : `https://www.bakerhughes.com/waygate-technologies/industrial-radiography-and-ct/computed-digital-radiography-crdr/dxr-digital-xray-detectors`  ,
                imgSrc:`/assets/productImages/dxr.png`

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