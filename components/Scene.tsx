'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState, useMemo } from 'react'
import { Mesh, Vector3 } from 'three'
import { OrbitControls } from '@react-three/drei'

// Компонент самого "Робота-Пета"
function Bot({ isHappy }: { isHappy: boolean }) {
  const headRef = useRef<Mesh>(null!)
  const leftEyeRef = useRef<Mesh>(null!)
  const rightEyeRef = useRef<Mesh>(null!)

  // Анімація: Робот стежить за курсором і "дихає"
  useFrame((state) => {
    const mouse = state.mouse // Отримуємо координати миші (-1 до 1)
    
    // Голова повертається за мишкою
    headRef.current.rotation.y = mouse.x * 0.2
    headRef.current.rotation.x = -mouse.y * 0.1

    // Очі також трохи рухаються
    const eyeMovement = mouse.x * 0.05
    leftEyeRef.current.position.x = -0.15 + eyeMovement
    rightEyeRef.current.position.x = 0.15 + eyeMovement

    // Ефект "дихання" (пульсація)
    const scale = isHappy ? 1 + Math.sin(state.clock.elapsedTime * 4) * 0.03 : 1
    headRef.current.scale.set(scale, scale, scale)
  })

  // Колір очей: блакитний якщо щасливий, червоний якщо ні
  const eyeColor = isHappy ? "#3b82f6" : "#ef4444"

  return (
    <group ref={headRef}>
      {/* Голова - скруглений куб */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#333" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* "Вуха"/Антени */}
      <mesh position={[-0.55, 0.4, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[0.55, 0.4, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Очі - світяться */}
      <mesh ref={leftEyeRef} position={[-0.15, 0.2, 0.51]}>
        <planeGeometry args={[0.15, 0.3]} />
        <meshBasicMaterial color={eyeColor} />
      </mesh>
      <mesh ref={rightEyeRef} position={[0.15, 0.2, 0.51]}>
        <planeGeometry args={[0.15, 0.3]} />
        <meshBasicMaterial color={eyeColor} />
      </mesh>

      {/* Рот - змінюється від стану */}
      <mesh position={[0, -0.2, 0.51]}>
        <planeGeometry args={isHappy ? [0.4, 0.1] : [0.2, 0.1]} />
        <meshBasicMaterial color="#666" />
      </mesh>
    </group>
  )
}

export default function Scene() {
  const [isHappy, setIsHappy] = useState(true)
  const [clicks, setClicks] = useState(0)

  const handleBotClick = () => {
    setClicks(prev => prev + 1)
    if (isHappy) {
      // Якщо щасливий, стає сумним через 5 кліків
      if (clicks >= 4) {
        setIsHappy(false)
        setClicks(0)
      }
    } else {
      // Якщо сумний, стає щасливим від 1 кліку (погладили)
      setIsHappy(true)
      setClicks(0)
    }
  }

  return (
    <div className="h-[300px] w-full relative">
      {/* Інтерфейс міні-гри */}
      <div className="absolute top-2 right-2 z-10 text-xs font-mono p-2 bg-black/50 rounded border border-gray-800">
        Status: {isHappy ? "HAPPY 😊" : "NERVOUS 😠"} <br />
        Cliks to annoy: {5 - clicks}
      </div>

      <Canvas camera={{ position: [0, 0, 3] }} shadows>
        {/* Краще освітлення (важливо для вигляду) */}
        <ambientLight intensity={1.5} /> {/* Збільшили яскравість фону */}
<pointLight position={[5, 5, 5]} intensity={2} /> {/* Ближче і яскравіше світло */}
<spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} /> {/* Прямий промінь */}
        
        {/* Об'єкт, на який можна клікати */}
        <group 
  onClick={handleBotClick} 
  onPointerOver={() => (document.body.style.cursor = 'pointer')}
  onPointerOut={() => (document.body.style.cursor = 'auto')}
>
          <Bot isHappy={isHappy} />
        </group>
        
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.2} maxPolarAngle={1.8} />
      </Canvas>
    </div>
  )
}