const Hero = () => {
  return (
    <div className="text-center pt-[73px] w-full md:bg-[url('/food-background.png')] h-[674px] bg-no-repeat bg-contain lg:bg-cover">
      <h4 className="text-light-gray md:text-white text-[24px] font-['Montserrat']">
        Food app
      </h4>

      <h2 className="md:text-white text-dark-gray text-[38px] md:text-[58px] font-['Poppins'] mt-[18px] md:w-[937px] md:h-[160px] leading-[80px] tracking-[0.2px] mx-auto">
        Why stay hungry when you can order from Bella Onojie
      </h2>
      <p className="text-light-gray md:text-white font-['Montserrat'] text-[24px] font-medium mt-[27px]">
        Download the bella onojie's food app now
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 w-1/2 mx-auto items-center justify-items-center mt-[54px]">
        <button className="bg-orange py-[16px] text-white rounded-[30px] w-[236px] h-[68px] font-['Montserrat']">
          Playstore
        </button>
        <button className="py-[16px] text-orange md:text-white md:border-white border-2 rounded-[30px] w-[236px] mt-[17px] md:mt-0">
          App Store
        </button>
      </div>
    </div>
  );
};

export default Hero;
