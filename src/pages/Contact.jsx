// SalonContactBooking.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./SalonContactBooking.scss";

 export const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
  e.preventDefault();
  setStatus({ type: "", message: "" });

  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        setStatus({
          type: "success",
          message: "Thank you! Your request has been sent.",
        });
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    );
};


  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.3 },
    }),
  };

  return (
    <section id="contact" className="salon-contact">
      <motion.div
        className="salon-contact__inner"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Left content */}
        <div className="salon-contact__content">
          <p className="salon-contact__eyebrow">Salon appointments</p>
          <h2 className="salon-contact__title">
            Book your next <span>salon experience</span>
          </h2>
          <p className="salon-contact__subtitle">
            Share your details and preferred time, and the team will confirm
            your booking or follow up for any adjustments.
          </p>
          <ul className="salon-contact__list">
            <li>Haircut, color, spa, nails and more.</li>
            <li>Choose your preferred date and time.</li>
            <li>Special requests can be added in the notes.</li>
          </ul>
        </div>

        {/* Right form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="salon-contact__form"
          variants={containerVariant}
        >
          <input type="hidden" name="form_type" value="Salon Booking" />

          <motion.div
            className="salon-contact__grid"
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.div
              className="salon-contact__field"
              variants={fieldVariant}
              custom={1}
            >
              <label className="salon-contact__label">
                Full name<span className="salon-contact__required">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="salon-contact__input"
              />
            </motion.div>

            {/* Email / Phone */}
            <motion.div
              className="salon-contact__field salon-contact__field--row"
              variants={fieldVariant}
              custom={2}
            >
              <div className="salon-contact__field-item">
                <label className="salon-contact__label">
                  Email<span className="salon-contact__required">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@example.com"
                  className="salon-contact__input"
                />
              </div>
              <div className="salon-contact__field-item">
                <label className="salon-contact__label">
                  Phone<span className="salon-contact__required">*</span>
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  placeholder="+91 98765 43210"
                  className="salon-contact__input"
                />
              </div>
            </motion.div>

            {/* Service / Stylist */}
            <motion.div
              className="salon-contact__field salon-contact__field--row"
              variants={fieldVariant}
              custom={3}
            >
              <div className="salon-contact__field-item">
                <label className="salon-contact__label">
                  Service<span className="salon-contact__required">*</span>
                </label>
                <select
                  name="service_type"
                  required
                  className="salon-contact__input salon-contact__input--select"
                >
                  <option value="">Select a service</option>
                  <option value="Haircut">Haircut</option>
                  <option value="Hair color">Hair color</option>
                  <option value="Blow dry / Styling">Blow dry / Styling</option>
                  <option value="Facial / Skin">Facial / Skin</option>
                  <option value="Manicure / Pedicure">
                    Manicure / Pedicure
                  </option>
                  <option value="Spa / Massage">Spa / Massage</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="salon-contact__field-item">
                <label className="salon-contact__label">
                  Preferred stylist
                </label>
                <input
                  type="text"
                  name="stylist_preference"
                  placeholder="Any / specific stylist"
                  className="salon-contact__input"
                />
              </div>
            </motion.div>

            {/* Date / Time */}
            <motion.div
              className="salon-contact__field salon-contact__field--row"
              variants={fieldVariant}
              custom={4}
            >
              <div className="salon-contact__field-item">
                <label className="salon-contact__label">
                  Preferred date
                  <span className="salon-contact__required">*</span>
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  required
                  className="salon-contact__input"
                />
              </div>
              <div className="salon-contact__field-item">
                <label className="salon-contact__label">Preferred time</label>
                <input
                  type="time"
                  name="appointment_time"
                  className="salon-contact__input"
                />
              </div>
            </motion.div>

            {/* Notes */}
            <motion.div
              className="salon-contact__field"
              variants={fieldVariant}
              custom={5}
            >
              <label className="salon-contact__label">
                Notes / special requests
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your hair, any allergies, or special occasion details..."
                className="salon-contact__textarea"
              />
            </motion.div>

            {/* Status + button */}
            <motion.div
              className="salon-contact__actions"
              variants={fieldVariant}
              custom={6}
            >
              {status.message && (
                <div
                  className={`salon-contact__status salon-contact__status--${status.type}`}
                >
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="salon-contact__button"
              >
                Request appointment
                <span className="salon-contact__button-icon">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};
export default Contact;