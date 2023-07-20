import { Box, styled } from "@mui/material"
import Header from "./Header"
import Detail from "../../sections/home/Detail"

type Props = {
  heroTitle?: string
}

function Hero({heroTitle}: Props) {
  return (
    <HeroContainer component={'section'} sx={{ height: !!heroTitle ? '50vh' : '70vh' }}>
      <Header />
      <Detail heroTitle={heroTitle}  />
    </HeroContainer>
  )
}

export default Hero


const HeroContainer = styled(Box)({
  display: 'flex',
  position: 'relative',
  width: '100%',
  backgroundImage: `url(/assets/hero-banner.jpg)`,
  flexDirection: 'column',
  overflow: 'hidden'
})