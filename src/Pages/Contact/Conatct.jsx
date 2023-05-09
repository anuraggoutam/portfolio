import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiWhatsapp } from 'react-icons/si';

export default function Conatct() {
  return (
    <section id="contact" className="w-full  h-screen pt-36">
      <div className="text-center">
        <h5 className="text-2xl font-semibold">Get in Touch</h5>
        <h2 className="text-lg pb-6 text-blue font-medium">Contact Me</h2>
      </div>
      <div className="container contact_container w-3/5 flex items-center justify-center gap-12">
        <div className="contact_options pl-32">
          <article className="contact_option">
            <MdOutlineMarkEmailRead />
            <h4>Email</h4>
            <h5>anuraggoutam01@gmail.com</h5>
            <a href="mailto:anuraggoutam01@gmail.com" target="_blank">
              Send a messsage
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Anurag Goutam</h5>
            <a href="https://m.me/anurag.goutam.752" target="_blank">
              Send a messsage
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+12345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917303372170"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
        </div>
        {/* end of other contact option */}
        <form action="" className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="relative inline-flex p-7 text-text items-center justify-center w-48 h-11 bg-blue border-2 smx:ml-5 border-solid border-blue rounded-lg text-xl font-semibold tracking-wide no-underline z-p overflow-hidden before:absolute before:top-0 before:w-0 before:left-0 before:bg-bg before:h-full before:z-n  hover:text-blue hover:before:w-full smx:w-28 smx:h-10 smx:bottom-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
