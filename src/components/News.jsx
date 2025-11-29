import { MdArrowDropDown } from "react-icons/md";

export default function News() {
  const updates = [
    {
      title: "New Cybersecurity Training Mission",
      content:
        "A new playable mission has been added to the Library Zone. Players will learn to detect phishing attempts while facing the Phisher character in timed mini-challenges.",
    },
    {
      title: "Cipher AI Encounter Update",
      content:
        "The Cipher boss encounter now adapts to the player's decisions. Expect dynamic strategies, new dialogue lines, and updated cutscenes based on quiz performance.",
    },
    {
      title: "QCU Bee Companion Upgrade",
      content:
        "QCU Bee now provides contextual hints in the Dorm, Admin, and Library areas. Additional voice lines have been added to guide new players.",
    },
    {
      title: "Patch 1.3.4 – Performance and Bug Fixes",
      content:
        "Fixed animation stutters in the Main Gate scene, optimized 3D models for smoother performance on low-spec devices, and improved loading times across campus areas.",
    },
    {
      title: "Cyber Awareness Week Event",
      content:
        "Participate in daily cybersecurity challenges around the virtual campus. Completing all tasks rewards a bonus cutscene and special in-game items.",
    },
  ];

  return (
    <section className="p-10 sm:px-6 lg:px-28 min-h-[70vh] pb-40 bg-white">
      <h1 className="text-3xl font-bold mb-2 text-[#1e1e1e]">News & Updates</h1>
      <p className="text-md font-semibold text-[#1e1e1e]">Stay updated with the latest happenings in QCULand</p>
      <div className="divider divider-neutral"></div>

      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="collapse border border-base-300 bg-base-100 rounded-none">
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex justify-between items-center font-semibold">
              {update.title} <MdArrowDropDown size={24} />
            </div>
            <div className="collapse-content text-sm pt-2">
              {update.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
