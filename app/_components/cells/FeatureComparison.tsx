import { LucideIcon } from "lucide-react";

interface FeatureComparisonProps {
  icon: LucideIcon;
  title: string;
  text: string;
  free: string | LucideIcon;
  premium: string | LucideIcon;
  gold: string | LucideIcon;
}

const FeatureComparison = ({
  icon: Icon,
  title,
  text,
  free: Free,
  premium: Premium,
  gold: Gold,
}: FeatureComparisonProps) => {
  const renderValue = (value: string | LucideIcon) => {
    if (typeof value === "string") {
      return value;
    }

    const ValueIcon = value;

    return (
      <ValueIcon
        size={20}
        className={"text-primary bg-primary-light size-6 p-1 rounded-full "}
      />
    );
  };

  return (
    <div className="grid  [grid-template-areas:'header_header_header'_'side_center_end'] md:[grid-template-areas:none] md:grid  md:grid-cols-[minmax(200px,2fr)_minmax(100px,1fr)_minmax(100px,1fr)_minmax(100px,1fr)] lg:grid-cols-4 gap-4 items-center border-t py-5">
      <div className="flex [grid-area:header]  md:col-span-1 items-center gap-3">
        <Icon
          size={22}
          className="size-12 p-2.5 rounded-full bg-primary-light text-primary"
        />

        <div>
          <h3 className="font-medium text-lg font-dm-sans">{title}</h3>
          <p className="text-sm text-gray-500 font-inter">{text}</p>
        </div>
      </div>

      <div className="flex [grid-area:side]  md:col-span-1 justify-center font-inter">
        {renderValue(Free)}
      </div>

      <div className="flex [grid-area:center]  md:col-span-1 justify-center font-inter">
        {renderValue(Premium)}
      </div>

      <div className="flex [grid-area:end]  md:col-span-1 justify-center font-inter">
        {renderValue(Gold)}
      </div>
    </div>
  );
};

export default FeatureComparison;
