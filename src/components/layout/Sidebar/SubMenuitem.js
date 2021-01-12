import React from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: white;
  height: 25px;
  padding: 10px 0px 10px 35px;;
  cursor: pointer;
  :hover {
    background: #686868;
  },
`;
  
const styles = {
  icon:{
      marginRight: '10px'
  },
  activeNavLink: {
    background: '#686868',
    borderRightStyle: 'solid',
    borderRightColor: 'coral'  
  }
};

const SubMenuitem = (props) => {
  const routeMatch = useRouteMatch(`/${props.parentRoute}/:${props.routerParamName}`);

  const renderItems = () => {
    if (routeMatch) {
      return (
        <StyledNavLink to={`/${props.parentRoute}/${routeMatch.params[props.routerParamName]}/${props.data.route}`} activeStyle={styles.activeNavLink} exact >
          <props.data.icon style={styles.icon} />{props.data.title}
        </StyledNavLink>
      )
    }
  }
  
  return ( 
    <div>
      {renderItems()}
    </div>
  )
};

export default SubMenuitem;