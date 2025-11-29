export default function Gameplay() {
  return (
    <section className="min-h-[80vh] bg-base-100 py-16 px-6 lg:px-28 mb-20">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Gameplay</h1>
        <p className="text-lg font-medium text-base-content/70">
          An in-depth breakdown of the game’s mechanics
        </p>
        <div className="divider w-1/3 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          <h2 className="text-2xl font-bold mb-4">How the Game Works</h2>
          <p className="mb-4 text-base-content/80 leading-relaxed">
            QCU Land is a fully interactive cybersecurity experience where players navigate 
            through visually immersive environments, solve logic-based challenges, and engage 
            with 3D choice mechanics designed to simulate real digital threats.
          </p>

          <p className="text-base-content/80 leading-relaxed">
            Every action you take helps restore safety to the campus network. Learn, explore, 
            and master cyber safety skills through gameplay that feels fun, rewarding, and 
            meaningful.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              <p>Interactive 3D choice system powered by Three.js</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              <p>Choice-based puzzles that teach cybersecurity concepts</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              <p>NPC interactions that guide player progression</p>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-neutral-950 shadow-lg p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2">3D Interaction</h3>
            <p className="text-base-content/70">
              Make decisions by interacting with real 3D objects instead of buttons.
            </p>
          </div>

          <div className="card bg-neutral-950 shadow-lg p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2">Dialogue System</h3>
            <p className="text-base-content/70">
              Engage with NPCs, receive clues, and unlock new areas on campus.
            </p>
          </div>

          <div className="card bg-neutral-950 shadow-lg p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2">Cyber Challenges</h3>
            <p className="text-base-content/70">
              Learn real cybersecurity principles through fun short puzzles.
            </p>
          </div>

          <div className="card bg-neutral-950 shadow-lg p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2">Campus Exploration</h3>
            <p className="text-base-content/70">
              Travel across beautifully stylized 3D QCU environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
