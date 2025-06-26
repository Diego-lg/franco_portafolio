import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Lightformer,
  useGLTF,
  useAnimations,
  SoftShadows,
  Environment,
} from "@react-three/drei";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Proyectos() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = animationContainerRef.current;
      if (!container) return;

      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // The scroll distance over which the animation occurs.
      const scrollDuration = containerHeight - viewportHeight;

      if (scrollTop < containerTop) {
        setScrollProgress(0);
        return;
      }

      if (scrollTop > containerTop + scrollDuration) {
        setScrollProgress(1);
        return;
      }

      const progress = (scrollTop - containerTop) / scrollDuration;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <div ref={animationContainerRef} style={{ height: "200vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div className="relative h-full">
            <div className="pointer-events-none absolute top-0 left-0 z-10 flex h-full flex-col justify-center p-8 lg:w-1/2 lg:pl-32">
              <div className="pointer-events-auto max-w-md">
                <h1 className="text-4xl font-bold mb-4">
                  Motor Neumático Radial
                </h1>
                <p className="mb-4">
                  Este es un modelo 3D interactivo de un motor neumático radial
                  diseñado para ser impreso en 3D. Usa la rueda de tu mouse o
                  desliza hacia abajo para ver la animación del ensamblaje.
                </p>
              </div>
            </div>
            <Canvas
              shadows
              orthographic
              camera={{ position: [15, 0, 15], zoom: 80 }}
            >
              <Model scale={0.1} scrollProgress={scrollProgress} />
              <hemisphereLight intensity={0.1} />
              <directionalLight
                position={[2, 8, -5]}
                castShadow
                intensity={2}
                shadow-mapSize={2048}
                shadow-bias={-0.001}
              >
                <orthographicCamera
                  attach="shadow-camera"
                  args={[-10, 10, 10, -10, 0.1, 30]}
                />
              </directionalLight>
              <mesh
                receiveShadow
                position={[0, -5.2, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={30}
              >
                <planeGeometry />
                <shadowMaterial transparent opacity={0.4} color="#604020" />
              </mesh>
              <SoftShadows size={35} />
              <Environment resolution={256}>
                <group rotation={[-Math.PI / 4, 0, 0]}>
                  <Lightformer
                    form="ring"
                    intensity={2}
                    rotation-x={Math.PI / 2}
                    position={[0, 5, -9]}
                    scale={[2, 100, 1]}
                  />
                  <Lightformer
                    form="ring"
                    intensity={2}
                    rotation-y={Math.PI / 2}
                    position={[-5, 1, -1]}
                    scale={[100, 2, 1]}
                  />
                  <Lightformer
                    form="ring"
                    intensity={2}
                    rotation-y={-Math.PI / 2}
                    position={[-5, -1, -1]}
                    scale={[10, 2, 1]}
                  />
                  <Lightformer
                    form="rect"
                    intensity={0.5}
                    rotation-y={-Math.PI / 2}
                    position={[10, 1, 0]}
                    scale={[100, 10, 1]}
                  />
                </group>
              </Environment>
            </Canvas>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:px-6 bg-background relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Más Proyectos</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Explora una selección de mis trabajos en diseño de producto,
            modelado 3D y visualización.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Silla Chicha Pop"
              description="Concepto de silla para concurso, explorando la cultura popular."
              image="/galeria/Silla Concepto Chicha Pop - Concurso de Sillas/IMG-20221206-WA0028.jpg"
              tags={["Diseño de Mobiliario", "Concurso"]}
            />
            <ProjectCard
              title="Studio Ki"
              description="Juego de muebles de oficina pensados para la ergonomía y estética."
              image="/galeria/Studio Ki - Juego de muebles de oficina/FAMILIA RENDER 2 (1).png"
              tags={["Diseño de Mobiliario", "Oficina"]}
            />
            <ProjectCard
              title="Synapsys"
              description="Organizador de mapas mentales para fomentar la creatividad y organización."
              image="/galeria/Synapsys - Organizador de mapas mentales/RENDER 2 (2).png"
              tags={["Diseño de Producto", "Organización"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, tags }: ProjectCardProps) => (
  <Card>
    <CardHeader className="p-0">
      <img
        src={image}
        alt={title}
        className="rounded-t-lg object-cover h-60 w-full"
      />
    </CardHeader>
    <CardContent className="p-6">
      <CardTitle className="mb-2">{title}</CardTitle>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

/*
Author: Slava Z. (https://sketchfab.com/slava)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-printable-radial-pneumatic-engine-3cbddbecd6c5462391e9936a3ccd7d32
Title: 3d Printable Radial Pneumatic Engine
*/
function Model({
  scrollProgress,
  ...props
}: {
  scrollProgress: number;
  [key: string]: any;
}) {
  const { scene, animations } = useGLTF(
    "/3d_printable_radial_pneumatic_engine-transformed.glb",
  );
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    // Enable wireframe mode and shadows
    scene.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (o.material instanceof THREE.MeshStandardMaterial) {
          o.material.wireframe = true;
        }
      }
    });
    // Start action, pause right away
    if (actions["Take 001"]) {
      actions["Take 001"].play().paused = true;
    }
  }, [actions, scene]);
  useFrame((state, delta) => {
    if (actions["Take 001"]) {
      const action = actions["Take 001"];
      // Action.time is the clip duration multiplied with the normalized scroll offset (0-1)
      action.time = action.getClip().duration * scrollProgress;
    }
    // Move camera along
    state.camera.position.set(
      Math.sin(scrollProgress) * 10,
      Math.atan(scrollProgress * Math.PI * 2) * 5,
      Math.cos((scrollProgress * Math.PI) / 2) * 10,
    );
    state.camera.zoom = 100;
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });
  return <primitive object={scene} {...props} />;
}
