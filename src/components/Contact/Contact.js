import "./Contact.css";

const Contact = () => {

  return (
    <section className="contactCenter" id="contact">
      <div className="container-contact">
        <div className="contact__container">
          <div className="contact__title">
            <p>contact</p>
            <h3>Let's connect! 👇</h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
              </span>
              <div className="contact__info">
                <h3>Location</h3>
                <p>Philadelphia</p>
              </div>
            </div>
            <div className="contact__icon-box">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
              </span>
              <div className="contact__info">
                <h3>Mail</h3>
                <a href="mailto:junbaek0307@gmail.com">junbaek0307@gmail.com</a>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
              <img src="https://i.imgur.com/dIriKWE.png" width="30" height="30"/>
              </span>
              <div className="contact__info">
                <h3>Resume</h3>
                <a href="https://docs.google.com/document/d/13Ac7a97w5HBgxPZbo4DnKV2ZpHX-g4NdKL-p2N4D5Vo/edit?usp=sharing" download>PDF Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
