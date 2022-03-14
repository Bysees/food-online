import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBarButton = ({ className, title, icon, onClick = null }) => {
  return (
    <div className={className}>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        <div>{title}</div>
      </button>
    </div>
  )
}

export default NavBarButton