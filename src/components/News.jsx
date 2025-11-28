import { MdArrowDropDown } from "react-icons/md";

export default function News() {
  const updates = [
    {
      title: "How do I create an account?",
      content:
        "Click the 'Sign Up' button in the top right corner and follow the registration process.",
    },
    {
      title: "New security update released",
      content:
        "Version 1.2.0 has been released with new features and bug fixes to improve your experience.",
    },
    {
      title: "Event announcement",
      content:
        "Join our upcoming event to explore new cybersecurity challenges and win prizes!",
    },
  ];

  return (
    <section className="p-10 sm:px-6 lg:px-28 min-h-screen bg-[#ccc]">
      <h1 className="text-3xl font-bold mb-2 text-[#1e1e1e]">News & Updates</h1>
      <p className="text-md font-semibold text-[#1e1e1e]">Stay updated with the latest news</p>
      <div className="divider divider-neutral"></div>

      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="collapse border border-base-300 bg-base-100">
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex justify-between items-center font-semibold">
              {update.title} <MdArrowDropDown size={24} />
            </div>
            <div className="collapse-content text-sm pt-2">{update.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
