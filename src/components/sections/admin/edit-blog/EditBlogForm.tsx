import { Typography } from '@mui/material';
import { get_post } from '../../../../state/response_constant';
import BlogForm, { BlogFormValue } from '../../../shared/BlogForm';
import { useSnackbar } from 'notistack';
import useUpdatePost from '../../../../hooks/query/useUpdatePost';

type Props = {
    blog: get_post
}

function EditBlogForm({ blog }: Props) {
    const { enqueueSnackbar } = useSnackbar()

    const initialValues: BlogFormValue = {
        title: blog.title,
        description: blog.description,
        type: blog.type,
        selectedFile: blog.selectedFile
      }

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

    const { mutate: updateBlog, isLoading } = useUpdatePost({ onSuccess, onError })

    const handleSubmit = (
        values: BlogFormValue
    ) => {
        let shouldUpdateImage = false
        const formData = new FormData()
        formData.set('title', values.title)
        formData.set('description', values.description)
        formData.set('type', values.type)
        if(typeof values.selectedFile !== 'string'){
            formData.append('selectedFile', values.selectedFile)
            shouldUpdateImage = true
        }
        updateBlog({ id: blog._id, data: formData, shouldUpdateImage })
    }


    return (
        <BlogForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            isLoading={isLoading}
        />
    )
}

export default EditBlogForm