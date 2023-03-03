import "../App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

function List( {data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : <ul style={{listStyleType: "none"}}>
    {data.map((item) => (
    <li key={item.name}>{renderItem(item)}</li>
  ))}</ul>
}

function Render() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <List 
      data={tahoe_peaks} 
      enderEpmty={<p>This list is empty</p>}
      renderItem={
        item => <>{item.name} - {item.elevation} ft.</>
      } />
    </div>
  );
}

export default Render;