import { Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions, Menu, MenuItem } from '@mui/material'
import { MoreVert, Favorite, Share, Delete, Edit } from '@mui/icons-material'
import { get_popular_post } from '../../state/response_constant'
import { monthName } from '../../utils'
import { MouseEvent, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { PATH_HOME } from '../../state/path'
import { useSelector } from '../../redux/store'
import useLikePost from '../../hooks/query/useLikePost'
import { useSnackbar } from 'notistack'
import SocialShare from './SocialShare'

interface BlogProps extends get_popular_post {
    isAdmin?: boolean;
    onDeletePost: () => void
    onEditPost: () => void
}

function BlogCard({
    title,
    description,
    updatedAt,
    isAdmin = false,
    onDeletePost,
    onEditPost,
    selectedFile,
    _id,
    likes
}: BlogProps) {
    const { _id: userId } = useSelector(state => state.user)
    const isLoggedIn = !!userId;
    const isAlreadyLiked = isLoggedIn ? likes.includes(userId) : false;
    const [like, setLike] = useState(isAlreadyLiked);
    const { enqueueSnackbar } = useSnackbar()
    const location = useLocation()
    console.log(window.location.origin)
    const postUrl = `${window.location.origin}/${PATH_HOME.blog(_id)}`


    const handleLikeError = () => {
        setLike(prev => !prev)
        enqueueSnackbar(<Typography>Something went wrong while {like ? 'dislike' : 'like'} post</Typography>, {
            variant: 'error'
        })
    }

    // *Update Like
    const { mutate: triggerLike } = useLikePost({ onError: handleLikeError })

    // *Date conversion in readable format
    const date = new Date(updatedAt)
    const month = monthName[date.getMonth()]
    const year = date.getFullYear()
    const day = date.getDate()
    const recentUpdate = `${month} ${day}, ${year}`

    // MENU
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLike = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setLike(prev => !prev)
        triggerLike(_id)
    }

    const handleShare = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }


    return (
        <>
            <Card sx={{ maxWidth: 345, borderRadius: '15px', boxShadow: '0 30px 40px -20px rgba(86.99999999999989,28.000000000000007,174,.1)' }}>
                <NavLink to={`/${PATH_HOME.blog(_id)}`} style={{ textDecoration: 'none', color: 'inherit' }}  >
                    <CardMedia
                        component="img"
                        height="182"
                        image={selectedFile}
                        alt="Paella dish"
                    />
                    <CardHeader
                        action={
                            isAdmin ? (<IconButton
                                aria-label="settings"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreVert />
                            </IconButton>)
                                :
                                <></>
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
                        <IconButton aria-label="add to favorites" onClick={handleLike}>
                            <Favorite color={like ? 'secondary' : 'disabled'} />
                        </IconButton>
                        <IconButton aria-label="share" onClick={handleShare}>
                            <SocialShare url={postUrl} title={title} />
                        </IconButton>
                    </CardActions>
                </NavLink>
            </Card>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => onEditPost()}><Edit /> &nbsp; &nbsp;  Edit</MenuItem>
                <MenuItem onClick={() => onDeletePost()}><Delete color='error' />&nbsp;&nbsp; Delete</MenuItem>

            </Menu>
        </>
    )
}

export default BlogCard