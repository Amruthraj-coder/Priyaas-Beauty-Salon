// SalonLocation.jsx
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./SalonLocation.scss";

const SALON_POSITION = {
  lat: 13.113159,  // put your exact latitude
  lng: 80.228722   // put your exact longitude
};

const SalonLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:"AIzaSyB5029BBkp5eiQeA8Ffdj5TUm3yrQhbXr4"
  });

  return (
    <section className="salon-location">
      <div className="salon-location__info">
        <h2 className="salon-location__title">
          Priya's Beauty Salon &amp; Parlor Home
        </h2>

        <p className="salon-location__address">
          29/9, 1st Main Rd, Jawahar Nagar, Perambur, Chennai, Tamil Nadu 600082
        </p>

        {/* <p className="salon-location__rating">
          Rating: <span>4.9</span> (322 reviews)
        </p> */}

        <a
          className="salon-location__link"
          href="https://maps.app.goo.gl/mVv7rc22jbXsiMUN9"
          target="_blank"
          rel="noreferrer"
        >
          View in Google Maps
        </a>
      </div>

      <div className="salon-location__map">
        {isLoaded ? (
          <GoogleMap
            center={SALON_POSITION}
            zoom={15}
            mapContainerClassName="salon-location__map-container"
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            <Marker position={SALON_POSITION} />
          </GoogleMap>
        ) : (
          <div className="salon-location__map-loading">Loading map...</div>
        )}
      </div>
    </section>
  );
};

export default SalonLocation;
