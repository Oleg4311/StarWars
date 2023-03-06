import React, { useState } from 'react'
import styles from "./DataList.module.css";

export default function DataList({filter, setFilter}) {
   const arOptions = ['All', 'blue', 'brown', 'yellow', 'red', 'blue-gray'];

   const options = arOptions.map((text, index) => {
     return <option placeholder='All' key={index} value={text}>{text}</option>;
  });
 

  return (
   <div className={styles.dataList}>
    Color eye: <select value={filter} onChange={(event) => event.target.value === 'All' ? setFilter('') : setFilter(event.target.value)}>
      {options}
   </select>
    </div>
  )
}
