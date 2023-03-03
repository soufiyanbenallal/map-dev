import contactImage from "@assets/images/contact.png";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const form = useRef<string | HTMLFormElement>('');
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_1322vlr', 'template_njowlpd', form.current, '_xSH9XBrgopXlpuil')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <div className="relative">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-white">
            <img
              className="h-[110vh] w-full object-contain lg:absolute lg:h-fullto-black"
              src={contactImage}
              alt="contact"
            />
          </div>
        </div>
        <div className="relative py-8 px-4 sm:py-16 h-[110vh] sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
              <p className="mt-4 text-sm font-extralight text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form opposite, or email us.
              </p>
              <form ref={form} onSubmit={sendEmail} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="user_email" className="block text-xs font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
        
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                      Phone
                    </label>
                    <span id="phone-description" className="text-xs text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-xs font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <span id="message-description" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      aria-describedby="message-description"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="how-did-you-hear-about-us" className="block text-xs font-medium text-gray-700">
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how-did-you-hear-about-us"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  