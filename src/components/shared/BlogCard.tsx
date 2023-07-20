import { Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import { MoreVert, Favorite, Share } from '@mui/icons-material'

function BlogCard() {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: '15px', boxShadow: '0 30px 40px -20px rgba(86.99999999999989,28.000000000000007,174,.1)' }}>
            <CardMedia
                component="img"
                height="194"
                image="/assets/production_11.webp"
                alt="Paella dish"
            />
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.sss
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default BlogCard