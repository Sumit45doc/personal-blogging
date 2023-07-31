import LatestPost from "../components/sections/home/LatestPost"
import PopularPost from "../components/sections/home/PopularPost"
import MainHeader from "../components/shared/layout/MainHeader"

function Home() {
    return (
        <MainHeader>
            <PopularPost />
            <LatestPost />
        </MainHeader>
    )
}

export default Home