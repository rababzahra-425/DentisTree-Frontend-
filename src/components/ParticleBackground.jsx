// import { useEffect } from "react";
// import { tsParticles } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";

// const ParticleBackground = () => {
//     useEffect(() => {
//         const initParticles = async () => {
//             // Engine ko load aur initialize karein
//             await loadSlim(tsParticles);
            
//             // Particles ko direct DOM element par render karein
//             await tsParticles.load({
//                 id: "tsparticles",
//                 options: {
//                     fullScreen: {
//                         enable: true,
//                         zIndex: -1 // Sab se pichhe rakhne ke liye
//                     },
//                     fpsLimit: 120,
//                     interactivity: {
//                         events: {
//                             onHover: {
//                                 enable: true,
//                                 mode: "grab",
//                             },
//                             resize: true,
//                         },
//                         modes: {
//                             grab: {
//                                 distance: 200,
//                                 links: { opacity: 0.8 }
//                             },
//                         },
//                     },
//                     particles: {
//                         color: { value: "#00a8cc" }, // Cyan/Blue dots
//                         links: {
//                             color: "#00a8cc",
//                             distance: 150,
//                             enable: true,
//                             opacity: 0.6,
//                             width: 1.5,
//                         },
//                         move: {
//                             enable: true,
//                             speed: 2,
//                             direction: "none",
//                             outModes: { default: "bounce" },
//                         },
//                         number: {
//                             density: { 
//                                 enable: true, 
//                                 width: 800,
//                                 height: 800 
//                             },
//                             value: 90,
//                         },
//                         opacity: { value: 0.7 },
//                         shape: { type: "circle" },
//                         size: { value: { min: 2, max: 4 } },
//                     },
//                     detectRetina: true,
//                 }
//             });
//         };

//         initParticles();

//         // Cleanup: Jab component unmount (hatayein) to particles destroy ho jayein
//         return () => {
//             const container = tsParticles.dom().find(c => c.id === "tsparticles");
//             if (container) {
//                 container.destroy();
//             }
//         };
//     }, []);

//     // Yeh direct HTML div return karega jahan particles inject honge
//     return <div id="tsparticles" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }} />;
// };

// export default ParticleBackground;

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    useEffect(() => {
        let isMounted = true;
        let containerInstance = null;

        const initParticles = async () => {
            await loadSlim(tsParticles);
            
            if (!isMounted) return;

            // Engine load karke instance ko save kar rahe hain
            containerInstance = await tsParticles.load({
                id: "tsparticles",
                options: {
                    fullScreen: {
                        enable: true,
                        zIndex: -1 // Sab se pichhe layer par rakhne ke liye
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: { opacity: 0.8 }
                            },
                        },
                    },
                    particles: {
                        color: { value: ["#00FF00", "#FFFF00"] },// Green (#00FF00) aur Yellow (#FFFF00) dono mix honge },
                        links: {
                            color: "#37e3d4",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1.2,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            outModes: { default: "bounce" },
                        },
                        number: {
                            density: { 
                                enable: true, 
                                width: 800,
                                height: 800 
                            },
                            value: 70, // Thode kam dots taake website content pr naye lagein
                        },
                        opacity: { value: 0.6 },
                        shape: { type: "circle" },
                        size: { value: { min: 2, max: 4 } },
                    },
                    detectRetina: true,
                }
            });
        };

        initParticles();

        // Safe cleanup bina kisi error ke
        return () => {
            isMounted = false;
            if (containerInstance) {
                containerInstance.destroy();
            }
        };
    }, []);

    // Pointer events none kiye hain taake pichhe rahe aur clicks baki website par kaam karein
    return (
        <div 
            id="tsparticles" 
            style={{ 
                position: "fixed", 
                inset: 0, 
                zIndex: -1, 
                pointerEvents: "none" 
            }} 
        />
    );
};

export default ParticleBackground;