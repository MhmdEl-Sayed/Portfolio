import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import "./contact.css";
import doneanimation from '../../animation/Animation - 1729740822549.json'
import contactus from '../../animation/contact-us.json'
const Contact = () => {
  const [state, handleSubmit] = useForm("xvgogvyy");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla
        accusantium mollitia quos, ea deleniti nostrum minima dolores, nemo
        aliquid exercitationem doloremque cum odio, obcaecati sapiente quis
        doloribus. Hic, officiis.
      </p>

      <div className="flex" style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>

            <input autoComplete="off" required name="email" id="email" type="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>

        <div className="animation">
        <Lottie className="contact-animation" style={{height:"360px",marginBottom:'60px',marginLeft:'50px'}} animationData={contactus} />
        </div>
      </div>
      

 
       {state.succeeded &&


  <p  className="gmail">
      <Lottie loop={false} style={{height:'55px',marginRight:"10px"}} animationData={doneanimation} />
    <span className="ss">Your message has been sent</span></p>}
       
      
       
      
 
    </section>
  );
};

export default Contact;
