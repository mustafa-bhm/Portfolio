import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  // to email the form
  const [state, handleSubmit] = useForm("mvoyddll");
  if (state.succeeded) {
    return (
      <>
        <div className="contact">
          <div className="form confirmation">
            <p>Thank you for your message </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="contact">
      <div className="form">
        <h3> Get in touch</h3>
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

            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
      </div>
    </div>
  );
};
