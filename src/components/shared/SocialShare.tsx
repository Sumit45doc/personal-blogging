import { Share } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, useMediaQuery, useTheme } from '@mui/material';
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

export const _socials = [
    {
        value: 'facebook',
        name: 'FaceBook',
        ShareButton: FacebookShareButton,
        AppIcon: FacebookIcon,
        color: '#1877F2',
    },
    {
        value: 'whatsapp',
        name: 'Whatsapp',
        ShareButton: WhatsappShareButton,
        AppIcon: WhatsappIcon,
        color: '#1877F2',
    },
    // {
    //     value: 'instagram',
    //     name: 'Instagram',
    //     ShareButton: InstapaperShareButton,
    //     AppIcon: InstapaperIcon,
    //     color: '#E02D69',
    // },
    {
        value: 'linkedin',
        name: 'Linkedin',
        ShareButton: LinkedinShareButton,
        AppIcon: LinkedinIcon,
        color: '#007EBB',
        path: 'https://www.linkedin.com/caitlyn.kerluke',
    },
    {
        value: 'twitter',
        name: 'Twitter',
        ShareButton: TwitterShareButton,
        AppIcon: TwitterIcon,
        path: 'https://www.twitter.com/caitlyn.kerluke',
    },
];

type Props = {
    url: string;
    title: string;
}

function SocialShare({ url, title }: Props) {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <SpeedDial
            direction={isDesktop ? 'left' : 'up'}
            ariaLabel="Share post"
            icon={<Share />}
            sx={{ '& .MuiSpeedDial-fab': { width: 48, height: 48 } }}
        >
            {_socials.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={<action.ShareButton url={url} title={title}><action.AppIcon /></action.ShareButton>}
                    tooltipTitle={action.name}
                    tooltipPlacement="top"
                    FabProps={{ color: 'default' }}
                />
            ))}
        </SpeedDial>
    )
}

export default SocialShare