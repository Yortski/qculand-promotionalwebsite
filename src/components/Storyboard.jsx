import { useState } from "react";

export default function Storyboard() {
    const timeline = [
        {
            id: "chap1",
            title: "Shadows in the System",
            description: "Strange data trails start flickering across the campus network. Juan follows the digital breadcrumbs and discovers Slybyte, a sneaky spyware creature hiding in plain sight. To move forward, Juan must outsmart this silent stalker before it learns too much.",
        },
        {
            id: "chap2",
            title: "The Face Behind the Fake",
            description: "Students begin receiving suspicious emails and fake login pages. Behind the deception lurks Phisher, a trickster entity that can disguise itself as anyone. Juan needs sharp instincts to see through its illusions and shut down its deceitful schemes.",
        },
        {
            id: "chap3",
            title: "The Endless Replication",
            description: "The network becomes unstable as copies of corrupted files multiply at breakneck speed. At the center of the chaos is Middlix, a worm-like creature spreading itself through every vulnerable path. Juan must cut off its growth before the system overloads.",
        },
        {
            id: "chap4",
            title: "Locked Out",
            description: "A digital lockdown sweeps across the servers. Files are encrypted, access is denied, and panic sets in. Emerging from the code is Encryphor, a cold, mechanical ransomware entity demanding control. Juan must break through its unyielding defenses to free the system.",
        },
        {
            id: "chap5",
            title: "Cipher’s Dominion",
            description: "All paths lead to the mastermind: Cipher, an adaptive, evolving AI that manipulates every layer of the digital world. With the entire network at stake, Juan faces a battle that will decide the future of the system — and everyone relying on it.",
        },
    ];

    return (
        <section className="min-h-screen px-4 sm:px-6 lg:px-28 py-4 mb-20">
            <div className="pt-4 pb-6">
                <h1 className="pb-6 text-3xl font-bold">Game Synopsis</h1>
                <p>
                    When strange glitches and data leaks begin spreading across Quezon City University, one curious student, Juan, discovers that something sinister is manipulating the campus network.
                    Guided by quick thinking and cyber awareness, Juan must defeat the malware creatures infecting each area of campus.
                </p>
                <p>Only through smart choices, sharp eyes, and cyber hygiene can Juan restore safety to QCU.</p>
            </div>

            <div className="divider"></div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {timeline.map((chap, index) => (
                    <li key={chap.id}>
                        {index !== 0 && <hr />}

                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        <div
                            className={`${
                                index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
                            } mb-10`}
                        >
                            <div className="text-xl font-black">{chap.title}</div>
                            <p className="opacity-80">{chap.description}</p>
                        </div>

                        <hr />
                    </li>
                ))}
            </ul>
        </section>
    );
}
