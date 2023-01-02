import * as AllHeroIcons from "react-icons/hi";
import * as AllReactIcons from "react-icons/md";
import * as AllFontAwesomeIcons from "react-icons/fa";

const DynamicHeroIcon = ({ icon, className }) => {
  const { ...HeroIcons } = AllHeroIcons;
  const { ...ReactIcons } = AllReactIcons;
  const { ...FontAwesomeIcons } = AllFontAwesomeIcons;
  var DynamicIcon = HeroIcons[icon];

  if (DynamicIcon == null) DynamicIcon = ReactIcons[icon];
  if (DynamicIcon == null) DynamicIcon = FontAwesomeIcons[icon];
  if (DynamicIcon == null) DynamicIcon = HeroIcons["HiXCircle"];

  if (!icon) return <></>;

  return (
    <DynamicIcon
      className={`${className}  w-5 h-5 btn:dynamic-btn-hover`}
      aria-hidden="true"
    />
  );
};

export default DynamicHeroIcon;
