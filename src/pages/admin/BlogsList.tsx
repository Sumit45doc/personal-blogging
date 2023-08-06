import { Container, Typography } from "@mui/material"
import BlogsTable from "../../components/sections/admin/blogs-list/BlogsTable"
import AdminHeader from "../../components/shared/layout/AdminHeader"

function BlogsList() {
  return (
    <AdminHeader>
      <Container maxWidth='lg' sx={{ py: '1rem' }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.2rem' }, textAlign: 'left', my: 2 }}> BLOG LIST</Typography>
        <BlogsTable />
      </Container>
    </AdminHeader>
  )
}

export default BlogsList