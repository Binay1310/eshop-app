import Navbar from "../../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <div className="display-4">Contact Us</div>
        <p className="lead">Any Querries?? We are here.</p>
      </div>
      <div className="container">
        <section>
          <p>
            Contact Us

            We’re here to help! Whether you have a question, need support, or just want to say hello, we’d love to hear from you. Our team is dedicated to providing quick and efficient responses to all inquiries.

            You can reach us via email, phone, or by filling out the contact form on this page. We strive to respond as soon as possible and ensure that all your queries are addressed.

            If you’re looking for more information about our services, partnerships, or business inquiries, don’t hesitate to get in touch. Your feedback is valuable to us, and we’re always eager to improve and serve you better.

            We appreciate your interest and look forward to connecting with you soon!
          </p>
          <p>
            Get in Touch

            We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out. Our team is here to help and will respond as soon as possible. You can contact us via email, phone, or by filling out the form below. We value your time and look forward to connecting with you!
            Toll Free-123456789
          </p>
        </section>
      </div>
    </>
  );
};
export default ContactPage;