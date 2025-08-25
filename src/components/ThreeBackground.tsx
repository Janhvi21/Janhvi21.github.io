import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Mesh, Vector3, Color, MathUtils } from 'three'
import * as THREE from 'three'

function Particles({ count = 100 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const { size, viewport } = useThree()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        speed: Math.random() * 0.02 + 0.01,
        factor: Math.random() * 100 + 50,
        direction: Math.random() < 0.5 ? -1 : 1,
      })
    }
    return temp
  }, [count])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / size.width) * 2 - 1,
        y: -(event.clientY / size.height) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size])

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        const { position, speed, factor, direction } = particle
        const t = state.clock.elapsedTime * speed
        
        // Mouse influence
        const mouseInfluence = 2
        const distanceToMouse = Math.sqrt(
          Math.pow(position[0] - mouse.x * 10, 2) + 
          Math.pow(position[1] - mouse.y * 10, 2)
        )
        const influence = Math.max(0, mouseInfluence - distanceToMouse * 0.1)
        
        const matrix = new THREE.Matrix4()
        matrix.setPosition(
          position[0] + Math.sin(t * factor) * direction * 0.3 + mouse.x * influence,
          position[1] + Math.cos(t * factor) * direction * 0.3 + mouse.y * influence,
          position[2] + Math.sin(t * factor) * Math.cos(t * factor) * 0.2
        )
        
        meshRef.current!.setMatrixAt(i, matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshPhongMaterial color="#00bcd4" transparent opacity={0.6} />
    </instancedMesh>
  )
}

function DNAHelix() {
  const helixRef = useRef<THREE.Group>(null)
  
  const helixPoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 4
      const height = (i / 50) * 8 - 4
      points.push({
        position1: [Math.cos(angle) * 1.5, height, Math.sin(angle) * 1.5],
        position2: [Math.cos(angle + Math.PI) * 1.5, height, Math.sin(angle + Math.PI) * 1.5],
      })
    }
    return points
  }, [])

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.3
      helixRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <group ref={helixRef} position={[5, 0, -8]}>
      {helixPoints.map((point, i) => (
        <group key={i}>
          <mesh position={point.position1}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial 
              color={new Color().setHSL((i / 50 + 0.1) % 1, 0.8, 0.6)} 
              transparent 
              opacity={0.8} 
            />
          </mesh>
          <mesh position={point.position2}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial 
              color={new Color().setHSL((i / 50 + 0.6) % 1, 0.8, 0.6)} 
              transparent 
              opacity={0.8} 
            />
          </mesh>
          {/* Connection line */}
          <mesh position={[0, point.position1[1], 0]} rotation={[0, 0, Math.atan2(point.position2[2] - point.position1[2], point.position2[0] - point.position1[0])]}>
            <boxGeometry args={[3, 0.02, 0.02]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function MorphingGeometry() {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x = time * 0.5
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.rotation.z = time * 0.1
      
      // Morphing scale effect
      const scale = 1 + Math.sin(time * 2) * 0.3
      meshRef.current.scale.setScalar(scale)
      
      // Color transition
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      const hue = (time * 0.1) % 1
      material.color.setHSL(hue, 0.8, 0.5)
    }
  })

  return (
    <mesh ref={meshRef} position={[-6, 2, -10]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial transparent opacity={0.7} wireframe />
    </mesh>
  )
}

function FloatingRings() {
  const ringsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = state.clock.elapsedTime * 0.2
      ringsRef.current.rotation.y = state.clock.elapsedTime * 0.3
      ringsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5
    }
  })

  return (
    <group ref={ringsRef} position={[0, 0, -15]}>
      <mesh>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial color="#00bcd4" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.06, 16, 100]} />
        <meshStandardMaterial color="#ff6b35" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

function EnhancedFloatingCube({ position, scale, rotationSpeed, color }: { 
  position: [number, number, number], 
  scale: number, 
  rotationSpeed: number,
  color: string 
}) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed * 0.5
      meshRef.current.rotation.z += rotationSpeed * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        metalness={0.1}
        roughness={0.2}
      />
    </mesh>
  )
}

function GeometricShapes() {
  return (
    <>
      {/* Enhanced floating cubes with colors */}
      <EnhancedFloatingCube position={[-8, 2, -5]} scale={0.5} rotationSpeed={0.01} color="#00bcd4" />
      <EnhancedFloatingCube position={[6, -1, -8]} scale={0.3} rotationSpeed={0.008} color="#9c27b0" />
      <EnhancedFloatingCube position={[-3, -3, -6]} scale={0.4} rotationSpeed={0.012} color="#ff6b35" />
      <EnhancedFloatingCube position={[8, 3, -10]} scale={0.6} rotationSpeed={0.005} color="#00e676" />
      <EnhancedFloatingCube position={[2, 4, -7]} scale={0.35} rotationSpeed={0.015} color="#ff4081" />
      
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
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#00bcd4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9c27b0" />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#ff6b35" />
        
        {/* Interactive particle system */}
        <Particles count={150} />
        
        {/* DNA Helix structure */}
        <DNAHelix />
        
        {/* Morphing geometry */}
        <MorphingGeometry />
        
        {/* Floating rings */}
        <FloatingRings />
        
        {/* Enhanced geometric shapes */}
        <GeometricShapes />
      </Canvas>
    </div>
  )
}