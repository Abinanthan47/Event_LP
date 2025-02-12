import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
import { useRef } from "react";

const TechDay2 = () => {
    return (
       <div className="bg-neutral-900 outline-none border-none ">
            <HorizontalScrollCarousel />
            <div className="flex h-24 items-center justify-center">
            <span className="font-semibold uppercase text-2xl md:text-5xl text-neutral-300">
                <span className="text-red-400">NON</span>-TECH EVENTS
            </span>
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
        window.innerWidth < 768 ? "-85%" : "-35%"
    ]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                <div className="flex items-center justify-center gap-10 w-[12%]   text-white text-5xl -rotate-90 font-bold uppercase">
                        <span className="tracking-widest ">DAY <span className="text-red-500">2</span></span>
                    </div>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                  
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
                    Feb <span className="text-red-500">28</span>
                </p>

            </div>
        </div>
    );
};

export default TechDay2;

const cards = [
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/3P4wrVysTVKHWFw5Q02WBw",
        title: "Feb 27",
        id: 1,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/PeF-TkshSOiAAsKVRslt7Q",
        title: "Feb 27",
        id: 2,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/SPBkYtGCQ0OGrXWWMy3_LQ",
        title: "Feb 27",
        id: 3,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/uOJJtjzISDWttMwqwF1XYw",
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