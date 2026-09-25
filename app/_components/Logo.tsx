import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="text-primary ml-4 text-3xl font-dm-sans font-medium cursor-pointer"
      href={"/"}
      transitionTypes={["slide-in"]}
    >
      banque.
    </Link>
  );
};

export default Logo;
