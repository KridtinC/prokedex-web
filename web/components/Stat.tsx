interface StatProps {
    name: string
    value: number
}

export default function Stat(props: StatProps) {
    return (
        <>
            <div className="flex gap-4 items-center">
                <p className="w-1/6 text-2xl drop-shadow-xl font-semibold">{props.name}</p>
                <p className="w-1/6 text-2xl drop-shadow-xl text-right font-semibold">{props.value}</p>
                <div className="w-4/6 h-4 mt-2 rounded-md shadow-xl">
                    <span style={{ width: `${(props.value / 255) * 100}%` }} className="animate-progress block h-full bg-white rounded-md"></span>
                </div>
            </div>
        </>
    )
}