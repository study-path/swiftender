import React, { useEffect, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';

import { getGeneralInfo } from '../../../services/project-service';

const styles = {
  generalInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding:'5px 10px',
    backgroundColor: '#686868',   
    alignItems: 'center',
    color: 'white'
  },
  icon:{
    backgroundColor: '#3399CC',
    padding: '5px',
    borderRadius: '2px'
  },
  generalInfoTable: {
    width:'100%',
    textAlign: 'left',
    border: '1px solid #ddd',
    borderSpacing: '0px'
  },   
  td:{    
    padding: '10px',
  }
};

const StyleTr = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const GeneralInformation = (props) => {
  const [generalInfo, setGeneralInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await getGeneralInfo();
      setGeneralInfo(result);
    };
    fetchData();
  }, []);

  return (
    <div style={props.style}>
      <div style={styles.generalInfo}>
        <div> General Information</div>
        <div style={styles.icon}><RiPencilFill /></div>
      </div>
      <table style={styles.generalInfoTable}>
        <tbody>
          <StyleTr>                     
            <td style={styles.td}>Project</td>          
            <td style={styles.td}>{generalInfo.name}</td>
            <td></td>  
             <td></td>  
          </StyleTr>
          <StyleTr>          
            <td style={styles.td}>Location </td> 
             <td style={styles.td}>{generalInfo.location}</td> 
             <td></td>  
             <td></td>         
          </StyleTr>
          <StyleTr>
            <td style={styles.td}>Closing Date</td>
            <td style={styles.td}>{generalInfo.closingDate}</td>         
            <td style={styles.td}>Closing Time</td> 
            <td style={styles.td}>{generalInfo.closingTime}</td>       
          </StyleTr>
          <StyleTr>
            <td style={styles.td}>Star Of Project</td>
            <td style={styles.td}>{generalInfo.startofProject}</td>          
            <td style={styles.td}>Substantial Completion </td> 
            <td style={styles.td}>{generalInfo.substantialCompletion}</td>       
          </StyleTr>
          <StyleTr>
            <td style={styles.td}>Final Completion </td>
            <td style={styles.td}>{generalInfo.finalCompletion}</td>          
            <td style={styles.td}>RFI Deadline</td> 
            <td style={styles.td}>{generalInfo.rFIDeadline}</td>       
          </StyleTr>
          <StyleTr>
            <td style={styles.td}>Size</td>
            <td style={styles.td}>{generalInfo.size}</td>        
            <td style={styles.td}>Site Visit</td> 
            <td style={styles.td}>{generalInfo.siteVisit}</td>       
          </StyleTr>
        </tbody>        
      </table>
    
      <div>
        
      </div>
    </div>
  )
};

export default GeneralInformation;
