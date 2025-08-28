// interface ProgressProps {
//     technology: string;
//     level: string;
// }

// export default function Progress({technology, level}:ProgressProps) {
//     return (
//         <div className="flex flex-col w-full my-4">
//             <div className="flex justify-between">
//                 <h5 className="text-md text-[#888888]">{technology}</h5>
//                 <h5 className="text-md text-[#888888]">{level}</h5>
//             </div>
//             <div className="bg-[#5d5d5d] h-[10px] rounded-[40px] w-full">
//                 <div className="h-[10px] rounded-[40px] bg-[#e69434]" style={{ width: level }}></div>
//             </div>
//         </div>
//     )
// }


import { useState, useEffect } from 'react';

interface ProgressProps {
    technology: string;
    level: string;
}

export default function Progress({ technology, level }: ProgressProps) {
    const [animatedWidth, setAnimatedWidth] = useState('0%');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Start animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
            setAnimatedWidth(level);
        }, 100); // Small delay for better visual effect

        return () => clearTimeout(timer);
    }, [level]);

    return (
        <div className="flex flex-col w-full my-4">
            <div className="flex justify-between">
                <h5 className="text-md text-[#888888]">{technology}</h5>
                <h5 className={`text-md text-[#888888] transition-opacity duration-700 delay-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                    {level}
                </h5>
            </div>
            <div className="bg-[#5d5d5d] h-[10px] rounded-[40px] w-full overflow-hidden">
                <div 
                    className="h-[10px] rounded-[40px] bg-[#e69434] transition-all duration-1000 ease-out transform"
                    style={{ 
                        width: animatedWidth,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
                    }}
                />
            </div>
        </div>
    );
}