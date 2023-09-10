import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

interface ArrowProps {
    className?: string
    src: string
    alt: string | 'arrow'
    width: number
    height: number
    onClick(): void
}

export function Arrow(props: ArrowProps) {
    const [isHover, setIsHover] = useState(false)

    return (
        <>
            <div
                className={`${props.className} drop-shadow-xl`}
                style={isHover ? { filter: 'drop-shadow(0 0 0.75rem white)', transition: "all .1s ease-out", transform: 'scale(1.15)' } : {}}
                onMouseLeave={() => setIsHover(false)}
                onMouseEnter={() => setIsHover(true)}
                onClick={props.onClick}
            >
                <Image style={ isHover? { filter: 'invert(100%)' }: { filter: 'invert(100%)', opacity: '20%'}} src={props.src} alt={props.alt} width={props.width} height={props.height} />
            </div>
        </>
    )
}