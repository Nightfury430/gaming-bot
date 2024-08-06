import { FC } from 'react';

import { ICommonIconProps } from '../../utils/types/mainTypes';

const PlayIcon: FC<ICommonIconProps> = ({
  color = '#f50941',
  width = 20,
  height = 20,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="M387.347 205.829c-14.877 0-26.98 12.104-26.98 26.98 0 14.877 12.104 26.98 26.98 26.98 14.877 0 26.98-12.104 26.98-26.98.001-14.876-12.102-26.98-26.98-26.98z"
          fill={color}
          opacity="1"
data-original="#000000">
        </path>
        <path d="m510.503 313.556-28.831-156.594c-6.825-37.07-39.071-63.976-76.674-63.976h-52.953a14.997 14.997 0 0 0-9.813 3.656l-30.464 26.353H200.231l-30.464-26.353a15 15 0 0 0-9.813-3.656h-52.953c-37.603 0-69.851 26.905-76.674 63.976L1.496 313.556c-8.802 47.802 22.121 93.831 69.641 103.602 33.325 6.852 67.043-5.582 87.995-32.448l32.934-42.228h127.869l32.934 42.228c20.826 26.703 54.464 39.341 87.995 32.448 47.407-9.748 78.46-55.698 69.639-103.602zm-343.712-65.747h-21.733v21.733c0 8.284-6.716 15-15 15s-15-6.716-15-15v-21.733H93.326c-8.284 0-15-6.716-15-15s6.716-15 15-15h21.733v-21.734c0-8.284 6.716-15 15-15s15 6.716 15 15v21.734h21.732c8.284 0 15 6.716 15 15s-6.716 15-15 15zm220.556 41.98c-31.418 0-56.98-25.561-56.98-56.98 0-31.419 25.561-56.98 56.98-56.98 31.418 0 56.98 25.561 56.98 56.98 0 31.42-25.56 56.98-56.98 56.98z"
          fill={color}
          opacity="1"
          data-original="#000000"
        >
        </path>
      </g>
    </svg>
  );
};

export default PlayIcon;
