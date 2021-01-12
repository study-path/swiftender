import React, { useEffect, useState } from 'react';
import { BiWindow } from 'react-icons/bi';
import { BsGearFill } from 'react-icons/bs';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { getProjects } from './../../services/project-service';


const StyledTr = styled.tr`
  padding: 12px 0 12px 24px;  
  border-bottom: 1px solid #ddd;
  padding: 8px;
  :hover {
    background-color:#f5f5f5;
  },
`;

const styles = {
  bottom:{
      display:'flex',
      justifyContent: 'space-between',
      padding: '0 40px',
      borderBottom: '1px solid #000'
  },
  header:{
    margin: '10px',  
    display: 'flex',
    justifyContent: 'space-between',   
    padding: '0 10px'
  },
  calendar:{
    width: '85%',
    textAlign: 'center',   
    fontSize: '12px',
    borderRight: '1px solid #000'    
   },
   fullscreen:{
    textAlign: 'center',   
    fontSize: '12px',
   },
  table:{
    width:'100%',
    borderCollapse: 'collapse'
  },
  th:{ 
    padding: '12px 0 12px 0',   
    textAlign: 'left', 
    borderBottom: '1px solid #ddd',
    fontWeight: '500'  
  },
  td:{
    padding: '17px'
  }, 
  input:{
    margin: '0 10px',
    padding: '10px 30px 10px 5px',
    width:'300px'
  },
  label:{
    fontSize: '14px',
  },
  buttonProject:{
    padding: '10px',
    marginRight: '5px',
    backgroundColor: '#0AA300',
    color: 'white',
    borderRadius: '5px',   
    border: 'none',
    width: '120px'
  },
  buttonGear:{
    padding: '10px',  
    borderRadius: '5px',   
    border: 'none'
  },
  buttonViewProject:{
    padding: '10px',
    marginRight: '5px',
    backgroundColor: '#479AC6',
    color: 'white',
    borderRadius: '5px',   
    border: 'none',
    width: '120px',
    textDecoration: 'none'
  },
}

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getProjects();
      setProjects(result);
    };
    fetchData();
  }, []);

  let projectRows = projects.map((project) => (
    <StyledTr key={project.projectId}>
      <td style={styles.td}><NavLink to={`projects/${project.projectId}/details`} style={styles.buttonViewProject}>View Project</NavLink> </td>
      <td>{project.projectName}</td>
      <td>{project.location}</td>
      <td>{project.closingDate}</td>
      <td>{project.closingTime}</td>
      <td>{project.lastEdited}</td>
      <td>{project.owner}</td>       
    </StyledTr>
  ));

  return (
    <div>
      <div style={styles.bottom}>
        <div style={styles.calendar}>
          <FaRegCalendarAlt /> Show calendar 
        </div>
        <div style={styles.fullscreen}> <BiWindow /> Full screen </div>
      </div>
      <div style={styles.header}>
        <div >
          <FaSearch />
          <input 
            style={styles.input}
            type="text" 
            placeholder="Enter search terms here"></input>     
          <input type="checkbox"></input>
          <label  style={styles.label}>Show Closed Projects</label>
        </div> 
        <div>
          <button  style={styles.buttonProject}>&#10010; New Project</button>
          <button  style={styles.buttonGear}><BsGearFill /></button>
        </div> 
      </div>
      <div>     
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}></th>
              <th style={styles.th}>Project Name</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Closing Date</th>
              <th style={styles.th}>Closing Time</th>
              <th style={styles.th}>Last Edited</th>
              <th style={styles.th}>Owner</th>  
            </tr> 
          </thead>
          <tbody>
            {projectRows}
          </tbody>
        </table>        
      </div>
  </div>
  )
};

export default Projects;
