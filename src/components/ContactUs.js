import React, { useState } from 'react';

const ContactUs = () => {
    const [contactForm, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        console.log(contactForm); // Log form data before sending
        alert(JSON.stringify(contactForm)); // Display form data as JSON string

        try {
            const response = await fetch('http://localhost:8080/submitContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactForm)
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                alert('Form submitted successfully');
                // Clear the form after submission if needed
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Form submission failed');
                alert('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="ContactUs">
            <div className="contact-content">
                <div className="contact-info">
                    <h1 style={{ fontSize: '50px' }}>CONTACT US.</h1>
                    <p><strong>Email:</strong> Asechu3028@gmail.com</p>
                    <p><strong>Phone:</strong> +1 (240) 316-1353</p>
                    <p><strong>Address:</strong>1120 Tanley Rd Silver Spring, MD 20904 </p>
                </div>
                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={contactForm.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={contactForm.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={contactForm.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
