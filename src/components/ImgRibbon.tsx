import RibbonImage from "../assets/images/RibbonWithoutBG.png";

const ImgRibbon = () => {
  return (
    <div className="fixed bottom-0 left-1/4">
      <img
        src={RibbonImage}
        alt="Ribbon"
        className="h-80 w-auto pointer-events-auto z-1"
      />
    </div>
  );
};

export default ImgRibbon;
