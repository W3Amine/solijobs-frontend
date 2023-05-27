import React from "react";
import SinglePageHeader from "../../Components/UIComponents/SinglePageHeader";

export default function Contact() {
  return (
    <>
      <SinglePageHeader PageTitle="contact us now lol xd" />

      <div className="section-full contact-one">
        <div className="section-content">
          <div className="container">
            {/* CONTACT FORM*/}
            <div className="contact-one-inner">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="contact-form-outer">
                    {/* TITLE START*/}
                    <div className="section-head left wt-small-separator-outer">
                      <h2 className="wt-title">Send Us a Message</h2>
                      <p>Feel free to contact us and we will get back to you as soon as we can.</p>
                    </div>
                    {/* TITLE END*/}
                    <form className="cons-contact-form" method="post" action="https://thewebmax.org/jobzilla/form-handler2.php">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-3">
                            <input name="username" type="text" required="" className="form-control" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-3">
                            <input name="email" type="text" className="form-control" required="" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-3">
                            <input name="phone" type="text" className="form-control" required="" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-3">
                            <input name="subject" type="text" className="form-control" required="" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-3">
                            <textarea name="message" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="site-button">
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="contact-info-wrap">
                    <div className="contact-info">
                      <div className="contact-info-section">
                        <div className="c-info-column">
                          <div className="c-info-icon">
                            <i className="fas fa-map-marker-alt" />
                          </div>
                          <h3 className="title">In the bay area?</h3>
                          <p>Bni Waryaghel 90000 Tanger, Maroc</p>
                        </div>
                        <div className="c-info-column">
                          <div className="c-info-icon custome-size">
                            <i className="fas fa-mobile-alt" />
                          </div>
                          <h3 className="title">Feel free to contact us</h3>
                          <p>
                            <a href="tel:+216-761-8331">+999-999-999</a>
                          </p>
                          <p>
                            <a href="tel:+216-761-8331">+999-999-999</a>
                          </p>
                        </div>
                        <div className="c-info-column">
                          <div className="c-info-icon">
                            <i className="fas fa-envelope" />
                          </div>
                          <h3 className="title">Support</h3>
                          <p>contact@SoliJob.com</p>
                          <p>SoliJob@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gmap-outline">
        <div class="google-map">
          <div>
            <iframe
              title="MaplocationIframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.184324076073!2d-5.828019423712907!3d35.74627402639745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b87c216892bc7%3A0x48bdf85995e9c186!2sSolicode%20Tanger!5e0!3m2!1sen!2sma!4v1685023257014!5m2!1sen!2sma"
              height="460"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
