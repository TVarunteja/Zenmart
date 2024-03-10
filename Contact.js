import React from 'react';
import "./contact.css"
const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions, feedback, or inquiries, please feel free to get in touch with us. Our customer support team is here to assist you.</p>
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>info@example.com</p>
                </div>
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>123-456-7890</p>
                </div>
                <div className="contact-item">
                    <h3>Address</h3>
                    <p>123 Main Street, City, Country</p>
                </div>
            </div>
            <form className="contact-form">
                <h3>Send Us a Message</h3>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
