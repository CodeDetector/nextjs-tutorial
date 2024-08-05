import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../styles/formModal.module.css";

interface FormModalProps {
    show: boolean;
    handleClose: () => void;
    productName: string;
    // onSubmit: (username: string, product: string, message: string) => void;
}

const FormModal: React.FC<FormModalProps> = ({ show, handleClose, productName }) => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [name , setName] = useState("") ; 
    const [companyName , setCompany] = useState(""); 

    const sendEmail = async (name:String , companyName:string , emailID : String , productName: string , message :String) => {
        // console.log("Username is : " , username )
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: `Inquiry about ${productName}`,
                text: message.length==0?`Hello! My name is ${name} . \nI am from ${companyName} company. \n My EmailID is ${emailID}. \n Hello, I would like to know more about ${productName}.` : ` Hello! My name is ${name} .\n I am from ${companyName} company \n. My EmailID is ${emailID}. \n  I wanted to add the questions -  \n `  + message ,
            }),
            
        });
        // console.log(JSON.stringify({
        //     to: username,
        //     subject: `Inquiry about ${productName}`,
        //     text: message.length==0?`Hello, I would like to know more about ${productName}.` : message ,
        // }))
        const data = await response.json();
        if (response.ok) {
            console.log('Email sent:', data);
        } else {
            console.error('Error sending email:', data);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendEmail(name , companyName , username, productName, message);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered className={styles.modalContent}>
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title className={styles.modalTitle}>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername" className={styles.formGroup}>
                            <Form.Label style={{fontWeight:"bold" , padding:"1px"}}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                    <Form.Group controlId="formUsername" className={styles.formGroup}>
                        <Form.Label style={{fontWeight:"bold" , padding:"1px"}}>Company name</Form.Label>
                        <Form.Control
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formUsername" className={styles.formGroup}>
                        <Form.Label style={{fontWeight:"bold" , padding:"1px"}}>Email ID</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formProduct" className={styles.formGroup}>
                        <Form.Label style={{fontWeight:"bold" , padding:"1px"}}>Product</Form.Label>
                        <Form.Control type="text" value={productName} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formMessage" className={styles.formGroup}>
                        <Form.Label style={{fontWeight:"bold" , padding:"1px"}}>Message (optional)</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <div className={styles.modalFooter}>
                        <Button className={styles.submitButton} type="submit">
                            Send Email
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default FormModal;
