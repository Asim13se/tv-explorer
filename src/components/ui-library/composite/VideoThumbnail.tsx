import {ReactElement} from "react";
import Text from "../primitive/Text";
import getStyle from "../../../utils/getStyle";
import Image from "../primitive/Image";

export type VideoThumbnailProps = {
  children?: ReactElement | ReactElement[] | string | null,
  style?: React.CSSProperties,
  src: string,
  duration: string,
  imageStyle?: React.CSSProperties,
  imageWidth?: number | string,
  imageHeight?: number | string,
}

export default function VideoThumbnail(props: VideoThumbnailProps): ReactElement {
  return (
    <div
      style={{
        ...styles.main,
        ...(props.style || {}),
      }}
    >
      <Image
        src={props.src}
        style={props.imageStyle}
        width={props.imageWidth || 200}
        height={props.imageHeight || 150}
      />
      <Image
        style={styles.playImage}
        src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMjQgNEMxMi45NSA0IDQgMTIuOTUgNCAyNHM4Ljk1IDIwIDIwIDIwIDIwLTguOTUgMjAtMjBTMzUuMDUgNCAyNCA0em0tNCAyOVYxNWwxMiA5LTEyIDl6Ii8+PC9zdmc+'}
      />
      <Text style={styles.duration}>
        {props.duration}
      </Text>
    </div>
  );
}

const styles = getStyle({
  main: {
    position: 'relative',
    marginBottom: -3.5,
  },
  playImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 55,
    height: 55,
    transform: 'translate(-50%, -50%)',
    opacity: 0.8,
  },
  duration: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: '2px 5px',
    fontSize: 12,
  }
});
