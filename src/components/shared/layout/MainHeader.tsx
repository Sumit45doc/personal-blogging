import Hero from './Hero'

type Props = {
    children: React.ReactNode;
    heroTitle?: string | null;
    shouldFitImageToHeader?: boolean;
}

function MainHeader({ children, heroTitle, shouldFitImageToHeader }: Props) {
    return (
        <>
            <Hero heroTitle={heroTitle} shouldFitImageToHeader={shouldFitImageToHeader} />
            {children}
        </>
    )
}

export default MainHeader