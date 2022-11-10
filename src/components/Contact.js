export const Contact = () => {
  return (
    <div className="contact">
      <div className="form">
        <h3> Get in touch</h3>
        <div className="input-flex">
          <input type="text" name="name" placeholder="Name*" />
          <input type="email" name="email" placeholder="E-mail*" />
          <input
            type="tel"
            className="full-width"
            name="number"
            placeholder="Phone number*"
          />
          <textarea className="full-width" placeholder="Questions"></textarea>
        </div>
      </div>
    </div>
  );
};
