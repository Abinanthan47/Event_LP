'use client';
import { useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/drawer";
import { Button } from './ui/button';
import { Liquid } from './ui/liquid-gradient';

const COLORS = {
    color1: '#FFFFFF',
    color2: '#1E10C5',
    color3: '#9089E2',
    color4: '#FCFCFE',
    color5: '#F9F9FD',
    color6: '#B2B8E7',
    color7: '#0E2DCB',
    color8: '#0017E9',
    color9: '#4743EF',
    color10: '#7D7BF4',
    color11: '#0B06FC',
    color12: '#C5C1EA',
    color13: '#1403DE',
    color14: '#B6BAF6',
    color15: '#C1BEEB',
    color16: '#290ECB',
    color17: '#3F4CC0',
};
const RegisterButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center">
            <button
                className="absolute inline-block sm:w-36 w-28 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsOpen(true)}
            >
                <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
                    <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <Liquid isHovered={isHovered} colors={COLORS} />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
                    <span className="absolute inset-0 rounded-lg bg-black"></span>
                    <Liquid isHovered={isHovered} colors={COLORS} />
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span
                            key={i}
                            className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'
                                }`}></span>
                    ))}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
                </div>
                <button
                    className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
                    aria-label="Register"
                    type="button"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <span className="flex items-center justify-center rounded-lg group-hover:text-yellow-400 text-white text-lg sm:text-xl font-semibold tracking-wide whitespace-nowrap">
                        <span className="inline-block font-light text-sm">Register</span>
                    </span>
                </button>
            </button>
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger />
                <DrawerContent className="bg-black/80 p-12 text-white flex items-center justify-center">
                    <DrawerHeader>
                        <DrawerTitle className='text-lg font-medium tracking-wide text-center mb-5'>Register For</DrawerTitle>
                        <DrawerDescription className="flex gap-8 items-center justify-center">
                            <Button className="px-8 py-4 rounded-lg bg-gradient-to-b from-purple-500 to-purple-800 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                                <a href="https://forms.gle/Cwo2U5mxeE9TrpPi7">Fractals <br/> (Day 1 )</a>
                            </Button>
                            <Button className="px-8 py-2 rounded-lg bg-gradient-to-b from-purple-500 to-purple-800 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                                <a href="https://forms.gle/1W5ufXvWLzyfWcPt6">I`venor</a>
                            </Button>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose onClick={() => setIsOpen(false)} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};
export default RegisterButton;
