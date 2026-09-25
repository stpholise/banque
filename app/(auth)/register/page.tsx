import SideAccordion from "../../_components/cells/SideAccordion";
import Logo from "../../_components/Logo";

const page = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="w-7/12">
          <div className="flex justify-between">
            <Logo />
            <div className="">
              <SideAccordion items={items} />
            </div>
          </div>
        </div>
        <div className="w-120"></div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "Sign Up",
    content: "",
  },
  {
    title: "Sign Up",
    content: "",
  },
  {
    title: "Sign Up",
    content: "",
  },
  {
    title: "Sign Up",
    content: "",
  },
  {
    title: "Sign Up",
    content: "",
  },
];

export default page;
