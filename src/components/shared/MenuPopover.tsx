// @mui
import { Popover, PopoverOrigin, PopoverProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface MenuPopoverProps extends Omit<PopoverProps, 'open'> {
  open: HTMLElement | null;
}

export default function MenuPopover({
  open,
  children,
  sx,
  ...other
}: MenuPopoverProps) {
  const style = { mt: -0.75 }
  const anchorOrigin = { vertical: 'top', horizontal: 'left' }
  const transformOrigin = { vertical: 'top', horizontal: 'right' }

  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      anchorOrigin={anchorOrigin as PopoverOrigin}
      transformOrigin={transformOrigin as PopoverOrigin}
      PaperProps={{
        sx: {
          p: 1,
          width: 'auto',
          overflow: 'inherit',
          ...style,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20, flexShrink: 0 },
          },
          ...sx,
        },
      }}
      {...other}
    >
      {children}
    </Popover>
  );
}
