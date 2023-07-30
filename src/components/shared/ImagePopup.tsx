import { Box, IconButton, Modal } from '@mui/material';
import Image from './image/Image';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    image: string;
    handleClose: () => void;
    open: boolean
}

function ImagePopup({ open, handleClose, image }: Props) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <IconButton aria-label="settings" sx={{
                    top: 8,
                    right: 8,
                    zIndex: 10,
                    borderRadius: 1,
                    position: 'absolute',
                    opacity: 0.9,
                }}
                    onClick={handleClose}
                >
                    <CloseIcon fontSize='large' />
                </IconButton>
                <Image
                    alt="file preview"
                    src={image}
                    sx={{
                        top: 8,
                        left: 8,
                        zIndex: 8,
                        borderRadius: 1,
                        position: 'absolute',
                        width: 'calc(100% - 16px)',
                        height: 'calc(100% - 16px)',
                        objectFit: 'contain'
                    }}
                />
            </Box>
        </Modal>
    )
}

export default ImagePopup