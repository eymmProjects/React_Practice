"use client";

import React, { useState } from "react";

const SubscribeToNewsletter = () => {
  const [showError, setShowError] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.length) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI}/api/newsletter-signups`,
          { data: { email } }
        );
      }
      setHasSignedUp(true);
    } catch (err) {
      console.log(err);
      setShowError(true);
    }
  };
  return (
    <div>
      <section className="newsletter">
        {showError ? (
          <h4 className="newsletter__thanks">
            Could not sign up for the newsletter
          </h4>
        ) : hasSignedUp ? (
          <h4 className="newsletter__thanks">
            Thank you for signing up for our newsletter
          </h4>
        ) : (
          <>
            <div className="newsletter__info">
              <h4>Subscribe to our newsletter</h4>
              <p className="copy">
                Unlock Exclusive Insights and Stay In the Know – Subscribe to
                Our Newsletter Today to always stay in touch
              </p>
            </div>
            <form action="" className="newsletter__form" onsSubmit={onSubmit}>
              <input
                type="text"
                className="newsletter__email input"
                placeholder="Enter your Email address"
                value={email}
                onChange={onChange}
              />
              <button className="newsletter__subscribe btn btn--medium btn--turquoise">
                SUBSCRIBE
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default SubscribeToNewsletter;
