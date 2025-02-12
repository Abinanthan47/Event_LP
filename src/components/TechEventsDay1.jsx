import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { VelocityScroll } from "./magicui/scroll-based-velocity";

const TechDay1 = () => {
    return (
        <div className="bg-neutral-900">
            <div className="flex h-32 items-center justify-center">
                <span className="font-semibold text-2xl md:text-5xl uppercase text-neutral-300">
                    <span className="text-red-400">TECH</span>NICAL EVENTS
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-28 items-center justify-center">
            <VelocityScroll className="text-red-400 bg-neutral-900">FRACTALS & I'VENOR '25</VelocityScroll>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], [
        "1%",
        window.innerWidth < 768 ? "-80%" : "-30%"
    ]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                    <div className="flex items-center justify-center gap-10 w-[11%]   text-white text-5xl rotate-90 font-bold uppercase">
                        <span className="tracking-widest ">DAY <span className="text-red-500">1</span></span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[600px] w-[450px] overflow-hidden border  bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: window.innerWidth < 768 ? "contain" : "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 bg-white group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-start p-1">
                <p className="bg-gradient-to-br tracking-widest from-white/20 to-white/0 p-2 text-xl font-black uppercase text-white backdrop-blur-lg">
                    Feb <span className="text-red-500">27</span>
                </p>

            </div>
        </div>
    );
};

export default TechDay1;

const cards = [
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/kHzBvQVfTpCA8nf4In4b-Q",
        title: "Feb 27",
        id: 1,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/cVBy0aexR2S8Qu-e6FdWXw",
        title: "Feb 27",
        id: 2,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/XHQyYZvHTZyR9TflewJgEA",
        title: "Feb 27",
        id: 3,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/O6aEc9KgTNaaFed8m-7b-g",
        title: "Feb 27",
        id: 4,
    },


    //   {
    //     url: "/imgs/abstract/5.jpg",
    //     title: "Title 5",
    //     id: 5,
    //   },
    //   {
    //     url: "/imgs/abstract/6.jpg",
    //     title: "Title 6",
    //     id: 6,
    //   },
    //   {
    //     url: "/imgs/abstract/7.jpg",
    //     title: "Title 7",
    //     id: 7,
    //   },
];