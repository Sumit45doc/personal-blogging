//
import Image from '../image/Image';

// ----------------------------------------------------------------------

type Props = {
  file: ArrayBuffer | null | string;
};

export default function SingleFilePreview({ file }: Props) {
  if (!file) {
    return null;
  }

  return (
    <Image
      alt="file preview"
      // @ts-ignore
      src={file}
      sx={{
        top: 8,
        left: 8,
        zIndex: 8,
        borderRadius: 1,
        position: 'absolute',
        width: 'calc(100% - 16px)',
        height: 'calc(100% - 16px)',
      }}
    />
  );
}
