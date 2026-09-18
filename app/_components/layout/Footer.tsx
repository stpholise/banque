"use client";

const Footer = () => {
  return (
    <div className="pb-12">
      <div className=" max-w-6xl mx-auto px-10  ">
        <div className=" flex flex-col xl:flex-row  justify-between w-full px-1 gap-25 xl:gap-50 py-20  border-b-2 border-b-gray-500">
          <h3 className="text-3xl xl:w-80 font-medium font-dm-sans text-primary ">
            banque
          </h3>
          <div className="flex justify-start flex-wrap  xs:justify-between  xl:justify-end gap-12  w-full  ">
            <div className=" flex flex-col gap-4 items-start xl:w-40 ">
              <h4 className="mb-3 text-white font-medium font-dm-sans text-xl">
                About
              </h4>
              {about.map((item, i) => (
                <button
                  key={i}
                  onClick={item.onClick}
                  className="text-gray-400"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className=" flex flex-col gap-4 items-start w-40">
              <h4 className="mb-3 text-white font-medium font-dm-sans text-xl">
                Webflow
              </h4>
              {webflow.map((item, i) => (
                <button
                  key={i}
                  onClick={item.onClick}
                  className="text-gray-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className=" flex flex-col gap-4 items-start w-fit">
              <h4 className="mb-3 text-white font-medium font-dm-sans text-xl">
                Social Media
              </h4>
              {socialMedia.map((item, i) => (
                <button
                  key={i}
                  onClick={item.onClick}
                  className="text-gray-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="py-6 flex justify-between">
          <p className="text-xs text-gray-300">
            &copy; Made by <span className="text-primary">Olise Stephen</span> -
            Powered by <span className="text-primary">Nextjs</span>
          </p>
          <div className="flex gap-8 text-gray-400 text-xs">
            <p className="">Impressum</p>
            <p className="">Datenschutz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const about = [
  {
    name: "Feature",
    onClick: () => {},
  },
  {
    name: "Pricing",
    onClick: () => {},
  },
  {
    name: "Support",
    onClick: () => {},
  },
];

const webflow = [
  {
    name: "Styleguide",
    onClick: () => {},
  },
  {
    name: "Licensing",
    onClick: () => {},
  },
  {
    name: "Changelog",
    onClick: () => {},
  },
];

const socialMedia = [
  {
    name: "Twitter",
    onClick: () => {},
  },
  {
    name: "Facebook",
    onClick: () => {},
  },
  {
    name: "Instagram",
    onClick: () => {},
  },
];

export default Footer;
