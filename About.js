import React from 'react';
import "./about.css"
const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to our e-commerce website! We are committed to providing you with the best shopping experience.</p>
            <p>Our mission is to offer high-quality products at competitive prices, ensuring customer satisfaction every step of the way.</p>
            <h3>Our Values</h3>
            <ul>
                <li><strong>Quality:</strong> We source products from trusted suppliers to ensure high quality.</li>
                <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We strive to provide excellent customer service and support.</li>
                <li><strong>Convenience:</strong> We aim to make your shopping experience convenient and hassle-free.</li>
                <li><strong>Community:</strong> We value our community of shoppers and aim to build long-lasting relationships with our customers.</li>
            </ul>
            <h3>Our Team</h3>
            <p>Our team consists of passionate individuals dedicated to delivering the best products and services to our customers.</p>
            <p>From our customer support team to our product specialists, each member plays a crucial role in ensuring your satisfaction.</p>
            <h3>Contact Us</h3>
            <p>If you have any questions or feedback, please don't hesitate to contact us:</p>
            <ul>
                <li>Email: info@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Main Street, City, Country</li>
            </ul>
        </div>
    );
};

export default About;
