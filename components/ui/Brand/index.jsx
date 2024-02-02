import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/logo.png"
    alt="Project Dopamine Logo"
    {...props}
    width={86}
    height={48}
    priority
  />
);
export default Brand;
