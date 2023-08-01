import React from 'react'
import BlogForm, { BlogFormValue } from '../../../shared/BlogForm';
import { get_popular_post } from '../../../../state/response_constant';

type Props = {
    blog: get_popular_post
}

function EditBlogForm({ blog }: Props) {
    const { _id, count, description, likes, selectedFile, title, type } = blog

    const initialValues = {
        title,
        description,
        type,
        selectedFile
    }

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
        <BlogForm initialValues={initialValues} onSubmit={handleSubmit} />
    )
}

export default EditBlogForm