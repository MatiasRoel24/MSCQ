import { useState } from "react";
import Select from "../Select/Select";

const options = [
    { value: 1, text: "Verano " },
    { value: 2, text: "Invierno" }  
];

export default function InputClima() {
//cONTAINER
  const [option, setOption] = useState(1);

  function optionSelected(value) {
    setOption(value);
    // console.log(value);
  }

  
  return (
    <>
        {option===1 ? 
                <h1> </h1>
                : 
               <h2>  </h2> 
        }

        <Select
            options={options}
            onSelect={optionSelected} 
            defaultOption={option} 
        />
    </>
  );
}
