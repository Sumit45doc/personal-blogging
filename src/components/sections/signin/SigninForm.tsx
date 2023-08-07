import { Box, Stack, TextField, Typography, styled } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup";
import { LoadingButton } from '@mui/lab'
import { post_signin } from "../../../state/request_constant";
import usePostSignin from "../../../hooks/query/usePostSignin";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { auth } from "../../../redux/slice/user";
import { get_user_response } from "../../../state/response_constant";
import { PATH_HOME } from "../../../state/path";
import { useDispatch } from "../../../redux/store";

const initialValues: post_signin = {
    email: '',
    password: '',
}

function SigninForm() {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()

    const onError = (_error: Error) => {
        // console.log(_error.response.data.error)
        enqueueSnackbar(<Typography>Not able to login. Something went wrong</Typography>, {
            variant: 'error'
        })
    }

    const onSuccess = (data: get_user_response) => {
        enqueueSnackbar(<Typography>Logged In</Typography>, {
            variant: 'success',
            autoHideDuration: 1000
        })
        const { headers } = data;
        dispatch(auth(data.data.data, headers["x-auth-token"]))
        navigate(`/${PATH_HOME.home}`)
    }

    const { mutate, isLoading } = usePostSignin({ onSuccess, onError })


    const validationSchema = Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required')
    })


    const onSubmit = (values: post_signin) => {
        mutate(values)
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

export default SigninForm