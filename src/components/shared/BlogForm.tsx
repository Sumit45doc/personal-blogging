import { Box, Card, FormControlLabel, FormHelperText, Grid, IconButton, Radio, RadioGroup, Stack, TextField, Typography, styled } from "@mui/material"
import { Formik, Form, FormikProps } from "formik"
import * as Yup from "yup";
import { LoadingButton } from '@mui/lab'
import UploadPlaceholder from "./upload/UploadPlaceholder";
import SingleFilePreview from "./upload/SingleFilePreview";
import ImagePopup from "./ImagePopup";
import { useState } from 'react'
import { Close } from "@mui/icons-material";


export enum PostType {
  PERSONAL = 'personal',
  DESIGN = 'design'
}

export type BlogFormValue = {
  title: string;
  description: string;
  type: 'personal' | 'design';
  selectedFile: string
}

type Props = {
  initialValues: BlogFormValue
  onSubmit: (values: BlogFormValue, onSubmitProps: { setSubmitting: (arg0: boolean) => void; }) => void
  isLoading: boolean
}

function BlogForm({ initialValues, onSubmit, isLoading }: Props) {
  const editImagePreview = !!initialValues.selectedFile ? initialValues.selectedFile : null 
  const [openFullImage, setFullImage] = useState(false)
  const [imagesPreview, setImagesPreview] = useState<ArrayBuffer | null | string>(editImagePreview);

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    selectedFile: Yup.string().required('Required')
  })

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): File | null => {
    const target = e.target as HTMLInputElement
    if (!target?.files) return null;
    setImagesPreview(null);
    const file = target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagesPreview(reader.result as ArrayBuffer);
    };

    reader.readAsDataURL(file);
    return file
  };


  const removeImage = (formik: FormikProps<BlogFormValue>) => {
    formik.setFieldValue('selectedFile', '')
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <>
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <StyledCard>
                    <Stack spacing={3}>
                      <TextField
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                      />

                      <TextField
                        id="description"
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                      />

                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                      >
                        <FormControlLabel value={PostType.DESIGN} control={<Radio />} label={PostType.DESIGN.toLocaleUpperCase()} />
                        <FormControlLabel value={PostType.PERSONAL} control={<Radio />} label={PostType.PERSONAL.toLocaleUpperCase()} />
                      </RadioGroup>



                      <Stack spacing={1}>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                          Cover
                        </Typography>

                        <TextField
                          id="upload-blog-image"
                          type="file"
                          name='selectedFile'
                          inputProps={{ accept: 'image/*, .png. jpg. webp' }}
                          onChange={(e) => {
                            const file = onFileChange(e);
                            formik.setFieldValue('selectedFile', file)
                          }}
                          sx={{ display: 'none' }}
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="upload-blog-image">
                          {formik.values.selectedFile ? (
                            <Box sx={{ position: 'relative', height: '30vh' }} >
                              <IconButton
                                sx={{
                                  position: 'absolute',
                                  zIndex: 10,
                                  right: 8,
                                  top: 8
                                }}
                                onClick={(e) => {
                                  e.preventDefault()
                                  removeImage(formik)
                                }}
                              >
                                <Close fontSize="medium" />
                              </IconButton>
                              <SingleFilePreview file={imagesPreview} />
                            </Box>
                          ) : <UploadPlaceholder />}

                        </label>

                        {<FormHelperText error={formik.touched.selectedFile && Boolean(formik.errors.selectedFile)} sx={{ px: 2 }}>
                          {formik.touched.selectedFile && formik.errors.selectedFile}
                        </FormHelperText>
                        }
                      </Stack>

                      <LoadingButton type="submit" color="secondary" variant="contained" loading={isLoading} disabled={!formik.isValid} >submit</LoadingButton>
                    </Stack>
                  </StyledCard>
                </Grid>

                {/* PREVIEW */}
                <Grid item xs={12} md={4}>
                  <StyledCard>
                    <Stack spacing={3}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Preview
                      </Typography>
                      <Box sx={{ position: 'relative', height: '40vh' }} >
                        {formik.values.selectedFile && (
                          <Box sx={{ cursor: 'pointer' }} onClick={() => setFullImage(true)}>
                            <SingleFilePreview file={imagesPreview} />
                          </Box>
                        )}
                      </Box>
                    </Stack>
                  </StyledCard>
                </Grid>

              </Grid>
              <ImagePopup
                image={imagesPreview}
                open={openFullImage}
                handleClose={() => setFullImage(false)}
              />
            </Form>
          </>
        )
      }}
    </Formik>
  )
}

const StyledCard = styled(Card)(() => ({
  boxShadow: '0 30px 60px -30px rgba(86.99999999999989,28.000000000000007,174,.19)',
  padding: '1rem',
  borderRadius: '15px',
}))


export default BlogForm