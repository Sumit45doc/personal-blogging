import PersonalBlogList from '../components/sections/personal-blogs/PersonalBlogList'
import MainHeader from '../components/shared/layout/MainHeader'

function PersonalBlog() {
  return (
    <MainHeader heroTitle="PERSONAL BLOG" >
      <PersonalBlogList />
    </MainHeader>
  )
}

export default PersonalBlog