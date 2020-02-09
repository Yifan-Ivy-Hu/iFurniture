const INITIAL_STATE = {
  sections:[{
    title: 'kitchen',
    imageUrl: 'https://i.ibb.co/2n6HyGQ/kitchen.jpg',
    id: 1,
    linkUrl: 'kitchen'
  },
  {
    title: 'bathroom',
    imageUrl: 'https://i.ibb.co/JCpF4LT/bathroom.jpg',
    id: 2,
    linkUrl: ''
  },
  {
    title: 'dining room',
    imageUrl: 'https://i.ibb.co/Y3TfMcR/diningroom.jpg',
    id: 3,
    linkUrl: ''
  },
  {
    title: 'living room',
    imageUrl: 'https://i.ibb.co/THH4SVp/livingroom.jpg',
    size: 'large',
    id: 4,
    linkUrl: ''
  },
  {
    title: 'bedroom',
    imageUrl: 'https://i.ibb.co/NpVxYxc/bedroom.jpg',
    size: 'large',
    id: 5,
    linkUrl: ''
  }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;