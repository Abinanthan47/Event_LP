import { motion } from "framer-motion";
import { GlitchText } from "./ui/animated-glitch-text";

const FuzzyOverlayExample = () => {
    return (
        // NOTE: An overflow of hidden will be required on a wrapping
        // element to see expected results
        <div className="relative overflow-hidden">
            <ExampleContent />
            <FuzzyOverlay />
        </div>
    );
};

const FuzzyOverlay = () => {
    return (
        <motion.div
            initial={{ transform: "translateX(-10%) translateY(-10%)" }}
            animate={{
                transform: "translateX(10%) translateY(10%)",
            }}
            transition={{
                repeat: Infinity,
                duration: 0.2,
                ease: "linear",
                repeatType: "mirror",
            }}
            // You can download these PNGs here:
            // https://www.hover.dev/black-noise.png
            // https://www.hover.dev/noise.png
            style={{
                backgroundImage: 'url("/black-noise.png")',
                // backgroundImage: 'url("/noise.png")',
            }}
            className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
        />
    );
};

const ExampleContent = () => {
    return (
        <div className="relative grid h-[50vh] place-content-center space-y-3 bg-neutral-950 p-4">
            <h3 className="text-center text-6xl font-white tracking-wider text-neutral-50 glitch -mb-9">
                <GlitchText text="₹50000" />

            </h3>
            <p className="text-center  text-neutral-100">
                Worth of Prizes 
            </p>
            <style>
                {`
          .glitch {
            position: relative;
            color: #fff;
            animation: glitch 1s infinite;
          }
          @keyframes glitch {
            0% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.8); }
            20% { text-shadow: -1px -1px 0 rgba(0, 255, 0, 0.8); }
            40% { text-shadow: 1px 1px 0 rgba(0, 0, 255, 0.8); }
            60% { text-shadow: -1px -1px 0 rgba(255, 255, 0, 0.8); }
            100% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.8); }
          }
        `}
            </style>

            {/* <div className="flex items-center justify-center gap-3">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Pricing
        </button>
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          Try it free
        </button>
      </div> */}
        </div>
    );
};

export default FuzzyOverlayExample;