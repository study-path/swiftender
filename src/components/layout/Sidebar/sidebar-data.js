import {
  FaChartArea,
  FaChartBar,
  FaEnvelope,
  FaFile,
  FaFolderOpen,
  FaList,
  FaUserAlt,
  FaUserCircle,
  FaUsers,
} from 'react-icons/fa';

import Details from '../../Projects/details/Details';
import InviteList from '../../Projects/InviteList';
import Projects from '../../Projects/Projects';

export const sideBarMenuData = {
    projects: {
      title: "Projects",
      route: "projects",
      routerParamName: "projectId",
      component: Projects,
      icon: FaFolderOpen,
      subMenu: [
        {
          title: "Details",
          route: "details",
          component: Details,
          icon: FaFile,
        },
        {
          title: "Invite List",
          route: "invite-list",
          component: InviteList,
          icon: FaEnvelope,
        },
        {
          title: "Analysis",
          route: "analysis",
          icon: FaChartArea,
        },
        {
          title: "Email reporting",
          route: "email-reporting",
          icon: FaChartBar,
        },
      ]
    },
    contacts: {
      title: "Contacts",
      route: "contacts",
      icon: FaUserAlt,
      subMenu: [
        {
          title: "Details",
          route: "contacts/:contactId/details",
          icon: FaUserAlt,
        },
        {
          title: "Invite List",
          route: "invite-list",
          icon: FaUserAlt,
        },
      ]
    },
    groups: {
      title: "Groups",
      route: "groups",
      icon: FaUsers,
      subMenu: [ ]
    },
    divisions: {
      title: "Divisions",
      route: "divisions",
      icon: FaList,
      subMenu: [ ]
    },
    account: {
      title: "Account",
      route: "account",
      icon: FaUserCircle,
      subMenu: [ ]
    },
  };

  export default sideBarMenuData;