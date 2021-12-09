function Items(props) {
  const item = props.item;

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.category}</p>
      {/* <p>{item.addPhoto}</p> */}
      <p>{item.quantity}</p>
    </div>
  );
}

export default Items;
