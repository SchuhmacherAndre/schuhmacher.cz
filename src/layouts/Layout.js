import { Fragment, useEffect } from "react";
import AboutPopup from "../components/popup/AboutModal";
import ImageView from "../components/popup/ImageView";
import NewsPopup from "../components/popup/NewsPopup";
import PortfolioModal from "../components/popup/PortfolioModal";
import VideoPopup from "../components/popup/VideoPopup";
import { dataImage, imgToSVG } from "../utilities";
import { waves } from "../waves";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Mouse from "./Mouse";
import PreLoader from "./PreLoader";
import Setting from "./Setting";
const Layout = ({ children }) => {
  useEffect(() => {
    waves();
    dataImage();
    imgToSVG();
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <AboutPopup />
      <div
        className="edrea_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="fadeInUp"
        data-exit=""
      >
        <NewsPopup />
        <PortfolioModal />
        {/* PRELOADER */}
        <PreLoader />
        {/* /PRELOADER */}
        {/* WAVE DOTS */}
        <div className="waves" />
        {/* WAVE DOTS */}
        {/* SETTINGS */}
        <Setting />
        {/* /SETTINGS */}
        {/* MOBILE MENU */}
        <MobileHeader />
        {/* /MOBILE MENU */}
        {/* HEADER */}
        <Header />
        {/* /HEADER */}
        {/* CONTENT */}
        <div className="edrea_tm_content fixed w-[900px] top-[100px] bottom-[100px] left-[50%] translate-x-[-50%]">
          {children}
        </div>
        {/* /CONTENT */}
        {/* MAGIC CURSOR */}
        <Mouse />
        {/* /MAGIC CURSOR */}
      </div>
    </Fragment>
  );
};
export default Layout;
