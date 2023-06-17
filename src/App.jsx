import React, { useState } from "react";

import { Upgrade } from "@layouts";
import weaponsData from "./weapons.json";

export default function App() {
  const weaponsList = Object.keys(weaponsData);
  const [currentWeapon, setCurrentWeapon] = useState(weaponsList[0]);
  const { name, description, image, basicPrice, upgrades } =
    weaponsData[currentWeapon] ?? {};

  return (
    <Upgrade
      name={name}
      description={description}
      image={image}
      basicPrice={basicPrice}
      upgradesList={upgrades}
      onWeaponChange={setCurrentWeapon}
      weaponsList={weaponsList}
    />
  );
}
