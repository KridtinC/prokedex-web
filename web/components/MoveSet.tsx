import { Move } from "../models/move"

interface MoveSetProps {
    moves: Move[]
}

export const MoveSet = (props: MoveSetProps) => {
    return (
        <table>
            <tbody>
                {
                    props.moves.map(move => <tr key={move.name}>
                        <th>{move.name}</th>
                        {/* <td>{move.details[0].learnAt}</td> */}
                    </tr>)
                }
            </tbody>

        </table>
    )
}