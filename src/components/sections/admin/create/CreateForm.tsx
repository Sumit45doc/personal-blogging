import { Box } from '@mui/material'
import BlogForm, { BlogFormValue, PostType } from '../../../shared/BlogForm'

const initialValues = {
  title: '',
  description: '',
  type: PostType.DESIGN,
  selectedFile: ''
}


function CreateForm() {

  const handleSubmit = (
    values: BlogFormValue,
    onSubmitProps: { setSubmitting: (arg0: boolean) => void; }
  ) => {
    onSubmitProps.setSubmitting(true)
    console.log('data ', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      onSubmitProps.setSubmitting(false);
    }, 1000);
  }

  return (
    <Box>
      <BlogForm initialValues={initialValues} onSubmit={handleSubmit} />
    </Box>
  )
}

export default CreateForm