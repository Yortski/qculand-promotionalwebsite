import { useState } from "react";

export default function About() {
  const slides = [
    {
      id: 1,
      title: "Developers",
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      description:
        "Our talented developers build and maintain the QCU Land game, ensuring smooth performance and robust features.",
    },
    {
      id: 2,
      title: "Designers",
      image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      description:
        "The design team creates visually stunning assets and interfaces, crafting an immersive experience for players.",
    },
    {
      id: 3,
      title: "Documentation Team",
      image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      description:
        "Our documentation team writes guides, tutorials, and keeps everything clear and accessible for users and developers alike.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="p-10 sm:px-6 lg:px-28 min-h-screen text-[#1e1e1e] bg-[#ccc]">
      <h1 className="text-3xl font-bold mb-6">About the Team</h1>
      <p className="text-md font-semibold text-[#1e1e1e]">Get to know the team behind QCU Land</p>
      <div className="divider divider-neutral"></div>

      <div className="relative w-full overflow-hidden rounded-lg mb-8">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full object-cover h-48 sm:h-48 lg:h-64"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button className="btn btn-circle" onClick={prevSlide}>❮</button>
          <button className="btn btn-circle" onClick={nextSlide}>❯</button>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>
    </section>
  );
}
