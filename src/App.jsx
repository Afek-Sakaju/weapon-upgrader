import React from "react";

import { Upgrade } from "@components";
import weaponData from "./weapon.json";

export default function App() {
  const { name, description, image, basicPrice, upgrades } = weaponData;

  return (
    <div className="app-container">
      <Upgrade
        name={name}
        description={description}
        image={image}
        basicPrice={basicPrice}
        upgrades={upgrades}
      />
    </div>
  );
}
