import { useState } from "react";

export default function Storyboard() {
    const [selected, setSelected] = useState("chap1");

    const menuItems = [
        { id: "chap1", label: "Shadows in the System" },
        { id: "chap2", label: "The Face Behind the Fake" },
        { id: "chap3", label: "The Endless Replication" },
        { id: "chap4", label: "Locked Out" },
        { id: "chap5", label: "Cipher’s Dominion" },
    ];

    const content = {
        chap1: (
            <div>
                <h1 className="text-4xl font-bold mb-4">Glitches flicker, spyware stalks unseen.</h1>
                <p className="mb-6">
                    Strange data trails start flickering across the campus network. Arius follows the digital breadcrumbs and discovers Slybyte, a sneaky spyware creature hiding in plain sight. To move forward, Arius must outsmart this silent stalker before it learns too much.
                </p>
            </div>
        ),
        chap2: (
            <div>
                <h1 className="text-4xl font-bold mb-4">Deceptive emails lure the unwary.</h1>
                <p className="mb-6">
                    Students begin receiving suspicious emails and fake login pages. Behind the deception lurks Phisher, a trickster entity that can disguise itself as anyone. Arius needs sharp instincts to see through its illusions and shut down its deceitful schemes.
                </p>
            </div>
        ),
        chap3: (
            <div>
                <h1 className="text-4xl font-bold mb-4">Corruption multiplies across the network.</h1>
                <p className="mb-6">
                    The network becomes unstable as copies of corrupted files multiply at breakneck speed. At the center of the chaos is Middlix, a worm-like creature spreading itself through every vulnerable path. Arius must cut off its growth before the system overloads.
                </p>
            </div>
        ),
        chap4: (
            <div>
                <h1 className="text-4xl font-bold mb-4">Ransomware clamps down on access.</h1>
                <p className="mb-6">
                    A digital lockdown sweeps across the servers. Files are encrypted, access is denied, and panic sets in. Emerging from the code is Encryphor, a cold, mechanical ransomware entity demanding control. Arius must break through its unyielding defenses to free the system.
                </p>
            </div>
        ),
        chap5: (
            <div>
                <h1 className="text-4xl font-bold mb-4">The mastermind reveals its hand.</h1>
                <p className="mb-6">
                    All paths lead to the mastermind: Cipher, an adaptive, evolving AI that manipulates every layer of the digital world. With the entire network at stake, Arius faces a battle that will decide the future of the system — and everyone relying on it.
                </p>
            </div>
        ),
    };

return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-28 py-4">
        <div className="pt-4 pb-6">
            <h1 className="pb-6 text-3xl font-bold">Game Synopsis</h1>
            <p>When strange glitches and data leaks begin spreading across Quezon City University, one curious student—Arius—discovers that something sinister is manipulating the campus network. Guided by quick thinking and cyber awareness, Arius must defeat the malware creatures infecting each area of campus. But behind every glitch lies Cipher, an intelligent force controlling the Shadow Network.</p>
            <p>Only through smart choices, sharp eyes, and cyber hygiene can Arius restore safety to QCU.</p>
        </div>
        <div className="divider"></div>
        <div className="relative z-10 max-h-screen flex flex-col lg:flex-row gap-4 lg:gap-8">            
            <aside className="lg:w-64 bg-primary p-2 rounded-none lg:top-4 lg:self-start lg:shadow-lg">
                <ul className="menu rounded-none w-full">
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <a
                                className={`${selected === item.id ? "active" : ""} text-sm font-bold lg:text-base rounded-none`}
                                onClick={() => setSelected(item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>

            <div className="flex-1 bg-base-100/50 backdrop-blur-sm rounded-box p-6 lg:p-16 text-base-content">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    {content[selected]}
                </div>
            </div>
        </div>
    </section>
);
}
