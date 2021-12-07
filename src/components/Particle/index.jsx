import React from "react";
import Particles from "react-particles-js";
import { ParticlesConfig } from "../../configs/ParticlesConfig";

const Particle = (props) => {
    return (
        <Particles
            className="fixed top-0 left-0 right-0 bottom-0 -z-1 min-h-screen w-full"
            params={ParticlesConfig}
        >
            {props.children}
        </Particles>
    );
};

export default Particle;
