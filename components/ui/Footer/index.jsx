import Link from "next/link";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Links
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Links",
    items: [
      {
        id: 1,
        text: "About",
        link: "#",
      },
      {
        id: 2,
        text: "Career",
        link: "#",
      },
      {
        id: 3,
        text: "Contact",
        link: "#",
      },
      {
        id: 4,
        text: "Services",
        link: "#",
      },
      {
        id: 5,
        text: "Services",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Ressources",
    items: [
      {
        id: 1,
        text: "Blog",
        link: "#",
      },
      {
        id: 2,
        text: "Privacy",
        link: "#",
      },
      {
        id: 3,
        text: "Terms",
        link: "#",
      },
      {
        id: 4,
        text: "FAQ",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="  text-gray-700">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 pt-[19rem]">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 text-gray-700 dark:text-gray-300">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p> © Project Dopamine </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            <Link
              href="https://github.com/AdityaDonkada/Project-Dopamine-Google-Extension"
              aria-label="social link"
              rel="noreferer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
