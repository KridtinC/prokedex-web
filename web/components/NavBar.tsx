import { useRouter } from "next/router"

export default function NavBar() {

    const router = useRouter()

    return (
        <>
            <div className="fixed flex justify-between items-center p-8 top-0 w-full h-24 font-semibold">
                <button onClick={() => router.push('/')}>Prokédex</button>
                <div className="flex gap-6">
                    <button onClick={() => router.push('/')}>Home</button>
                    <button onClick={() => router.push('/moves')}>Moves</button>
                    <button>Abilities</button>
                    <button>Natures</button>
                    <button>Team Builder</button>
                </div>
                <button>Account</button>
            </div>
        </>
    )
}