import React, { useEffect, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';

import { getDivisions } from '../../../services/project-service';


const styles = {
  divisions: {
    display: 'flex',  
    justifyContent: 'space-between',       
    padding:'5px 10px',
    backgroundColor: '#686868', 
    alignItems: 'center',
    color: 'white'
  },
  divisionTable: {
    width:'100%',
    textAlign: 'left',
    border: '1px solid #ddd',
     borderSpacing: '0px'
  },
  th:{    
    padding: '10px'
  },
  td:{    
    padding: '10px'
  },
  icon: {
    backgroundColor: '#3399CC',
    padding: '5px',
    borderRadius: '2px'
  }
}

const StyleTr = styled.tr`
  // padding: 10px;
  :nth-child(even){background-color: #f2f2f2;}
`
const Divisions = (props) => {
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getDivisions();
      setDivisions(result);
    };
    fetchData();
  }, []);

  const divisionRows = divisions.map( (division, index) => 
    <StyleTr key={index}>
      <td style={styles.td} >{division.title}</td>
      <td style={styles.td} >{division.total}</td>
    </StyleTr>
    
  );

  return (
    <div style={props.style}>
      <div style={styles.divisions}>        
            <div>Divisions </div>
            <div style={styles.icon}><RiPencilFill /></div>     
      </div>
      <div>
        <table style={styles.divisionTable}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Total</th>
            </tr>
          </thead>  
          <tbody>
            {divisionRows}
          </tbody> 
        </table>
      </div>        
      </div>   
  )
}

export default Divisions
