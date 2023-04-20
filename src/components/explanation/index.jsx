import Section from "../section";

const Explanation = () => {
  const sections = [
    {
      heading: "Create an account",
      subHeading: "Create/login to an existing account to get started",
      body: "An account is created with your email and password",
      img: "/section-img-1.png",
      imgLeft: true,
    },
    {
      heading: "Explore Varieties",
      subHeading: "Shop for your favourite meals as e hey hot",
      body: "Shop for your favourite meals or drinks and enjoy while doing it.",
      img: "/section-img-2.png",
      imgLeft: false,
    },
    {
      heading: "Checkout",
      subHeading: "When you're done, check out and get it delivered",
      body: "When you're done, check out and get it delivered with ease",
      img: "/section-img-3.png",
      imgLeft: true,
    },
  ];
  return (
    <div>
      <h1 className="text-center text-[24px] md:text-[44px] mb-[60px] font-['Montserrat'] tracking-[0.5px]">
        How the app works
      </h1>

      {sections.map((section) => {
        return (
          <Section
            heading={section.heading}
            subHeading={section.subHeading}
            body={section.body}
            img={section.img}
            imgLeft={section.imgLeft}
          />
        );
      })}
    </div>
  );
};

export default Explanation;
