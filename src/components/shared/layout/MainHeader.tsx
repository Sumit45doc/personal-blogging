import Hero from './Hero'

type Props = {
    children: React.ReactNode;
    heroTitle?: string
}

function MainHeader({ children, heroTitle }: Props) {
    return (
        <>
            <Hero heroTitle={heroTitle} />
            {children}
        </>
    )
}

export default MainHeader