import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiWhatsapp } from 'react-icons/si';

export default function Conatct() {
  return (
    <section id="contact" className="w-full  bg-fullbg  h-screen">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMarkEmailRead />
            <h4>Email</h4>
            <h5>anuraggoutam01@gmail.com</h5>
            <a href="mailto:anuraggoutam01@gmail.com" target="blank">
              Send a messsage
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Anurag Goutam</h5>
            <a href="https://m.me/anurag.goutam.752" target="blank">
              Send a messsage
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+12345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917303372170"
              target="blank"
            >
              Send a messsage
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
