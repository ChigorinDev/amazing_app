import React  from 'react';
import { Table } from 'react-bootstrap';


const AffairsList = ({ affairs }) => {
 //const { affairs } = props 
  const affairsList = affairs.map(affair => { 
    return (
      <div key={affair.id}>
        <div>Нужно сделать: {affair.affair}</div>
        <div>Время: {affair.time}</div>
        <div>Приоритет: {affair.priority}</div>
      </div>
    );
  });
  
  
  return (
    <div>
      {affairsList}
    </div>
  );

}

export default AffairsList;