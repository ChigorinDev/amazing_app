import React from 'react';
import { MdDeleteSweep } from "react-icons/md";



const AffairsList = ({ affairs, deleteAffair }) => {
//  const { affairs } = props 
  const affairsList = affairs.map(affair => { 
    return (
      <tr key={affair.id}>
        <td className="affair-text">{affair.affair}</td>
        <td>{affair.time}</td>
        <td>{affair.priority}</td>
        <td>
          <MdDeleteSweep className="delete-affair-btn" onClick={() => { deleteAffair(affair.id) }}/>
        </td>
      </tr>
    );
  });
  
  
  return (
    <tbody>
      {affairsList}
    </tbody>
  );

}

export default AffairsList;