import React from "react";
import { consultants } from "./consultants";
import './consultant_listing.css'
const consultant_listing = () => {
  return (
    <div className="consultant-listing-container">
      <h1 className="consultant-listing-title">Our Consultants</h1>
      <div className="consultant-list">
        {consultants.map((consultant) => (
          <div key={consultant.id} className="consultant-card">
            <img
              src={consultant.imageUrl}
              alt={consultant.name}
              className="consultant-image"
            />
            <h2 className="consultant-name">{consultant.name}</h2>
            <p className="consultant-title">{consultant.title}</p>
            <p className="consultant-location">{consultant.location}</p>
            <p className="consultant-specialization">
              Specialization: {consultant.specialization}
            </p>
            <button className="consultant-contact-btn">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default consultant_listing;
