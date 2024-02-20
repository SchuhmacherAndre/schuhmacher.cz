import { useContext } from "react";
import { context } from "../../context/context";
import Modal from "./Modal";
const NewsPopup = () => {
  const { showNewsPopup, newsPopup, newsData } = useContext(context);
  return (
    <Modal open={newsPopup} close={showNewsPopup}>
      <div class="news_popup_details w-full h-auto clear-both float-left px-[50px] pt-[50px] pb-[42px]">
        <div class="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div class="main" data-img-url="assets/img/news/1.jpg"></div>
        </div>
        <div class="news_main_title">
          <h3>{newsData && newsData.title}</h3>
          <span>
            <a
              class="no-underline text-main-color text-[14px] transition-all duration-300 hover:text-white-color"
              href="#"
            >
              {newsData && newsData.tag}
            </a>
          </span>
          <div></div>
        </div>
        <div class="text w-full float-left">
          {newsData &&
            newsData.des &&
            newsData.des.map((des, i) => (
              <p key={i} class="mb-[10px]">
                {des}
              </p>
            ))}
        </div>
      </div>
    </Modal>
  );
};
export default NewsPopup;
