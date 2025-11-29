import React from "react";

export default function FloatingActions({ scrollContainerRef }) {
  const scrollToTop = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      <div className="flex flex-col gap-2 mt-2">
        <button
          className="btn btn-lg btn-primary rounded-none shadow-md"
          onClick={scrollToTop}
        >
          Back to Top
        </button>

        <a
          href="https://yortski.github.io/qculand-prototype/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-lg btn-secondary rounded-none shadow-md">
            Play Game
          </button>
        </a>
      </div>
    </div>
  );
}
