import React from "react";

const HeroBackgroundImage = () => {
  return (
    <React.Fragment>
      <div
        className="hero sm:h-[600px] h-[300px] "
        style={{ backgroundImage: `url("/assets/img/man-phone.jpeg")` }}
      >
        <div className="hero-overlay bg-blue-400 bg-opacity-40"></div>
        <div className="w-full h-full flex items-center sm:items-end container mx-auto  ">
          <div className="max-w-2xl mb-0  sm:mb-20 text-white  ">
            <h1 className="mx-10 sm:mx-0 mb-5 text-lg sm:text-3xl font-semibold  tracking-wide text-center sm:text-left z-40">
              The Smart Way for Online and Offline <br />
              Payment Solution.
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroBackgroundImage;
