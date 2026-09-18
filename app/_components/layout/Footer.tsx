"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pb-12">
      <div className=" max-w-6xl mx-auto px-10  ">
        <div className=" flex flex-col xl:flex-row  justify-between w-full px-1 gap-25 xl:gap-50 py-20  border-b-2 border-b-gray-500">
          <h3 className="text-3xl xl:w-80 font-medium font-dm-sans text-primary ">
            banque
          </h3>
          <div className="flex justify-start flex-wrap  xs:justify-between  xl:justify-end gap-12  w-full  ">
            {navColumns.map((col, i) => (
              <div
                key={i}
                className=" flex flex-col gap-4 items-start xl:w-40 "
              >
                <h4 className="mb-3 text-foreground font-medium font-dm-sans text-xl">
                  {col.title}
                </h4>
                {col.items.map((item, i) => (
                  <Link key={i} href={item.url} className="text-gray-400">
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
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
    url: "feature",
  },
  {
    name: "Pricing",
    url: "feature",
  },
  {
    name: "Support",
    url: "feature",
  },
];

const webflow = [
  {
    name: "Styleguide",
    url: "feature",
  },
  {
    name: "Licensing",
    url: "feature",
  },
  {
    name: "Changelog",
    url: "feature",
  },
];

const socialMedia = [
  {
    name: "Twitter",
    url: "feature",
  },
  {
    name: "Facebook",
    url: "feature",
  },
  {
    name: "Instagram",
    url: "feature",
  },
];

export default Footer;

const navColumns: {
  title: string;
  items: {
    name: string;
    url: string;
  }[];
}[] = [
  {
    title: "About",
    items: about,
  },
  {
    title: "Webflow",
    items: webflow,
  },
  {
    title: "Social media",
    items: socialMedia,
  },
];
