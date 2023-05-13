import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faMobileAlt,
  faServer,
  faUsers,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description:
        "We develop high-quality and responsive websites for businesses of all sizes.",
      icon: (
        <FontAwesomeIcon icon={faCode} className="text-green-500" />
      ),
    },
    {
      title: "Web Design",
      description:
        "We design modern and elegant websites that capture the essence of your brand.",
      icon: (
        <FontAwesomeIcon icon={faDesktop} className="text-green-500" />
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "We create user-friendly mobile applications for iOS and Android platforms.",
      icon: (
        <FontAwesomeIcon icon={faMobileAlt} className="text-green-500" />
      ),
    },
    {
      title: "Server Administration",
      description:
        "We offer reliable and efficient server management and maintenance services.",
      icon: <FontAwesomeIcon icon={faServer} className="text-green-500" />,
    },
    {
      title: "Support & Maintenance",
      description:
        "We provide technical support and maintenance services to ensure your website runs smoothly.",
      icon: <FontAwesomeIcon icon={faCog} className="text-green-500" />,
    },
    {
      title: "Consulting",
      description:
        "We offer expert advice and consulting services to help you make the right business decisions.",
      icon: <FontAwesomeIcon icon={faUsers} className="text-green-500" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-5 md:px-10" id="services">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We offer a range of services to help you achieve your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {servicesData.map((service, index) => (
            <div
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              key={index}
            >
              <div className="text-4xl md:text-5xl mb-5">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
        </div> 
        </section>
         ); 
        }; 

  export default Services;