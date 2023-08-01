import { Container, Typography } from "@mui/material"
import CreateForm from "../../components/sections/admin/create/CreateForm"

function CreateBlog() {
  return (
    <Container maxWidth='lg' sx={{ py: '1rem' }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.2rem' }, textAlign: 'left', my: 2 }}>CREATE NEW BLOG</Typography>
      <CreateForm />
    </Container>
  )
}

export default CreateBlog