import SkeletonBlogCard from './skeleton/SkeletonBlogCard'

type Props = {
    noOfCard?: number
}

function LoadingBlogsCard({ noOfCard = 3 }: Props) {
    const noOfBlogCard = [...Array(noOfCard)]
    return (
        <>
            {noOfBlogCard.map((_, i) => <SkeletonBlogCard key={i} />)}
        </>
    )
}

export default LoadingBlogsCard