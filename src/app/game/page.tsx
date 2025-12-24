// "use client";
// import { useEffect, useRef, useState } from "react";
// import { SpriteAnimator } from "react-sprite-animator";

// const SPRITE_WIDTH = 256 / 4;
// const SPRITE_HEIGHT = 256 / 4;
// const SPEED = 2;

// const walkingAnimations = {
//   idle: { start: 0, frames: 1, fps: 1 },
//   bottom: { start: 1, frames: 4, fps: 6 },
//   left: { start: 4, frames: 8, fps: 6 },
//   right: { start: 8, frames: 12, fps: 6 },
//   top: { start: 13, frames: 16, fps: 6 },
// };

// type Action = "bottom" | "left" | "right" | "top" | "idle";

// const Page = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [action, setAction] = useState<Action>("idle");

//   useEffect(() => {
//     setPosition({
//       x: window.innerWidth / 2 - SPRITE_WIDTH / 2,
//       y: window.innerHeight / 2 - SPRITE_HEIGHT / 2,
//     });
//   }, []);

//   const keys = useRef<Record<string, boolean>>({});

//   const anim = walkingAnimations[action];

//   useEffect(() => {
//     const down = (e: KeyboardEvent) => {
//       keys.current[e.key] = true;

//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
//         e.preventDefault();
//       }
//     };

//     const up = (e: KeyboardEvent) => {
//       keys.current[e.key] = false;
//     };

//     window.addEventListener("keydown", down, { passive: false });
//     window.addEventListener("keyup", up);

//     let rafId: number;

//     const loop = () => {
//       let moving = false;

//       setPosition((prev) => {
//         let { x, y } = prev;
//         let moving = false;

//         if (keys.current["ArrowUp"]) {
//           y -= SPEED;
//           setAction("top");
//           moving = true;
//         }
//         if (keys.current["ArrowDown"]) {
//           y += SPEED;
//           setAction("bottom");
//           moving = true;
//         }
//         if (keys.current["ArrowLeft"]) {
//           x -= SPEED;
//           setAction("left");
//           moving = true;
//         }
//         if (keys.current["ArrowRight"]) {
//           x += SPEED;
//           setAction("right");
//           moving = true;
//         }

//         if (!moving) {
//           setAction("idle");
//         }

//         const maxX = window.innerWidth - SPRITE_WIDTH;
//         const maxY = window.innerHeight - SPRITE_HEIGHT;

//         x = Math.max(0, Math.min(x, maxX));
//         y = Math.max(0, Math.min(y, maxY));

//         return { x, y };
//       });

//       rafId = requestAnimationFrame(loop);
//     };

//     loop();

//     return () => {
//       window.removeEventListener("keydown", down);
//       window.removeEventListener("keyup", up);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   return (
//     <div className="bg-amber-100 h-screen  relative overflow-hidden">
//       {/* <img src={"./field-back2.png"} className="w-full -z-10 absolute h-full" /> */}
//       <div
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//         }}
//       >
//         <SpriteAnimator
//           sprite="/sheets2.png"
//           width={256 / 4}
//           height={256 / 4}
//           wrapAfter={4}
//           startFrame={anim.start}
//           frameCount={anim.frames}
//           fps={anim.fps}
//           shouldAnimate={action !== "idle"}
//           loop
//           style={{ imageRendering: "pixelated" }}
//           key={action}
//         />
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import { useEffect, useRef, useState } from "react";
import { SpriteAnimator, SpriteAnimatorProps } from "react-sprite-animator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/8bit/button";
import Link from "next/link";

/* =======================
   CONFIG
======================= */

const SPRITE_SIZE = 256 / 4;
const SPEED = 2;

const walkingAnimations = {
  idle: { start: 0, frames: 1, fps: 1 },
  bottom: { start: 1, frames: 4, fps: 6 },
  left: { start: 4, frames: 8, fps: 6 },
  right: { start: 8, frames: 12, fps: 6 },
  top: { start: 13, frames: 16, fps: 6 },
};

type Action = keyof typeof walkingAnimations;

/* =======================
   COMPONENT
======================= */

export default function Page() {
  const isMobile = useIsMobile();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [action, setAction] = useState<Action>("idle");

  const keys = useRef<Record<string, boolean>>({});

  /* Center sprite */
  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - SPRITE_SIZE / 2,
      y: window.innerHeight / 2 - SPRITE_SIZE / 2,
    });
  }, []);

  /* Keyboard controls (desktop only) */
  useEffect(() => {
    if (isMobile) return;

    const down = (e: KeyboardEvent) => {
      keys.current[e.key] = true;
      if (e.key.startsWith("Arrow")) e.preventDefault();
    };

    const up = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };

    window.addEventListener("keydown", down, { passive: false });
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [isMobile]);

  /* Game loop */
  useEffect(() => {
    let rafId: number;

    const loop = () => {
      setPosition((prev) => {
        let { x, y } = prev;
        let moving = false;

        if (keys.current["ArrowUp"] || keys.current["w"]) {
          y -= SPEED;
          setAction("top");
          moving = true;
        } else if (keys.current["ArrowDown"] || keys.current["s"]) {
          y += SPEED;
          setAction("bottom");
          moving = true;
        }

        if (keys.current["ArrowLeft"] || keys.current["a"]) {
          x -= SPEED;
          setAction("left");
          moving = true;
        } else if (keys.current["ArrowRight"] || keys.current["d"]) {
          x += SPEED;
          setAction("right");
          moving = true;
        }

        if (!moving) setAction("idle");

        return {
          x: Math.max(0, Math.min(x, window.innerWidth - SPRITE_SIZE)),
          y: Math.max(0, Math.min(y, window.innerHeight - SPRITE_SIZE)),
        };
      });

      rafId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  const anim = walkingAnimations[action];

  /* =======================
     RENDER
======================= */

  return (
    <div className="relative h-screen overflow-hidden  touch-none">
      <div className="absolute justify-center items-center">
        <Link href={"/#base"}>
          <Button className="">Back to Home</Button>
        </Link>
      </div>
      <img src={"./field-back2.png"} className="w-full -z-10 absolute h-full" />
      {/* Sprite */}
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <SpriteAnimator
          sprite="/sheets2.png"
          width={SPRITE_SIZE}
          height={SPRITE_SIZE}
          wrapAfter={4}
          startFrame={anim.start}
          frameCount={anim.frames}
          fps={anim.fps}
          shouldAnimate={action !== "idle"}
          loop
          key={action}
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {/* Mobile controls */}
      {isMobile && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <button
            onTouchStart={() => (keys.current["ArrowUp"] = true)}
            onTouchEnd={() => (keys.current["ArrowUp"] = false)}
            className="btn"
          >
            ▲
          </button>

          <div className="flex gap-2">
            <button
              onTouchStart={() => (keys.current["ArrowLeft"] = true)}
              onTouchEnd={() => (keys.current["ArrowLeft"] = false)}
              className="btn"
            >
              ◀
            </button>

            <button
              onTouchStart={() => (keys.current["ArrowDown"] = true)}
              onTouchEnd={() => (keys.current["ArrowDown"] = false)}
              className="btn"
            >
              ▼
            </button>

            <button
              onTouchStart={() => (keys.current["ArrowRight"] = true)}
              onTouchEnd={() => (keys.current["ArrowRight"] = false)}
              className="btn"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
