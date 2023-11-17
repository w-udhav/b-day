// src/components/ParticleComponent.js

import { useCallback } from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particleConfig";
import { loadSlim } from "tsparticles-slim";

const ParticleComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
    />
  );
};

export default ParticleComponent;
