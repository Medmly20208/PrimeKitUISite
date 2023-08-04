//components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

//assets
import Header01 from "./assets/images/Header-01.png";
import Header02 from "./assets/images/Header-02.png";
import Header03 from "./assets/images/Header-03.png";
import Banner01 from "./assets/images/Banner-01.png";
import Banner02 from "./assets/images/Banner-02.png";
import Banner03 from "./assets/images/Banner-03.png";
import Feature01 from "./assets/images/Feature-01.png";
import Feature02 from "./assets/images/Feature-02.png";
import Feature03 from "./assets/images/Feature-03.png";
import Hero01 from "./assets/images/Hero-01.png";
import Hero02 from "./assets/images/Hero-02.png";
import Hero03 from "./assets/images/Hero-03.png";
import Pricing01 from "./assets/images/Pricing-01.png";
import Pricing02 from "./assets/images/Pricing-02.png";
import Pricing03 from "./assets/images/Pricing-03.png";
import Card01 from "./assets/images/Card-01.png";
import Footer01 from "./assets/images/Footer-01.png";
import Footer02 from "./assets/images/Footer-02.png";
import HowItWorks01 from "./assets/images/How-it-works-01.png"

function App() {
  const headers = [
    {
      img: Header01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Headers/Header-01",
    },
    {
      img: Header02,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Headers/Header-02",
    },
    {
      img: Header03,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Headers/Header-03",
    },
  ];
  const Banners = [
    {
      img: Banner01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Banners/Banner-01.jsx",
    },
    {
      img: Banner02,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Banners/Banner-02.jsx",
    },
    {
      img: Banner03,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Banners/Banner-03.jsx",
    },
  ];

  const Features = [
    {
      img: Feature01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Features/Feature-01",
    },
    {
      img: Feature02,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Features/Feature-02",
    },
    {
      img: Feature03,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Features/Feature-03",
    },
  ];

  const Heros = [
    {
      img: Hero01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Hero/Hero-01",
    },
    {
      img: Hero02,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Hero/Hero-02",
    },
    {
      img: Hero03,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Hero/Hero-03",
    },
  ];

  const Pricing = [
    {
      img: Pricing01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Pricing/Pricing-01",
    },
    {
      img: Pricing02,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Pricing/Pricing-02",
    },
    {
      img: Pricing03,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Pricing/Pricing-03",
    },
  ];

  const Footers = [
    {
      img: Footer01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Footers/Footer-01",
    },
    {
      img: Footer02,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Footers/Footer-02",
    },
  ];
  const Cards = [
    {
      img: Card01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/Cards/Card-001.jsx",
    },
  ];

  const HowItWorks = [
    {
      img: HowItWorks01,
      link: "https://github.com/Medmly20208/PrimeKitUI/tree/main/src/components/How-it-works/How-it-works-01",
    },
  ];


  return (
    <div className="w-full md:w-[60vw] flex justify-center items-center flex-col mx-auto   ">
      <Header />
      <Hero />
      <Section
        title="Headers"
        id="Headers"
        description="Choose from stunning components"
        components={headers}
      />
      <Section
        title="Banners"
        id="Banners"
        description="Choose from stunning banners"
        components={Banners}
      />
      <div className="bg-blue-100 text-center w-full p-[0.7em] m-[2em]">
        Have you used{" "}
        <span className="text-blue-600 font-bold">PrimeKitUI</span> ? give us a
        star in{" "}
        <a
          href="https://github.com/Medmly20208/PrimeKitUI"
          target="_blank"
          className="underline"
        >
          github
        </a>{" "}
        ✨
      </div>
      <Section
        title="Features"
        id="Features"
        description="Choose from stunning Features"
        components={Features}
      />
      <Section
        title="Heros"
        id="Heros"
        description="Choose from stunning Heros"
        components={Heros}
      />

      <Section
        title="Pricing"
        id="Pricing"
        description="Choose from stunning Pricing"
        components={Pricing}
      />
      <Section
        title="Footer"
        id="Footers"
        description="Choose from stunning Footers"
        components={Footers}
      />

      <Section
        title="Cards"
        id="Card"
        description="Choose from stunning Cards"
        components={Cards}
      />
      <Section
        title="How it works"
       
        description="Choose from stunning 'How it works' sections"
        components={HowItWorks}
      />

      <div className="text-center text-gray-700 mb-2 p-[1em] border-t-2 w-full mt-[50px]">
        PrimeKitUI©copyright 2023
      </div>
    </div>
  );
}

export default App;
