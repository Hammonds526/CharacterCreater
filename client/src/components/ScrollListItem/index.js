import React, { useState, useEffect } from "react";
import "./style.css";
import CheckBox from "../CheckBox";

function ScrollListItem({
  item,
  i,
  itemType,
  newCharacter,
  setActive,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxName = item.name;

  useEffect(() => {
    // Check if spell is in character state. If so, pass isChecked to the checkbox.
    if (itemType === "spell") {
      setIsChecked(newCharacter.spells.includes(item.name));
    } else {
      setIsChecked(newCharacter.feats.includes(item.name));
    }
  });

  return (
    <div key={i} id="list" className="d-flex justify-content-between">
      <text
        className="text-bisque"
        onClick={() => {
          setActive(item);
        }}
      >
        {item.name}
      </text>
      <CheckBox
        checkboxStyle={{ height: "30px", marginRight: "10px" }}
        spellName={item.name}
        checked={isChecked}
        {...props}
        checkBoxName={checkBoxName}
      />
    </div>
  );
}

export default ScrollListItem;
