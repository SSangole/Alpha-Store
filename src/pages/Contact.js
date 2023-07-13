import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="heading">Feel free to contact us</h2>
      <form action="https://formspree.io/f/xwkjgddv" method="POST">
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="off"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          required
        />
        <textarea
          name="Message"
          cols="30"
          rows="8"
          required
          autoComplete="off"
          placeholder="Enter you message"
        ></textarea>
        {/* <Button>Send</Button> */}
        <input type="submit" value="Send" />
      </form>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.254715439141!2d73.9167764!3d18.562551799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1687409727073!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 4rem;
  text-align: center;

  input[type="submit"] {
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    border: none;
    padding: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
      transform: scale(0.9);
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input,
  textarea {
    width: 30%;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .heading {
    margin-bottom: 2rem;
  }
`;

export default Contact;
