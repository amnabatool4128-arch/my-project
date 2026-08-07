import React from "react";
import PageHero from "../Components/PageHero";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageHero
        title={"Get In "}
        highlight={"Touch"}
        description={
          "Ready to start your home modeling project? Contact us today."
        }
      />
      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
