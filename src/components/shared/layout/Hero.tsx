import { Box, styled } from "@mui/material"
import Header from "./Header"
import Detail from "../../sections/home/Detail"

type Props = {
  heroTitle?: string | null
  shouldFitImageToHeader?: boolean;
}

function Hero({ heroTitle, shouldFitImageToHeader = true }: Props) {

  const height = () => {
    if (shouldFitImageToHeader) {
      if (!!heroTitle) {
        return '50vh'
      } else return '70vh'
    } else return 'fit-content'
  }

  return (
    <HeroContainer component={'section'} sx={{ height: height() }}>
      <Header />
      {heroTitle !== null && <Detail heroTitle={heroTitle} />}
    </HeroContainer>
  )
}

export default Hero


const HeroContainer = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  backgroundImage: `url(/assets/hero-banner.jpg)`,
  flexDirection: 'column',
  overflow: 'hidden'
}))