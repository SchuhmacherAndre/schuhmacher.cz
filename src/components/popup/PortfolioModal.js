import { useContext } from "react";
import { context } from "../../context/context";
import Modal from "./Modal";

const PortfolioModal = () => {
  const { showPortfolioPopup, portfolioPopup } = useContext(context);
  return (
    <Modal close={showPortfolioPopup} open={portfolioPopup}>
      <div className="portfolio_popup_details w-full h-auto clear-both float-left px-[50px] pt-[50px] pb-[20]">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="assets/img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("assets/img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>Delicious Apple</h3>
          <span>
            <a href="#">Detail</a>
          </span>
          <div />
        </div>
        <div className="text w-full float-left mb-[42px]">
          <p className="mb-[10]">
            An apple is an edible fruit produced by an apple tree. Apple trees
            are cultivated worldwide and are the most widely grown species in
            the genus Malus. The tree originated in Central Asia, where its wild
            ancestor, Malus sieversii, is still found today.
          </p>
          <p>
            Apples grown from seed tend to be very different from those of the
            parents, and the resultant fruit frequently lack desired
            characteristics. Generally then, apple cultivars are propagated by
            clonal grafting onto rootstocks. Apple trees grown without
            rootstocks tend to be larger and much slower to fruit after
            planting.
          </p>
        </div>
        <div className="additional_images w-full h-auto clear-both float-left">
          <ul className="gallery_zoom ml-[-30px] list-none">
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src="assets/img/thumbs/4-2.jpg"
                    alt=""
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                    data-img-url="assets/img/portfolio/7.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/7.jpg")',
                    }}
                  />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="assets/img/portfolio/7.jpg"
                  />
                </div>
              </div>
            </li>
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src="assets/img/thumbs/4-2.jpg"
                    alt=""
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                    data-img-url="assets/img/portfolio/8.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/8.jpg")',
                    }}
                  />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="assets/img/portfolio/8.jpg"
                  />
                </div>
              </div>
            </li>
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src="assets/img/thumbs/4-2.jpg"
                    alt=""
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                    data-img-url="assets/img/portfolio/9.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/9.jpg")',
                    }}
                  />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="assets/img/portfolio/9.jpg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
