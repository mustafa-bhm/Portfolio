import { useForm, ValidationError } from "@formspree/react";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
  // to initiat Aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // to email the form
  const [state, handleSubmit] = useForm("mvoyddll");
  if (state.succeeded) {
    return (
      <>
        <div className="contact">
          <div className="form confirmation">
            <p>Thank you for your message ! </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="contact" id="contact">
      <div data-aos="fade-up" className="form">
        <h2 className="section-title"> Get in touch</h2>
        <div>
          <form className="input-flex" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="your name" />
            <input type="email" name="email" placeholder="E-mail*" required />

            <input
              type="tel"
              className="full-width"
              name="phone"
              placeholder="Phone number*"
            />
            <textarea
              className="full-width"
              name="message"
              placeholder="your message"
            ></textarea>

            <button
              type="submit"
              className="btn-submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
      </div>
    </div>
  );
};
