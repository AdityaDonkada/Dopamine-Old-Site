import Link from "next/link";
import Brand from "../Brand";
import Image from "next/image";
const NavHeader = ({ onClick, state, menuBtnEl }) => (
  <div className="flex items-center justify-between py-5 md:block">
    <Link href="/">
      <div class="font-semibold flex gap-x-2">
        <Image
          src="/logo.png"
          width={30}
          height={30}
          alt="Picture of the author"
          className="rounded-full"
        />
        <span class="text-lg text-gray-700 dark:text-gray-300">
          Project Dopamine
        </span>
      </div>
    </Link>
    <div className="md:hidden">
      <button
        role="button"
        aria-label="Open the menu"
        ref={menuBtnEl || null}
        className="text-gray-500 hover:text-gray-800"
        onClick={onClick}
      >
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  </div>
);

export default NavHeader;
