import DesignBlogsList from '../components/sections/design-blogs/DesignBlogsList'
import MainHeader from '../components/shared/layout/MainHeader'

function DesignBlog() {
    return (
        <MainHeader heroTitle='DESIGN BLOG' >
            <DesignBlogsList />
        </MainHeader>
    )
}

export default DesignBlog