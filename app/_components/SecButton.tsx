import { ArrowRight } from "lucide-react";

const SecButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="text-primary font-medium text-lg text-dm-sans flex gap-2 items-center"
      onClick={onClick}
    >
      {text} <ArrowRight className="size-4 text-primary" />
    </button>
  );
};

export default SecButton;
