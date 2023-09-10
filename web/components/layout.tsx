import { ReactNode, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { AppContext } from '../context/context'
import { useRouter } from "next/router";

interface LayoutProps {
    children: ReactNode
}

const defaultBg = 'radial-gradient(circle, #777, #222 90%)'

export default function Layout(props: LayoutProps) {

    const [background, setBackground] = useState(defaultBg)
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/') {
            setBackground(defaultBg)
        }
    }, [router.pathname])

    return (
        <AppContext.Provider value={{ background, setBackground }}>
            <div className='min-h-screen text-white' style={{ background: background }}>
                <NavBar />
                <div className="pt-24">
                    {props.children}
                </div>
            </div>
        </AppContext.Provider>
    )
}