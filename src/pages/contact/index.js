import React from "react";
import ContactSection from "./../../components/ContactSection";
import "./styles.scss";

function ContactPage(props) {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Let's Talk about your idea - Contact Us"
      subtitle="Let's get to know each other"
      showNameField={true}
      buttonText="Send message"
    />
  );
}

export default ContactPage;
