import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles.json";
const ParticlesBackground = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return <Particles options={particlesConfig} init={particlesInit} />;
};
export default ParticlesBackground;
