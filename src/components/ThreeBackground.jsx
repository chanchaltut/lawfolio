import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  // Create scene, camera, and renderer
  const { scene, camera, renderer, particles, geometries } = useMemo(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Create particle system
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      colors[i * 3] = Math.random() * 0.5 + 0.5; // Blue to white
      colors[i * 3 + 1] = Math.random() * 0.3 + 0.7; // Cyan to white
      colors[i * 3 + 2] = Math.random() * 0.8 + 0.2; // Blue to white
    }
    
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    
    // Create floating geometric shapes
    const geometries = [];
    const geometryTypes = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.6),
      new THREE.IcosahedronGeometry(0.4),
      new THREE.DodecahedronGeometry(0.5)
    ];
    
    for (let i = 0; i < 15; i++) {
      const geometry = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.6, 0.8, 0.6),
        transparent: true,
        opacity: 0.7,
        shininess: 100,
        emissive: new THREE.Color(0x0073e6),
        emissiveIntensity: 0.2
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      geometries.push(mesh);
      scene.add(mesh);
    }
    
    // Add ambient and directional lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x0073e6, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Add point lights for glow effect
    const pointLight1 = new THREE.PointLight(0x0073e6, 1, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x00e6e6, 0.8, 15);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    scene.add(particles);
    camera.position.z = 5;
    
    return { scene, camera, renderer, particles, geometries };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    
    mountRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    rendererRef.current = renderer;
    
    // Add mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Rotate particles
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      
      // Animate geometric shapes
      geometries.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.003 + index * 0.001;
        mesh.rotation.z += 0.004 + index * 0.001;
        
        // Floating animation
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        
        // Mouse interaction
        const targetX = mouseX * 2;
        const targetY = mouseY * 2;
        mesh.position.x += (targetX - mesh.position.x) * 0.01;
        mesh.position.y += (targetY - mesh.position.y) * 0.01;
      });
      
      // Camera movement
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // GSAP animations for initial appearance
    gsap.fromTo(particles.material, 
      { opacity: 0 }, 
      { opacity: 0.8, duration: 2, ease: "power2.out" }
    );
    
    geometries.forEach((mesh, index) => {
      gsap.fromTo(mesh.position,
        { y: mesh.position.y + 10 },
        { y: mesh.position.y, duration: 2 + index * 0.1, ease: "power2.out", delay: index * 0.1 }
      );
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scene, camera, renderer, particles, geometries]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default ThreeBackground;
