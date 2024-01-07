"use client";
import ReactModal from "react-modal";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import PackageJSON from "../package.json";

const { version } = PackageJSON;
const largeScreenBreakpoint = 1024;

const Navigation = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);
  const [createAccountModalIsOpen, setCreateAccountModalIsOpen] =
    useState(false);

  const toggleModal = (modal: "about" | "create") => {
    if (modal === "about") {
      setAboutModalIsOpen(!aboutModalIsOpen);
    } else {
      setCreateAccountModalIsOpen(!createAccountModalIsOpen);
    }
  };

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  useLayoutEffect(() => {
    const handleResize = (event: UIEvent) => {
      if (event.target) {
        const target = event.target as Window;

        if (target.innerWidth >= largeScreenBreakpoint) {
          setIsMenuExpanded(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navClass = `flex flex-col lg:flex-row fixed lg:w-3/4 left-0 lg:left-auto right-0 ${
    isMenuExpanded && "bottom-0"
  } top-0 h-auto lg:right-auto bg-black lg:bg-secondary bg-opacity-10 lg:bg-opacity-100 backdrop-blur-2xl lg:backdrop-blur-none m-4 py-2.5 px-5 lg:mt-0 lg:py-4 rounded-lg gap-6 lg:gap-0 lg:justify-between`;

  return (
    <>
      <header className="flex justify-center mb-14 lg:mb-0 sticky z-10">
        <nav className={navClass}>
          <div className="flex flex-wrap w-full flex-row justify-between">
            <Logo />
            <MenuButton
              toggleMenu={toggleMenu}
              isMenuExpanded={isMenuExpanded}
            />
          </div>
          <Links toggleModal={toggleModal} isMenuExpanded={isMenuExpanded} />

          <AboutModal
            isOpen={aboutModalIsOpen}
            toggleModal={() => toggleModal("about")}
          />

          <CreateModal
            isOpen={createAccountModalIsOpen}
            toggleModal={() => toggleModal("create")}
          />
        </nav>
      </header>
    </>
  );
};

const Logo = () => (
  <Link
    href="/"
    className="flex flex-row px-2 items-center gap-3 transition-transform cursor-pointer hover:scale-105"
  >
    <span className="text-xl">🌍</span>
    <span className="text-2xl font-bold tracking-tighter">
      SustainTravel{" "}
      <span className="text-sm tracking-normal font-medium color-effect">
        v{version}
      </span>
    </span>
  </Link>
);

const MenuButton = ({ toggleMenu, isMenuExpanded }: any) => (
  <button
    className="flex lg:hidden items-center justify-center w-8 h-8 rounded-md bg-secondary-button bg-opacity-30 transition-transform hover:scale-110"
    onClick={toggleMenu}
  >
    <div className={`w-5 h-5 relative ${isMenuExpanded && "hamburger-active"}`}>
      <span className="bg-primary transition-all h-0.5 w-full left-0 absolute top-1.5" />
      <span className="bg-primary transition-all h-0.5 w-full left-0 absolute bottom-1.5" />
    </div>
  </button>
);

const Links = ({
  toggleModal,
  isMenuExpanded,
}: {
  toggleModal: (modal: "about" | "create") => void;
  isMenuExpanded: boolean;
}) => {
  const linkClass =
    "px-4 py-3 lg:py-2 w-full lg:w-auto rounded-md transition-transform hover:shadow-lg hover:-translate-y-1";
  const secondaryLink = `${linkClass} bg-transparent hover:bg-white`;
  const primaryLink = `${linkClass} bg-primary-button bg-opacity-100 text-secondary`;

  const wrapperClass = `${
    isMenuExpanded ? "flex" : "hidden lg:flex"
  } flex-col lg:flex-row h-full  pb-8 lg:pb-0 lg:h-auto gap-3 lg:gap-9 items-start lg:items-center w-full justify-start lg:justify-end transition-all`;

  return (
    <div className={wrapperClass}>
      <button className={secondaryLink} onClick={() => toggleModal("about")}>
        About
      </button>
      <button className={primaryLink} onClick={() => toggleModal("create")}>
        Create account
      </button>
    </div>
  );
};

type ModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const modalClass =
  "flex flex-col items-center justify-center bg-white rounded-md shadow-lg p-8 mx-5 lg:mx-auto mt-24 lg:mt-8 lg:mt-32 lg:w-1/2";
const overlayClass =
  "fixed right-0 left-0 top-0 bottom-0 z-10 bg-black bg-opacity-50";

const AboutModal = ({ isOpen, toggleModal }: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    overlayClassName={overlayClass}
    className={modalClass}
  >
    <h1 className="text-2xl font-bold mb-4">About</h1>
    <p className="text-lg">
  Sustain Travel is an intuitive web application that swiftly creates a personalized itinerary for your upcoming journey, tailored to your preferences. Developed using Next.js and driven by the cutting-edge GPT-4 Turbo API from OpenAI.
</p>

  </ReactModal>
);

const CreateModal = ({ isOpen, toggleModal }: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    overlayClassName={overlayClass}
    className={modalClass}
  >
    <h1 className="text-2xl font-bold mb-4">Create account</h1>
    <p className="text-lg text-center">
      We are currently in closed beta.
      <br />
      Email us at{" "}
      <a className="font-medium text-accent" href="mailto:nur.arifin.akbar@gmail.com">
        developer
      </a>{" "}
      if interested!
    </p>
  </ReactModal>
);


export default Navigation;
