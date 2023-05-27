export default function Card(props: { empty: boolean; value?: number }) {
  return (
    <div className="bg-base-100 rounded-xl shadow-lg w-[78px] hover:cursor-pointer hover:filter hover:brightness-[.75]">
      {!props.empty ? (
        <figure className="w-full h-full rounded-xl">
        <img
          src={`${
            props.value ? "./card/" + props.value + ".png" : "./vache.png"
          }`}
          alt="card"
          className="object-fill rounded-xl"
        />
      </figure>
      ) : (
        ""
      )}
    </div>
  );
}
