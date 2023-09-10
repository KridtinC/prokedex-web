import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { capitalize, getColorFromImage } from "../utils/utils";

interface PokemonCardProps {
    id: number
    name: string
    imageURL: string
}

export default function PokemonCard(props: PokemonCardProps) {
    const router = useRouter()
    const imgRef = useRef(null)
    const [imgColor, setImgColor] = useState('')
    const [isHover, setIsHover] = useState(false)

    function setShadow() {
        setImgColor(getColorFromImage(imgRef))
    }

    return (
        <>
            <div style={isHover ? { boxShadow: `0px 0px 20px ${imgColor}`, transition: "all .1s ease-out", transform: 'scale(1.15)' } : {}}
                className={`flex flex-col items-center justify-center w-48 h-60 shadow-sm  bg-slate-800`}
                onClick={() => router.push('/pokemons/' + props.id)}
                onMouseLeave={() => setIsHover(false)}
                onMouseEnter={() => setIsHover(true)}>
                <Image ref={imgRef} src={props.imageURL} alt="sprite" width={100} height={100} onLoad={setShadow} />
                <p>{capitalize(props.name)}</p>
            </div>

        </>
    )
}