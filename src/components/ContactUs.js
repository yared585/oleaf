import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Update the import path
import 'firebase/compat/firestore'; // Update the import path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Button } from 'antd'; // Import Ant Design components


// Initialize Firebase (make sure you replace this config with your own)
const firebaseConfig = {
    apiKey: "AIzaSyCwFanTFj2-L4hzTp3ZyQyxEV04138VeYI",
    authDomain: "oleaf-9f9d5.firebaseapp.com",
    projectId: "oleaf-9f9d5",
    storageBucket: "oleaf-9f9d5.appspot.com",
    messagingSenderId: "613919859510",
    appId: "1:613919859510:web:0a8d1d15a3f64da057c997n"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const ContactUs = () => {

    const [contactForm, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      phone: '',
      time: ''
    });
  
    const handleChange = (e) => {

      const { name, value } = e.target;
      setFormData({
        ...contactForm,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted'); // Check if the form is being submitted
        console.log(contactForm); // Log form data before sending
       
        // alert(JSON.stringify(contactForm, null, 2));

       try {
        const db = firebase.firestore();
        const formDataWithTime = {
            ...contactForm,
            time: firebase.firestore.FieldValue.serverTimestamp() // Add the current server timestamp
        };
        await db.collection('contactForms').add(formDataWithTime);
        console.log('Form submitted successfully');

        // Display a success toast notification
        toast.success('Form submitted successfully!');

       // Display an alert with the form input values
       // alert(JSON.stringify(contactForm, null, 2));
        
        // Clear the form after submission if needed
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: '',
          
        });
      } catch (error) {
        console.error('Error:', error);
      //  alert('Form submission failed');
      }
    };
  
    return (
        <div className="ContactUs">
          <div className="contact-content">
            <div style={{marginTop: "40px"}}className="contact-info">
              <p><strong>Email:</strong> Asechu3028@gmail.com</p>
              <p><strong>Phone:</strong> +1 (240) 316-1353</p>
              <p><strong>Address:</strong> 15 Valleyfield Court, Silver Spring MD</p>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="Name"
                  value={contactForm.name}
                  onChange={handleChange}
                  name="name"
                  required
                />
                <Input
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
                <Input
                  placeholder="Phone"
                  value={contactForm.phone}
                  onChange={handleChange}
                  name="phone"
                  required
                />
                <Input.TextArea
                  placeholder="Message"
                  rows={5}
                  value={contactForm.message}
                  onChange={handleChange}
                  name="message"
                  required
                />
                <Button type="primary" htmlType="submit" style={{ marginBottom: "30px", marginTop: "20px" }}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="toast-wrapper">
            <ToastContainer />
          </div>
        </div>
    );
  };
  
  export default ContactUs;