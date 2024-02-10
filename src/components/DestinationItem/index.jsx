import "./index.css";

function DestinationItem(props) {
  let { destinationsDetails } = props;
  let { imgUrl, name } = destinationsDetails;
  return (
    <>
      <li className="card">
        <img src={imgUrl} />
        <p>{name}</p>
      </li>
    </>
  );
}

export default DestinationItem;
