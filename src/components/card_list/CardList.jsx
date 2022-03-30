import Proptypes from "prop-types";

export const ImageMap = ({ data }) => {
  return data.map((el) => (
    <div className="relative mb-10 mr-10">
      <img
        src={el.img}
        alt={el.title}
        key={el.id}
        className="h-48 rounded overflow-hidden shadow-lg "
      />
      <div className="p-2 px-3 absolute bottom-0 left-0 w-full z-10">
        <span className={`font-black text-xl ${el.color}`}>{el.title}</span>
      </div>
    </div>
  ));
};

export const CardList = ({ data, customCard, card }) => {
  return (
    <div className="p-4 flex flex-wrap ">
      {customCard ? <div>el</div> : null}
      <ImageMap data={data} />
    </div>
  );
};

CardList.propTypes = {
  data: Proptypes.array,
  customCard: true,
};

CardList.defaultProps = {
  data: [],
  customCard: false,
  card: null,
};
