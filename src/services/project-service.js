export async function getProjects(){
  return [{
    projectId:1,
    projectName: "Simple Project",
    location: "123 King St W",
    closingDate:"Tuesday, Jul 30, 2019",
    closingTime:'4pm',
    lastEdited:"25/7/19, 2:21PM",
    owner:'Shayan Nahrvar'
  },
  {
    projectId:2,
    projectName: "Bayfield Water Treatment Plamt",
    location: "123 Main Street",
    closingDate:"Wednesday, Jul 31, 2019",
    closingTime:'3pm',
    lastEdited:"25/7/19, 9:21PM",
    owner:'Richard FitzGerald'
  },
  {
    projectId:3,
    projectName: "Guelf Seniors Community Center",
    location: "123 Eramosa Street",
    closingDate:"Tuesday, Jul 30, 2019",
    closingTime:'4pm',
    lastEdited:"25/7/19, 2:21PM",
    owner:'Matt Eason'
  },
  {
    projectId:4,
    projectName: "Daycare",
    location: "45 Heakthfield Drive",
    closingDate:"Wednesday, Jul 24, 2019",
    closingTime:'3pm',
    lastEdited:"25/7/19, 9:21PM",
    owner:'Richard FitzGerald'
  }];
};

export async function getGeneralInfo(id){
  return {    
    name:'Sample Project',
    location:'123 King St W, Hamilton',
    closingDate:'Tuesday, July 30, 2019',
    closingTime:'4pm',
    startofProject: '-',
    substantialCompletion:'-',
    finalCompletion:'-',
    rFIDeadline:'-',
    size:'-',
    siteVisit:'-',
    unionRequirement:'-',
    revision:'0'
  }; 
};

export async function getDivisions(id){
  return [
    {
      title:'06 22 00 - Millwork',
      total:'12'
    },
    {
      title:'09 55 00 - Ceilings',
      total:'7'
    },
    {
      title:'09 60 00 - Flooring',
      total:'11'
    },
    {
      title:'09 60 00 - Flooring',
      total:'11'
    }
  ];
};
  