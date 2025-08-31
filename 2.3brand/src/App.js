import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const allBrands = [
  {id:"1",brandName:"puma"},
  {id:"2",brandName:"adidas"},
  {id:"3",brandName:"nike"},
  {id:"4",brandName:"fila"},
  {id:"5",brandName:"reebok"},
  {id:"6",brandName:"spike"}
];

function App() {
  const [search,setSearch] = useState();
  const [brands, setBrands] = useState(allBrands);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredBrands = e.target.value?.length > 0 
      ? brands.filter((brand) =>
          brand.brandName.includes(e.target.value.toLowerCase())
        )
      : allBrands;

    setBrands(filteredBrands);
  };
  return (
    <>
      <input onChange={onSearchChange} placeholder="search a brand"/>
      <ul>
        {
          brands.map((brand) => <li key={brand.id}>{brand.brandName}</li>) 
        }
      </ul>
    </>
  );
}

export default App;
