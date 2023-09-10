import { GetServerSideProps } from "next"
import { getMoves } from "../../graphql/queries/__generated__/getMoves";
import { ApolloError, useQuery } from "@apollo/client";
import { GET_MOVES } from "../../graphql/queries/move";
import { graphqlClient } from "../../utils/apollo";

interface MovesPageProps {
    data: getMoves
    loading: boolean
    error?: ApolloError
}

export default function MovePage(props: MovesPageProps) {

    if (props.loading) return <div>Loading...</div>
    if (props.error) return <div>An error occurred {JSON.stringify(props.error)}</div>
    if (!props.data) return <div>None</div>;

    return (
        <>
            <p>
                Move
            </p>
            {
                props.data.pokemon_v2_move.map((move) => {
                    <p>{move.name}</p>
                })
            }
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {

        const { data } = await graphqlClient.query<getMoves>({
            query: GET_MOVES
        })

        // console.log(data)
        // const {
        //     loading: isLoading,
        //     data: moves,
        //     error: movesError
        // } = useQuery<getMoves>(GET_MOVES);

        return {
            props: {
                data: data,
                // loading: isLoading,
                // error: movesError
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