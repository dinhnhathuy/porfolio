import { FaReact, FaVuejs, FaWordpressSimple } from 'react-icons/fa';
import { SiServerless, SiNuxtdotjs  } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
const IconMap = {
  FaReact,
  FaVuejs,
  FaWordpressSimple,
  SiServerless,
  SiNuxtdotjs ,
  TbBrandNextjs,
}
// eslint-disable-next-line react/prop-types
export const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.error(`Icon ${name} not found in IconMap`);
    return <span>Icon not found: {name}</span>;
  }

  return <IconComponent {...props} />;
};
