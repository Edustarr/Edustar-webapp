'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


interface LottiePlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottiePlayer = ({
  src,
  className,
  loop = true,
  autoplay = true,
}: LottiePlayerProps) => {
  return (
    <DotLottieReact
      src={src}
      className={className}
      loop={loop}
      autoplay={autoplay}
    />
  );
};

export default LottiePlayer;
