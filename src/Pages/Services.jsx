import React from "react";
import PageHero from "../Components/PageHero";
import ServiceCard from "../Components/ServiceCard";
import ServicesProcess from "../Components/ServiceProcess";

const Services = () => {
  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Services"}
        description={
          "Comprehensive home modeling and design solutions tailored to your unique needs and vision."
        }
      />
      <ServiceCard />
      <ServicesProcess />
    </div>
  );
};

export default Services;
