import Image from "next/image";
import styles from "./Avatar.module.css";
// import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

// type Props = {
//   name: string;
//   otherStyles?: string;
// };

export function Avatar({ name, otherStyles }: {src: string; name:string}) {
  return(
    <>
      <div
        className={`${styles.avatar} relative h-9 w-9 rounded-full ${otherStyles}`}
        data-tooltip={name}
      >
        <Image
          src={`https://liveblocks.io/avatars/avatar-${Math.floor(
            Math.random() * 30
          )}.png`}
          fill
          className={styles.avatar_picture}
          alt={name}
        />
      </div>
    </>
  );
}

export default Avatar;
