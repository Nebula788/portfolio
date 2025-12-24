declare module "react-sprite-animator" {
  import * as React from "react";

  export interface SpriteAnimatorProps {
    sprite: string;
    width: number;
    height: number;
    frameCount: number;
    fps?: number;
    scale?: number;
    loop?: boolean;
    startFrame?: number;
    stopLastFrame?: boolean;
    className?: string;
    wrapAfter? : number;
    style?: React.CSSProperties;
    shouldAnimate?: boolean;
  }

  export const SpriteAnimator: React.FC<SpriteAnimatorProps>;
}