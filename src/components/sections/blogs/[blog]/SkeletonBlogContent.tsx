import { Box, Skeleton } from '@mui/material'

function SkeletonBlogContent() {
    return (
        <Box sx={{ margin: 'auto', maxWidth: '950px' }}>
            <Skeleton variant='rectangular' width={'100%'} height={'50vh'} sx={{
                borderRadius: '8px 8px 0 0'
            }} animation='pulse' />
            <Skeleton variant='text' height={'15vh'} animation='pulse' />
            {[...Array(4)].map((_, i) =>
                <Skeleton key={i} variant='text' height={'5vh'} sx={{ mt: '-0.5rem' }} animation='pulse' />
            )}

        </Box>
    )
}

export default SkeletonBlogContent