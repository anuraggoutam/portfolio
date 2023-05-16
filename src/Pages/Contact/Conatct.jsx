import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiWhatsapp } from 'react-icons/si';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Conatct() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ji2uobx',
        'template_tl05bjh',
        form.current,
        '1erahzxKz2nanFIid'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="w-full  pt-36">
      <div className="text-center">
        <h5 className="text-2xl font-semibold">
          Let's <span className="text-blue ">Talk</span>
        </h5>
        <h2 className="text-lg pb-6 text-blue font-medium">Contact Me</h2>
      </div>
      <div className="contact_container container flex gap-we ml-10 justify-center smx:flex-col smx:m-0 smx:p-10">
        <div className="contact_options flex flex-col gap-5">
          <article className="contact_option flex flex-col justify-center items-center bg-bg2 p-5 rounded-2xl text-center border-2 border-solid border-transparent hover:bg-transparent hover:border-blue">
            <MdOutlineMarkEmailRead className="text-2xl mb-2" />
            <h4>Email</h4>
            <h5>anuraggoutam01 @gmail.com</h5>
            <a
              href="mailto:anuraggoutam01@gmail.com"
              className="mt-3 inline-block text-sm text-blue"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
          <article className="contact_option flex flex-col justify-center items-center bg-bg2  p-5 rounded-2xl text-center border-2 border-solid border-transparent hover:bg-transparent hover:border-blue">
            <RiMessengerLine className="text-2xl mb-2" />
            <h4>Messenger</h4>
            <h5>Anurag Goutam</h5>
            <a
              href="https://m.me/anurag.goutam.752"
              className="mt-3 inline-block text-sm text-blue"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
          <article className="contact_option flex flex-col justify-center items-center bg-bg2 p-5 rounded-2xl text-center border-2 border-solid border-transparent hover:bg-transparent hover:border-blue ">
            <SiWhatsapp className="text-2xl mb-2" />
            <h4>WhatsApp</h4>
            <h5>+12345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917303372170"
              className="mt-3 inline-block text-sm text-blue"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
        </div>
        {/* end of other contact option */}
        <form ref={form} className="flex flex-col gap-5 " onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="w-full p-6 rounded-lg bg-transparent border-2 border-solid border-bg2 resize-none"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            className="w-full p-6 rounded-lg bg-transparent border-2 border-solid border-bg2 resize-none"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            className="w-full p-6 rounded-lg bg-transparent border-2 border-solid border-bg2 resize-none "
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="w-max inline-block bg-blue py-3 text-bg px-5 border-solid border-blue border-2 rounded-lg cursor-pointer g hover:bg-white hover:text-blue hover:border-transparent "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
