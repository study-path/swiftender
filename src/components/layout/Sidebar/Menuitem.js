import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SubMenuitem from './SubMenuitem';

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: white;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  :hover {
    background: #686868;
  }
`;

const styles = {  
  icon: {
    marginRight: '10px'
  },
  activeNavLink: {
    background: '#686868',
    borderRightStyle: 'solid',
    borderRightColor: 'coral'  
  }
};

const Menuitem = (props) => {
  function drawMenuSubItems() {
    return props.data.subMenu.map(item => 
      <SubMenuitem key={item.title} data={item} parentRoute={props.data.route} routerParamName={props.data.routerParamName} />);
  }

  return (
    <div>
      <StyledNavLink to={`/${props.data.route}`} activeStyle={styles.activeNavLink} exact >
        <props.data.icon style={styles.icon} />
          {props.data.title}
      </StyledNavLink>      
      {drawMenuSubItems()}
    </div>
  )
}

export default Menuitem
