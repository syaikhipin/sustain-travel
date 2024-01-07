import { RefObject, useEffect, useRef } from "react";

type IteneraryResultProps = {
  result: string;
};

const IteneraryResult = ({ result }: IteneraryResultProps) => {
  const tripTextRef: RefObject<HTMLParagraphElement> = useRef(null);

  useEffect(() => {
    if (tripTextRef.current) {
      tripTextRef.current.innerText = result;
    }
  }, [result]);

  useEffect(() => {
    if (tripTextRef.current) {
      const bottomPosition =
        tripTextRef.current.offsetTop + tripTextRef.current.clientHeight;

      window.scrollTo({
        top: bottomPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="pb-48 mt-8">
      <h2 className="text-2xl font-bold mb-4 color-effect">Your Trip</h2>
      <p ref={tripTextRef} />
    </div>
  );
};

export default IteneraryResult;
