import { useLocation, useParams } from "react-router-dom";
import { get_popular_post } from "../../state/response_constant";
import { Container, Typography } from "@mui/material";
import EditBlogForm from "../../components/sections/admin/edit-blog/EditBlogForm";

function EditBlog() {
  const { id } = useParams();
  const { state }: { state: get_popular_post } = useLocation()
  if (!id || !state) return <>Something went wrong</>

  return (
    <Container maxWidth='lg' sx={{ py: '1rem' }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.2rem' }, textAlign: 'left', my: 2 }}>EDIT BLOG</Typography>
      <EditBlogForm blog={state} />
    </Container>
  )
}

export default EditBlog