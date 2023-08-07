import { Box, Stack, TextField, Typography, styled } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup";
import { LoadingButton } from '@mui/lab'
import { post_signup } from "../../../state/request_constant";
import { useSnackbar } from "notistack";
import usePostSignup from "../../../hooks/query/usePostSignup";
import { useNavigate } from "react-router-dom";
import { get_user_response } from "../../../state/response_constant";
import { auth } from "../../../redux/slice/user";
import { PATH_HOME } from "../../../state/path";
import { useDispatch } from "../../../redux/store";

type FormValue = {
  confirmPassword: string
} & post_signup

const initialValues: FormValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm() {
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const onError = (_error: Error) => {
    enqueueSnackbar(<Typography>Not able to create account. Something went wrong</Typography>, {
      variant: 'error'
    })
  }

  const onSuccess = (data: get_user_response) => {
    enqueueSnackbar(<Typography>Account created successful</Typography>, {
      variant: 'success'
    })
    const { headers } = data;
    dispatch(auth(data.data.data, headers["x-auth-token"]))
    navigate(`/${PATH_HOME.home}`)
  }

  const { mutate: createAccount, isLoading } = usePostSignup({ onSuccess, onError })

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
  })

  const onSubmit = (values: FormValue) => {
    if (values.confirmPassword) {
      // @ts-ignore
      delete values.confirmPassword
    }
    const user: post_signup = { ...values }

    createAccount(user)
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
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              <LoadingButton type="submit" color="secondary" variant="contained" loading={isLoading} disabled={!formik.isValid}>submit</LoadingButton>
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

export default SignUpForm