interface ProgressProps {
    technology: string;
    level: string;
}

export default function Progress({technology, level}:ProgressProps) {
    return (
        <div className="flex flex-col w-full my-4">
            <div className="flex justify-between">
                <h5 className="text-md text-[#888888]">{technology}</h5>
                <h5 className="text-md text-[#888888]">{level}</h5>
            </div>
            <div className="bg-[#5d5d5d] h-[10px] rounded-[40px] w-full">
                <div className="h-[10px] rounded-[40px] bg-[#e69434]" style={{ width: level }}></div>
            </div>
        </div>
    )
}