export default function Characters() {
    const characters = [
        {
            name: "Juan",
            description: "The main protagonist who must restore cybersecurity in QCU.",
            img: "/JuanPic.png",
        },
        {
            name: "QCU Bee",
            description: "The QCU mascot who guides the player around campus.",
            img: "/beePic.png",
        },
        {
            name: "Cipher",
            description: "A powerful adaptive AI lurking beneath the Shadow Network, orchestrating every malware attack across QCU.",
            img: "/CipherPic.png",
        },
        {
            name: "Phisher",
            description: "A deceptive entity that tricks users with fake emails and pages.",
            img: "/PhisherPic.png",
        },
        {
            name: "Ransomware",
            description: "A cold, mechanical virus that locks files and demands control.",
            img: "/RansomwarePic.png",
        },
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-4">
                        Game Characters
                    </h1>
                    <p className="text-lg md:text-xl text-[#1e1e1e] font-medium max-w-2xl mx-auto">
                        Meet the heroes and villains in the battle for QCU's cybersecurity
                    </p>
                    <div className="divider divider-primary w-24 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {characters.map((char, idx) => (
                        <div 
                            key={idx} 
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                        >
                            <figure className="h-80 bg-linear-to-b from-primary/10 to-secondary/10 p-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                                <img 
                                    src={char.img} 
                                    alt={char.name} 
                                    className="object-contain h-full w-full transition-transform group-hover:scale-105 duration-300"
                                />
                            </figure>

                            <div className="card-body p-6 text-center">
                                <h2 className="card-title justify-center text-2xl font-bold text-base-content mb-2">
                                    {char.name}
                                </h2>
                                <p className="text-base-content/70 leading-relaxed">
                                    {char.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                            Join the Cybersecurity Battle
                        </h3>
                        <p className="text-[#1e1e1e] mb-6 max-w-2xl mx-auto">
                            Help Juan protect QCU from digital threats and become a cybersecurity hero!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}