import {MouseEventHandler} from "react";

interface CardProps {
  head?: boolean,
  value?: number,
  onClick?: MouseEventHandler<HTMLDivElement>
}

export default function Card({head, value, onClick}: CardProps) {
  return (
    <div
      className={"bg-base-100 rounded-lg shadow-lg w-[60px] md:w-[70px] lg:w-[78px] hover:filter hover:brightness-[.95] hover:shadow-none select-none" + (onClick && " hover:cursor-pointer")}
      onClick={onClick}>
      {(head || value) && (
        <figure className="w-full h-full rounded-lg border">
          <img
            src={`./${value ? "card/" + value : "img/vache"}.png`}
            alt="card"
            className="object-fill rounded-lg"
          />
        </figure>
      )}
    </div>
  );
}
