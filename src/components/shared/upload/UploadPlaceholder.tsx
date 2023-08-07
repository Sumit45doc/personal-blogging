import { Stack, Typography, StackProps } from "@mui/material";

function UploadPlaceholder({ sx, ...other }: StackProps) {
    return (
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{
          xs: 'column',
          md: 'row',
        }}
        sx={{
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          border: '1px dashed',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          cursor: 'pointer',
          ...sx,
        }}
        {...other}
      >
        <div>
          <Typography gutterBottom variant="h5">
           Select file
          </Typography>
        </div>
      </Stack>
    );
  }
  
  export default UploadPlaceholder