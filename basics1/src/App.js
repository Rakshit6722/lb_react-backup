import logo from './logo.svg';
import './App.css';
// import Item from './components/Item';
import Products from './components/Products'


function App() {

  let products = [
    {
      id:'p1',
      title:"abc",
      amount:123,
      date: new Date(12,1,2024)
    },
    {
      id:'p2',
      title:"def",
      amount:122313,
      date: new Date(12,1,2024)
    },
    {
      id:'p3',
      title:"ghi",
      amount:1124214,
      date: new Date(12,1,2024)
    }
  ]

  return (
    <>
      <Products item={products}/>
    </>
  );
}

export default App;
