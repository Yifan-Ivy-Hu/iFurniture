import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'
class Directory extends React.Component {
  constructor(){
    super();
    this.state={
      sections:[{
        title: 'kitchen',
        imageUrl: 'https://i.ibb.co/2n6HyGQ/kitchen.jpg',
        id: 1
      },
      {
        title: 'bathroom',
        imageUrl: 'https://i.ibb.co/JCpF4LT/bathroom.jpg',
        id: 2
      },
      {
        title: 'dining room',
        imageUrl: 'https://i.ibb.co/Y3TfMcR/diningroom.jpg',
        id: 3
      },
      {
        title: 'living room',
        imageUrl: 'https://i.ibb.co/THH4SVp/livingroom.jpg',
        size: 'large',
        id: 4
      },
      {
        title: 'bedroom',
        imageUrl: 'https://i.ibb.co/NpVxYxc/bedroom.jpg',
        size: 'large',
        id: 5
      }]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          ))
        }
      </div>
    )
  }
}

export default Directory;