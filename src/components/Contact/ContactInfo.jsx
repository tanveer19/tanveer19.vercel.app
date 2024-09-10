import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info mx-2">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              East Kazipara, Dhaka, Bangladesh.
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">Email me using this form:</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">
              <a href="tel:+8801600312882">Call Me</a>
            </span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
