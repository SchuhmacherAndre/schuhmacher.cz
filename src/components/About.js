import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const About = () => {
  const { showAboutPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="about">
      <div className="section_inner">
        <div className="edrea_tm_about w-full h-auto clear-both float-left flex">
          <div className="left w-[40%]">
            <div className="image relative">
              <img
                className="relative min-w-full opacity-0"
                src="assets/img/thumbs/1-1.jpg"
                alt=""
              />
              <div
                className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                data-img-url="assets/img/about/1.jpg"
              />
            </div>
          </div>
          <div className="right w-[60%] pl-[100px]">
            <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b pb-[30px]">
              <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
                Schuhmacher <span className="text-pink-color">Projektservice</span>
              </h3>
              <h3 className="job text-[18px] font-normal text-main-color">
                <AnimatedText />
              </h3>
            </div>
            <div className="text w-full float-left mb-[36px]">
              <p>

              System supplier for the planning and implementation of complete control technology in industry and mechanical engineering. Integration of production control systems and control technology for the most complex requirements. Programming of all common PLC and SCADA systems as well as planning, construction and installation of control cabinets in accordance with the latest CE manufacturer requirements and standards.
              </p>
            </div>
            {/* <div className="edrea_tm_button">
              <a href="#" onClick={() => showAboutPopup()}>
                Learn More
              </a>
           </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
