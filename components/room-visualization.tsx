"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

export default function RoomVisualization({ showSplitView = true }) {
  return (
    <div className="w-full h-full">
      {showSplitView ? (
        <div className="grid grid-cols-2 h-full">
          <div className="relative">
            <img
              src="/placeholder.svg?height=800&width=800"
              alt="Original Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-md">Original</div>
          </div>
          <div className="relative">
            <Canvas shadows>
              <Scene />
            </Canvas>
            <div className="absolute top-4 left-4 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-md">
              Redesigned
            </div>
          </div>
        </div>
      ) : (
        <Canvas shadows>
          <Scene />
        </Canvas>
      )}
    </div>
  )
}

function Scene() {
  const [showInfo, setShowInfo] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState(null)

  return (
    <>
      <color attach="background" args={["#111"]} />
      <fog attach="fog" args={["#111", 10, 20]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <PerspectiveCamera makeDefault position={[0, 1.5, 4]} fov={50} />
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} minDistance={2} maxDistance={8} />

      <Environment preset="apartment" background />

      <Room />

      {/* Hotspots */}
      <group>
        <Hotspot
          position={[-1.5, 0.5, 1]}
          onClick={() => {
            setShowInfo(true)
            setActiveHotspot("sofa")
          }}
          active={activeHotspot === "sofa"}
        />
        <Hotspot
          position={[0, 0.3, 0.5]}
          onClick={() => {
            setShowInfo(true)
            setActiveHotspot("table")
          }}
          active={activeHotspot === "table"}
        />
        <Hotspot
          position={[1.2, 1.5, -1]}
          onClick={() => {
            setShowInfo(true)
            setActiveHotspot("lamp")
          }}
          active={activeHotspot === "lamp"}
        />
      </group>

      {/* Product Info Panel */}
      {showInfo && (
        <Html position={[2, 1.5, 0]} transform>
          <div className="w-64 bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-white">
                {activeHotspot === "sofa" && "Modern Sectional Sofa"}
                {activeHotspot === "table" && "Minimalist Coffee Table"}
                {activeHotspot === "lamp" && "Designer Floor Lamp"}
              </h3>
              <button onClick={() => setShowInfo(false)} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="mb-3">
              <div className="text-sm text-gray-300 mb-1">
                {activeHotspot === "sofa" && "Comfortable modern sectional with premium fabric"}
                {activeHotspot === "table" && "Sleek design with tempered glass top"}
                {activeHotspot === "lamp" && "Adjustable LED lighting with dimmer"}
              </div>
              <div className="text-lg font-bold text-white">
                {activeHotspot === "sofa" && "$1,299"}
                {activeHotspot === "table" && "$349"}
                {activeHotspot === "lamp" && "$129"}
              </div>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Details</Button>
          </div>
        </Html>
      )}
    </>
  )
}

function Room() {
  // This would normally load a real 3D model
  // For this example, we'll create a simple room
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 2, -3]} castShadow receiveShadow>
        <boxGeometry args={[10, 4, 0.1]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 4, 0.1]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Furniture */}
      {/* Sofa */}
      <group position={[-1.5, 0.4, 1]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.4, 1]} />
          <meshStandardMaterial color="#7c3aed" />
        </mesh>
        <mesh position={[0, 0.4, -0.4]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.4, 0.2]} />
          <meshStandardMaterial color="#7c3aed" />
        </mesh>
        <mesh position={[-1.15, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.2, 0.4, 0.8]} />
          <meshStandardMaterial color="#7c3aed" />
        </mesh>
      </group>

      {/* Coffee Table */}
      <mesh position={[0, 0.2, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0, 0.1, 0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Floor Lamp */}
      <group position={[1.2, 0, -1]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.15, 0.05, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh position={[0, 0.8, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        <mesh position={[0, 1.6, 0]} castShadow>
          <coneGeometry args={[0.2, 0.3, 16]} />
          <meshStandardMaterial color="#ddd" emissive="#fff" emissiveIntensity={0.5} />
        </mesh>
        <pointLight position={[0, 1.6, 0]} intensity={1} distance={5} color="#fff" castShadow />
      </group>
    </group>
  )
}

function Hotspot({ position, onClick, active }) {
  const ref = useRef()
  const { camera } = useThree()

  useFrame(() => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <group position={position} ref={ref}>
      <Html distanceFactor={8}>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full ${active ? "bg-purple-600 text-white" : "bg-black/70 backdrop-blur-sm"}`}
          onClick={onClick}
        >
          <Info className="h-4 w-4" />
        </Button>
      </Html>
    </group>
  )
}

