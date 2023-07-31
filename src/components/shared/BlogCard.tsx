import { Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import { MoreVert, Favorite, Share } from '@mui/icons-material'
import { get_popular_post } from '../../state/response_constant'
import { monthName } from '../../utils'

type BlogProps = get_popular_post

function BlogCard({ selectedFile, title, description, likes = [], updatedAt }: BlogProps) {
    const date = new Date(updatedAt)
    const month = monthName[date.getMonth()]
    const year = date.getFullYear()
    const day = date.getDate()

    const recentUpdate = `${month} ${day}, ${year}`
    return (
        <Card sx={{ maxWidth: 345, borderRadius: '15px', boxShadow: '0 30px 40px -20px rgba(86.99999999999989,28.000000000000007,174,.1)' }}>
            <CardMedia
                component="img"
                height="194"
                image={'assets/production_11.webp'}
                alt="Paella dish"
            />
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={title}
                subheader={recentUpdate}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                }}>
                    {description}
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