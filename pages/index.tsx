import React from "react"
// import { GetStaticProps } from "next"
// import Layout from "../components/Layout"
// import Post, { PostProps } from "../components/Post"
// import prisma from "../lib/prisma"
// import componen'
import Head from 'next/head'
import { useState , useEffect } from "react";
// import { GetStaticProps } from 'next';
// import fs from 'fs';
// import path from 'path';
import ClientLogoSlider from "./ClientLogoSlider";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import SectorComponent, { sectorPropsList  ,sectorProps  }  from "../components/SectorComponent";
// import Document from "next/document";
// import { sectorProps } from "../components/SectorComponent";


const clientLogos = [
  { src: '/assets/image.png', alt: 'Client 1' },
  { src: '/assets/image.png', alt: 'Client 2' },
  { src: '/assets/image.png', alt: 'Client 3' },
  { src: '/assets/image.png', alt: 'Client 4' },
  { src: '/assets/image.png', alt: 'Client 5' },
];

const sectorList : any= [
  {
    title : "ULTRASONIC TESTING (UT) SOLUTIONS",  
    description : "We offer ultrasonic testing equipment, testing machines, instrumentation, transducers, and software for industrial applications requiring internal defect detection and sizing. Our nondestructive ultrasonic testing solutions will meet the critical requirements of your application and deliver productivity and quality." , 
    link: "/AllProducts", 
    sectionId : "ultrasonictestingsolutions"
  },
 
  {
    title : "RADIOGRAPHIC TESTING (RT) SOLUTIONS",  
    description : "We offer a comprehensive range of industrial radiographic equipment and techniques from film to digital and X-ray generators to integrated test machines. We will work with you to identify the most appropriate solution to ensure optimum technique performance, speed and economy for your application." , 
    link: "/AllProducts", 
    sectionId: "radiographictestingsolutions"
  },
  {
    title : "REMOTE VISUAL INSPECTION (RVI) SOLUTIONS",  
    description : "We offer a comprehensive selection of remote viewing equipment from basic borescopes and fiberscope to measurement capable digital video borescopes, pan-tilt-zoom camera systems and robotic crawler systems. We have the right visual inspection equipment for your needs for any industry. Our systems are portable and ruggedly built to survive the rigors of industrial environments." , 
    link: "/AllProducts",
    sectionId: "remotevisualinspectionsolutions"
  }
]
// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const imageDirectory = path.join(process.cwd(), 'public/assets/Clients');
  
//   try {
//     const imageFilenames = fs.readdirSync(imageDirectory);
//     return {
//       props: {
//         clientLogos: imageFilenames,
//       },
//     };
//   } catch (error) {
//     console.error("Error reading image directory:", error);
//     return {
//       props: {
//         clientLogos: [],
//       },
//     };
//   }
// };
const Idx: React.FC= () =>{
  

  // const getImages = images 
  const [clientLogos, setClientLogos] = useState<string[]>([]);
  useEffect(()=>
    {
        document.title = "Contact "
    }
    ,[])

  useEffect(() => {
    // document.title = "Quadrant Marketing";
    fetch('/api/client-logos')
      .then(response =>response.json())
      .then(data => setClientLogos(data))
      .catch(error => console.error('Error fetching client logos:', error));
      console.log("Client logos : " , clientLogos)
  }, []);

  
  return(
    <div  style={{display : "flex" , flexDirection:"column" ,maxHeight:"100%" ,  height:"100%"}}>
      <AboutUs/>
  
        <SectorComponent sectorProps={sectorList}/>
  
     
        <ClientLogoSlider images={clientLogos} /> 
  
    </div>
    
  )
} 

export default Idx;
// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where : {published : true}  , 
//     include : {
//       author : { 
//         select : {name : true } 
//       }
//     }
//   }) ; 
//   return { 
//     props: { feed }, 
//     revalidate: 10 
//   }
// }

// type Props = {
//   feed: PostProps[]
// }

// const Blog: React.FC<Props> = (props) => {
//   return (
//     <Layout>
//       <div className="page">
//         <h1>Public Feed</h1>
//         <main>
//           {props.feed.map((post) => (
//             <div key={post.id} className="post">
//               <Post post={post} />
//             </div>
//           ))}
//         </main>
//       </div>
//       <style jsx>{`
//         .post {
//           background: white;
//           transition: box-shadow 0.1s ease-in;
//         }

//         .post:hover {
//           box-shadow: 1px 1px 3px #aaa;
//         }

//         .post + .post {
//           margin-top: 2rem;
//         }
//       `}</style>
//     </Layout>
//   )
// }

// export default Blog
