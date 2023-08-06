import { Typography } from '@mui/material';
import usePostCreateBlog from '../../../../hooks/query/usePostCreateBlog';
import BlogForm, { BlogFormValue } from '../../../shared/BlogForm'
import { useSnackbar } from 'notistack'

const initialValues: BlogFormValue = {
  title: '',
  description: '',
  type: 'design',
  selectedFile: ''
}


function CreateForm() {
  const { enqueueSnackbar } = useSnackbar()

  const onError = (_error: Error) => {
    enqueueSnackbar(<Typography>Not able to create blog. Something went wrong</Typography>, {
      variant: 'error'
    })
  }

  const onSuccess = () => {
    enqueueSnackbar(<Typography>Blog created successful</Typography>, {
      variant: 'success'
    })
  }

  const { mutate: createBlog, isLoading } = usePostCreateBlog({ onSuccess, onError })

  const handleSubmit = (
    values: BlogFormValue
  ) => {
    createBlog(values)
  }

  return (
    <BlogForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}

export default CreateForm