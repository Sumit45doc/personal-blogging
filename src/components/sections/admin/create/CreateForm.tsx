import BlogForm, { BlogFormValue } from '../../../shared/BlogForm'

const initialValues: BlogFormValue = {
  title: '',
  description: '',
  type: 'design',
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
    <BlogForm initialValues={initialValues} onSubmit={handleSubmit} />
  )
}

export default CreateForm