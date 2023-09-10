import { useContext, useRef, useState } from "react"
import { PokemonInfo } from "../../../models/pokemon"
import Image from "next/image"
import { capitalize, getColorFromImage, sumArray, titleCase } from "../../../utils/utils"
import { GetServerSideProps } from "next"
import Stat from "../../../components/Stat"
import { Stats } from "../../../models/stat"
import { useRouter } from "next/router"
import { Arrow } from "../../../components/Arrow"
import { AppContext } from "../../../context/context"
import { LearnMethod, LearnVersion, Move, MoveDetail } from "../../../models/move"
import { MoveSet } from "../../../components/MoveSet"

interface PokemonInfoPageProps {
    data: PokemonInfo
    error: any
}

export default function PokemonInfoPage(props: PokemonInfoPageProps) {

    const imgRef = useRef(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const { setBackground } = useContext(AppContext)

    function setBackgroundColor() {
        const bg = getColorFromImage(imgRef)
        setBackground(`radial-gradient(6000px 1000px at top, ${bg} 40%, #444)`)
    }

    // useEffect(() => {
    //     setLoading(true)
    // })

    // if (isLoading) {
    //     return <p>Loading...</p>
    // }
    // console.log(props.data.moves)

    if (props.error) {
        return <p>Something went wrong: {props.error}</p>
    }

    return (
        <>
            <main className="min-h-screen flex items-center overflow-x-hidden">
                <Arrow
                    className="w-1/12 flex justify-end"
                    src="/svg/common/icon-chevron-left.svg"
                    alt="arrow-left"
                    width={30}
                    height={300}
                    onClick={() => router.push('/pokemon/' + (props.data.id - 1).toString())}
                />
                <div className="flex flex-col p-28 gap-4 w-10/12">
                    <div className="flex justify-center items-center gap-12">
                        {
                            props.data.imageURL ?
                                <Image
                                    className="drop-shadow-2xl"
                                    ref={imgRef}
                                    src={props.data.imageURL}
                                    alt="sprite"
                                    width={360}
                                    height={360}
                                    onLoad={setBackgroundColor} /> :
                                ''
                        }
                        <div className="flex flex-col gap-8">
                            <p className="text-6xl drop-shadow-xl font-bold">{capitalize(props.data.name)}</p>

                            <div className="flex gap-2">
                                <Image src={`/svg/tag/${props.data.type1}.svg`} alt={props.data.type1} width={148} height={148} />
                                {
                                    props.data.type2 ?
                                        <Image src={`/svg/tag/${props.data.type2}.svg`} alt={props.data.type2} width={148} height={148} /> : null
                                }
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4 px-12">
                        <Stat name="HP" value={props.data.stats.hp} />
                        <Stat name="Attack" value={props.data.stats.attack} />
                        <Stat name="Defense" value={props.data.stats.defense} />
                        <Stat name="Sp.Attack" value={props.data.stats.spAtk} />
                        <Stat name="Sp.Defense" value={props.data.stats.spDef} />
                        <Stat name="Speed" value={props.data.stats.speed} />
                    </div>
                    <div>
                        <p>Moveset</p>
                        <MoveSet moves={props.data.moves} />

                    </div>
                </div>
                <Arrow
                    className="w-1/12 flex justify-start"
                    src="/svg/common/icon-chevron-right.svg"
                    alt="arrow-right"
                    width={30}
                    height={300}
                    onClick={() => router.push('/pokemon/' + (props.data.id + 1).toString())}
                />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        var resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + context.query.id)
        const data = await resp.json()
        var stats: Stats = {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            spAtk: data.stats[3].base_stat,
            spDef: data.stats[4].base_stat,
            speed: data.stats[5].base_stat
        }

        let moves = data.moves.map((m: any) => {
            let move: Move = {
                name: titleCase(m.move.name),
                url: m.move.url,
                details: []
            }

            let details = m.version_group_details.map((d: any) => {
                let detail: MoveDetail = {
                    learnMethod: d.move_learn_method.name,
                    learnAt: d.level_learned_at,
                    learnVersion: d.version_group.name
                }
                return detail
            })
            move.details = details
            return move
        })

        const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(data.id).padStart(3, '0')}.png`

        return {
            props: {
                data: {
                    id: data.id,
                    name: data.name,
                    imageURL: imgUrl,
                    stats: stats,
                    totalStats: sumArray(data.stats),
                    type1: capitalize(data.types[0].type.name),
                    type2: data.types[1] ? capitalize(data.types[1].type.name) : null,
                    moves: moves
                }
            }
        }
    } catch (e: any) {
        console.log(e)
        return {
            props: {
                error: e.toString()
            }
        }
    }
}
