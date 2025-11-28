import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function ModelViewer({ path, scale = 1, rotation = [0, 0, 0] }) {
    let gltf = path ? useGLTF(path) : null;

    if (!gltf) {
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="gray" />
            </mesh>
        );
    }

    return (
        <primitive
            object={gltf.scene}
            scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
            rotation={new THREE.Euler(...rotation)}
        />
    );
}

export default function Characters() {
    const characters = [
        {
            name: "Ernesto Balagbag",
            description: "The main protagonist who must restore cybersecurity in QCU.",
            modelPath: "./qcu_student_1.glb",
            scale: 0.045,
            rotation: [0, Math.PI / 4, 0],
        },
        {
            name: "QCU Bee",
            description: "The QCU mascot who guides the player around campus.",
            modelPath: "./qcu_bee.glb",
            scale: 0.3,
            rotation: [0, -Math.PI / 6, 0],
        },
        {
            name: "Cipher",
            description: "Shagedi Shagedi Shapopo",
            modelPath: "./qcu_cipher.glb",
            scale: 1.4,
            rotation: [0, Math.PI / 3, 0],
        },
    ];

    return (
        <section className="bg-[#ccc] p-10 sm:px-6 lg:px-28 pb-30">
            <h1 className="text-3xl text-[#1e1e1e] font-bold">Game Characters</h1>
            <p className="text-md text-[#1e1e1e] font-semibold">A showcase of the Game's Characters</p>
            <div className="divider divider-neutral"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {characters.map((char, index) => (
                    <div key={index} className="card bg-base-100 shadow-sm">
                        
                        <figure className="h-64 bg-base-200">
                            <Canvas camera={{ position: [0, 1.5, 3] }}>
                                <ambientLight intensity={1} />
                                <directionalLight position={[5, 5, 5]} />

                                <ModelViewer 
                                    path={char.modelPath}
                                    scale={char.scale}
                                    rotation={char.rotation}
                                />

                                <OrbitControls enableZoom={false} />
                            </Canvas>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{char.name}</h2>
                            <p>{char.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
