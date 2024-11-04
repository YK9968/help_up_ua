import { NavLink } from "react-router-dom";
import heroDesk1x from "/src/assets/img/hero-desk.jpg";
import heroDesk2x from "/src/assets/img/hero-desk@2.jpg";

const WelcomePage = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-textContainerMarginTop">
        <h1 className="font-semibold w-mainTextWidth text-mainTextSize leading-mainTextLineHeight mb-5">
          Change the <span className="text-buttonColor ">word</span> together
        </h1>
        <p className="w-mainTextWidth mb-10 text-lg font-medium ">
          Explore countless opportunities to make a difference. If you're
          passionate about the environment, social justice, or helping those in
          need, there's a place for you here
        </p>
        <NavLink
          className="py-4 px-12 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out"
          to="/opportunities"
        >
          Find Opportunities
        </NavLink>
      </div>

      <picture>
        {/* <source
          srcSet={`${img1x_1440} 1x, ${img2x_1440} 2x`}
          media="(min-width: 1440px)"
          type="image/jpeg"
        />
        <source
          srcSet={`${img1x_768} 1x, ${img2x_768} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
        /> */}
        <source
          srcSet={`${heroDesk1x} 1x, ${heroDesk2x} 2x`}
          type="image/jpeg"
        />
        <img
          className="rounded-mainBorderImg"
          src="/src/assets/img/hero-desk.jpg"
          alt="man volunteer"
        />
      </picture>
    </div>
  );
};

export default WelcomePage;
