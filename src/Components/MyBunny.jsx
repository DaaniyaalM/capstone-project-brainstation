import { Sprite } from "@pixi/react";
import { useEffect, useReducer, useRef } from "react";
import { useTick } from "@pixi/react";
const reducer = (_, { data }) => data;
const MyBunny = ({ trigger }) => {
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useEffect(() => {
    console.log("hi", trigger);
    const i = (iter.current += 10);
    update({
      type: "update",
      data: {
        x: i + 100,
        // y: Math.sin(i / 1.5) * 100,
        // rotation: Math.sin(i) * Math.PI,
        // anchor: Math.sin(i / 2),
      },
    });
  }, [trigger]);
  return (
    <Sprite image="https://pixijs.io/pixi-react/img/bunny.png" {...motion} />
  );
};
export default MyBunny;
