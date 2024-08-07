import React, { useEffect } from "react"
import Image from "next/image"
import styles from "../styles/contact.module.css"
const Contact : React.FC = () =>{

    useEffect(()=>
    {
        document.title = "Contact "
    }
    ,[])
    return(
        <div style = {{width:"100vw" , height : "100vh"  }}>
            <div className={styles.contact} style={{paddingTop:"5%" }}>

                {/* <div>
                    <Image/>
                </div> */}
                <div style={{display:"flex", height:"100vh" , flexDirection:"column",fontFamily:"Helvetica"  ,width:"100%" ,  alignItems:"center"}}>
                    <h1 style={{marginBottom:"4%" , textTransform:"uppercase",textDecoration:"underline",textUnderlineOffset:"20%" ,fontSize: "xx-large"}}> contact </h1>
                    <div style={{display:"flex",marginTop:"2rem",flexDirection:"column",fontFamily:"Helvetica",width:"100%" , paddingLeft:"5%"}}>
                    <h3 style={{textTransform:"uppercase"}}>Registered Address</h3>
                        <br/>5, Nirmala Ashram, Nirmala Chawani,Hardwar - 249401, Uttarakhand (INDIA)
                        <br/><br/><br/>
                        <h3 style={{textTransform:"uppercase"}}>Email</h3>
                        <br/>info@qmindia.net
                        <br/><br/><br/>
                        <h3 style={{textTransform:"uppercase"}}>Mobile Number</h3>
                        <br/>(M) +91-9837176665 <br/>(T) +91-1334 227656
                        <br/><br/><br/>
                    </div>
                        
                   

                </div>
           
            </div>
        </div>
    )
} 

export default Contact 