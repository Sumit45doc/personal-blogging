import { Box, Stack, TextField, styled } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup";
import { LoadingButton } from '@mui/lab'

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  message: string
}

const initialValues: FormValue = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

function ContactForm() {

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    message: Yup.string().required('Required')
  })

  const onSubmit = (values: FormValue, onSubmitProps: { setSubmitting: (arg0: boolean) => void; }) => {
    onSubmitProps.setSubmitting(true)
    console.log('data ', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      onSubmitProps.setSubmitting(false);
    }, 1000);
  }


  return (
    <Box sx={{ my: '3rem' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form style={{ width: '100%' }}>
            <ContactFormContainer gap={'1rem'}>
              <Stack gap={{ xs: '1rem', md: '3rem' }} direction={{ md: 'row' }} alignItems={{ md: "center" }} justifyContent={"space-between"}>
                <TextField
                  id="first"
                  name="firstName"
                  label="First"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  sx={{ flex: 0.5 }}
                />
                <TextField
                  id="last"
                  name="lastName"
                  label="Last"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  sx={{ flex: 0.5 }}
                />
              </Stack>

              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="message"
                name="message"
                label="Message"
                type="textarea"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
              <LoadingButton type="submit" color="secondary" variant="contained" loading={formik.isSubmitting} disabled={!formik.isValid}>submit</LoadingButton>
            </ContactFormContainer>
          </Form>
        )}
      </Formik>
    </Box>
  )
}


const ContactFormContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: 'column',
  maxWidth: '50rem',
  margin: '0 auto',
  boxShadow: '0 30px 60px -30px rgba(86.99999999999989,28.000000000000007,174,.19)',
  borderRadius: '15px',
  padding: '2rem'
}))

export default ContactForm