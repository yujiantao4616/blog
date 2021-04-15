import React from 'react'

/**
 *
 * @param params params:{list:Array<{title:String,description}>}
 */
function Menu({ list }) {
  return (
    <div className='menu-container'>
      {list.map((itemProps,index) => {
        return <MenuItem {...itemProps} key={index}></MenuItem>
      })}
    </div>
  )
}

Menu.prototype = {
  list: Array,
}

function MenuItem({ title, description }) {
  return (
    <div className='menu-item'>
      <div className='menu-item-title' href="#">{title}</div>
      <div className='menu-item-description' title={description}>
        {description}
      </div>
    </div>
  )
}
Menu.MenuItem = MenuItem
export default Menu
