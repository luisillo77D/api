import React from "react";

export default function WeaponCard({ weapon }) {
    return (
        <li key={weapon.uuid} className="bg-white shadow-md rounded-lg p-4 m-4">
          <h3 className="text-3xl font-bold mb-2">{weapon.displayName}</h3>
          <img
            src={weapon.displayIcon}
            className="w-full h-auto rounded-md mb-2" // Ajusta el tamaño de la imagen
            alt={weapon.displayName}
          />
          <p className="text-lg">Coste: {weapon.shopData ? weapon.shopData.cost : 0}</p>
          <p className="text-sm text-gray-600">
            Categoría: {weapon.category.split(":").slice(-1)[0]}
          </p>
        </li> 
    )
}
