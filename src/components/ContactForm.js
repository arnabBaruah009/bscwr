import { useForm, ValidationError } from "@formspree/react";

import styles from "../styles/contactForm.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwkjzpdg");
  if (state.succeeded) {
    return <p className={styles.sentMessage}>Thanks for joining!</p>;
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Prof. Aashish Pandey</h2>
      <p id={styles.email}>Email</p>
      <p className={styles.data}>ashish.pandeyatwr.iitr.ac.in</p>
      <p id={styles.contact}>Contact</p>
      <p className={styles.data}>XXXXXXXXXX</p>
      <label htmlFor="message">Drop a message</label>
      <textarea
        rows={5}
        id="message"
        name="message"
        placeholder="Write message..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className={styles.btnDiv}>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
