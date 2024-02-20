"use client"

import { FaCalendarAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";




export default function Contact() {
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    try {

        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });

        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])

        alert('Message successfully sent');
    } catch (err) {
        console.error(err);
        alert("Error, please try resubmitting the form");
    }
};

  
  return (
    <div className="edrea_tm_section" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact w-full h-auto clear-both float-left">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="text-pink-color">Touch</span>
            </h3>
          </div>
          <div className="wrapper w-full h-auto clear-both float-left flex pt-[60px]">
            <div className="left w-1/2 pr-[50px]">
              <ul className="m-0 list-none">
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]"><IoLocationSharp /></i>
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="href_location text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        Jaselská 134/18, Mladá Boleslav, 29301, CZ
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]"><FaPhoneSquareAlt /> </i>
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        +420 326 716 900
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]"><IoMdMail /></i>
                    <span className="inline-block pl-[48px]">
                      <a
                        href="mailto:info@schuhmacher.cz"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        info@schuhmacher.cz
                      </a>
                    </span>
                  </div>
                </li>
                <li className="w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]"><FaCalendarAlt /></i>
                    <span className="inline-block pl-[48px]">
                      <a
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                      <div class="flex">
                        <div>Mon. - Thu.:</div>
                        <div class="ml-4">8 am - 5 pm</div>
                      </div>
                      <div class="flex">
                        <div>Friday:</div>
                        <div class="ml-auto">8 am - 3 pm</div>
                      </div>
                      <div class="flex">
                        <div>Sat. - Sun.:</div>
                        <div class="ml-auto">Closed</div>
                      </div>
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  className="contact_form"
                  onSubmit={handleSubmit}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  {/* <div class="empty_notice"><span>Please Fill Required Fields</span></div> */}
                  <div className="first w-full float-left mb-[20px]">
                    <ul className="ml-[-20px] list-none">
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="email"
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last w-full float-left bg-[#222] rounded-[10px] mb-[20px]">
                    <textarea
                      className="w-full h-[108px] bg-transparent border-none text-main-color resize-none p-[20px] font-poppins"
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <button id="send_message" type="submit" href="#">
                      <a> Send Message </a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};