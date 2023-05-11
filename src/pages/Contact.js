import styles from "../styles/contact.module.css";
import { ContactForm } from "../components";

const Contact = () => {
  return (
    <div className={`topContainer ${styles.contact}`}>
      <h1>Contact Us</h1>
      <div className={styles.contactContainer}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
