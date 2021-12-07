export const ParticlesConfig = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 1200,
            },
        },
        color: {
            value: "#ADD8E6",
        },
        shape: {
            type: "circle",
        },
        line_linked: {
            enable: true,
            distance: 200,
            opacity: 1,
            color: "005b96",
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
        },
        size: {
            value: 2.5,
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            grab: {
                distance: 300,
                line_linked: {
                    opacity: 1,
                },
            },
            repulse: {
                distance: 220,
                duration: 1,
            },
        },
    },
    retina_detect: false,
}