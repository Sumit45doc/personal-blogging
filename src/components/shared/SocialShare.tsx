import { FacebookOutlined, Share, Twitter, WhatsApp } from '@mui/icons-material';
import { IconButton, SpeedDial, SpeedDialAction } from '@mui/material';

export const _socials = [
    {
        value: 'facebook',
        name: 'FaceBook',
        icon: FacebookOutlined,
        color: '#1877F2',
        path: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    {
        value: 'whatsapp',
        name: 'Whatsapp',
        icon: WhatsApp,
        color: '#25D366',
        path: 'https://api.whatsapp.com/send?text=',
    },
    {
        value: 'twitter',
        name: 'Twitter',
        icon: Twitter,
        color: '#00AAEC',
        path: 'https://twitter.com/intent/tweet?text=',
    },
];

type Props = {
    url: string;
    title: string;
}

function SocialShare({ url, title }: Props) {

    const shareInMedia = (shareUrl: string, media: string) => {
        const text = encodeURIComponent(title);
        const urlToShare = encodeURIComponent(url);
        switch (media) {
            case 'facebook':
                {
                    const facebookShareLink = `${shareUrl}${urlToShare}`;
                    window.open(facebookShareLink, '_blank');
                    break;
                }
            case 'whatsapp':
                {
                    const whatsappShareLink = `${shareUrl}${text}%20${urlToShare}`;
                    window.open(whatsappShareLink, '_blank');
                    break;
                }
            case 'twitter':
                {
                    const twitterShareLink = `${shareUrl}${text}&url=${urlToShare}`;
                    window.open(twitterShareLink, '_blank');
                    break;
                }
            default:
                null
        }
    }

    const handleShare = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
    }


    return (
        <SpeedDial
            direction={'right'}
            ariaLabel="Share post"
            icon={<Share color='disabled' />}
            sx={{ '& .MuiSpeedDial-fab': { width: 30, height: 30, backgroundColor: 'transparent', boxShadow: 'none' }, backgroundColor: 'transparent' }}
            onClick={handleShare}
        >
            {_socials.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={
                        <IconButton onClick={() => shareInMedia(action.path, action.value)}>
                            <action.icon sx={{ color: action.color }} />
                        </IconButton>
                    }
                    tooltipTitle={action.name}
                    tooltipPlacement="top"
                    FabProps={{ color: 'default' }}
                />
            ))}
        </SpeedDial>
    )
}

export default SocialShare