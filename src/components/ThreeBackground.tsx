import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three'

function FloatingCube({ position, scale, rotationSpeed }: { 
  position: [number, number, number], 
  scale: number, 
  rotationSpeed: number 
}) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00bcd4" transparent opacity={0.6} />
    </mesh>
  )
}

function GeometricShapes() {
  return (
    <>
      {/* Floating cubes */}
      <FloatingCube position={[-8, 2, -5]} scale={0.5} rotationSpeed={0.01} />
      <FloatingCube position={[6, -1, -8]} scale={0.3} rotationSpeed={0.008} />
      <FloatingCube position={[-3, -3, -6]} scale={0.4} rotationSpeed={0.012} />
      <FloatingCube position={[8, 3, -10]} scale={0.6} rotationSpeed={0.005} />
      <FloatingCube position={[2, 4, -7]} scale={0.35} rotationSpeed={0.015} />
      
      {/* Larger geometric shapes */}
      <mesh position={[-12, 0, -15]} rotation={[0.5, 0.5, 0]}>
        <octahedronGeometry args={[2]} />
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[10, -2, -20]} rotation={[0.3, 0.8, 0.2]}>
        <tetrahedronGeometry args={[1.5]} />
        <meshStandardMaterial color="#00bcd4" transparent opacity={0.5} />
      </mesh>
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00bcd4" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#9c27b0" />
        <GeometricShapes />
      </Canvas>
    </div>
  )
}