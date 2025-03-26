import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <div className="display-4">About Us</div>
        <p className="lead">HELLO SHOPPERS...</p>
      </div>
      <div className="container">
        <section>
          <p>
           Welcome to Eshop, your one-stop destination for quality products and an exceptional shopping experience. We are passionate about bringing you the best products, top-notch customer service, and a seamless online shopping journey.

           Who We Are
           At [Your Store Name], we are more than just an eCommerce store—we are a team of dedicated professionals who believe in providing value to our customers. Our mission is to offer a diverse range of products that meet your everyday needs, all while ensuring a hassle-free shopping experience.

           Our Vision
           Our vision is simple: to become a trusted name in eCommerce by delivering quality products, competitive prices, and excellent service. We aim to make online shopping easy, convenient, and enjoyable for our customers, no matter where they are.

           What We Offer
           We take pride in offering a carefully curated selection of products across various categories. Whether you're looking for fashion, electronics, home essentials, beauty products, or lifestyle accessories, we have something for everyone. Our products are sourced from trusted brands and suppliers to ensure quality and customer satisfaction.

           Why Choose Us?
           Quality Assurance – We believe in offering only the best products that meet high-quality standards.

           Secure Shopping – Our website ensures a safe and secure shopping experience with encrypted transactions and multiple payment options.

           Customer Satisfaction – Your happiness is our priority! We provide excellent customer support to resolve any queries or concerns.

           Fast & Reliable Shipping – We ensure timely deliveries so that you receive your orders without delay.

           Affordable Pricing – Enjoy competitive prices and special discounts on a wide range of products.
          </p>
          <p>
            Join Our Community
            We love staying connected with our customers! Follow us on social media to get the latest updates on new arrivals, exclusive deals, and special promotions. Subscribe to our newsletter to receive exciting offers straight to your inbox.

            Get in Touch
            We’re here to help! If you have any questions, feedback, or need assistance, feel free to reach out to our support team. We value your trust and look forward to serving you.
          </p>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
