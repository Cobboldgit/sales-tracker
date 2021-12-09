function Sales(props) {
  return (
    <div>
      <p>{props.sales.date}</p>
      <p>{props.sales.customer}</p>
      <p>{props.sales.source}</p>
      <p>{props.sales.addItem}</p>
    </div>
  );
}

export default Sales;
