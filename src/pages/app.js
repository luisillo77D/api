import { useEffect, useState } from "react";
import React from "react";
import { getWeapons } from "../api";
import Weapon from "../components/weaponCard.js";

const App = () => {
  const [weapons, setWeapons] = useState([]);
  const [categories] = useState(['Heavy', 'Sidearm', 'Rifle', 'SMG', 'Sniper', 'Shotgun']);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    //OBTENER LAS ARMAS DE LA API CON LA FUNCIÓN getWeapons Y ASYNC/AWAIT
    const fetchWeapons = async () => {
      const weapons = await getWeapons();
      setWeapons(weapons);
    };
    fetchWeapons();
  }, []);
  
  // Filtrar las armas según la categoría seleccionada
  const filteredWeapons = selectedCategory
    ? weapons.filter((weapon) => 
        weapon.category.includes(selectedCategory)
      )
    : weapons;

    console.log("armas:" + weapons.map((weapon) => weapon.displayName));
    console.log("filtradas:" + filteredWeapons.map((weapon) => weapon.displayName));

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold">Armas de Valorant</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todas</option> 
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <ul className="flex flex-wrap">
        {filteredWeapons.map((weapon) => (
          <Weapon key={weapon.uuid} weapon={weapon} />
        ))}
      </ul>
    </div>
  );
};

export default App;