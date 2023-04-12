import React from "react";

const useMemo = () => {
  return (
    <div>
      useMemo est un hook React qui permet de stocker en cache une valeur <br/>
      calculée à partir de données en entrée, pour éviter de recalculer cette<br/>
      valeur à chaque rendu du composant parent.<br/>
    </div>
  );
};

export default useMemo;


// import React, { useState } from 'react';

// function Square(props) {
//   const [number, setNumber] = useState(0);
  
//   const square = () => {
//     return number * number;
//   }
  
//   return (
//     <div>
//       <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
//       <p>Le carré de {number} est {square()}.</p>
//     </div>
//   );
// }


// with useMemo

// import React, { useState, useMemo } from 'react';

// function Square(props) {
//   const [number, setNumber] = useState(0);
  
//   const square = useMemo(() => {
//     return number * number;
//   }, [number]);
  
//   return (
//     <div>
//       <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
//       <p>Le carré de {number} est {square}.</p>
//     </div>
//   );
// }
