import sofa from '../assets/sofa.jpeg';
import lamp from '../assets/lamp.jpg';
import floor from '../assets/floor.jpg';
import sofa3 from '../assets/sofa3.jpg';
import colorcreation from '../assets/colorcreation.jpg';

export const getImageSource = title => {
  switch (title.toLowerCase()) {
    case 'comfey sofa':
      return sofa;
    case 'lamp':
      return lamp;
    case 'floor':
      return floor;
    case 'chair':
      return sofa3;
    case 'All':
      return colorcreation;
    default:
      return require('../assets/modernroom.jpg');
  }
};

export const SofaDetails = [
  {
    id: 1,
    Image: require('../assets/sofa.jpeg'),
    title: 'Comfey Sofa',
    by: 'by pocco',
    Description:
      '  comfortable cushioning,high durability and long term investment',
  },
  {
    id: 2,
    Image: require('../assets/lamp.jpg'),
    title: 'lamp',
    by: 'by pocco',
    Description:
      '  comfortable cushioning,high durability and long term investment',
  },
  {
    id: 3,
    Image: require('../assets/floor.jpg'),
    title: 'floor',
    by: 'by pocco',
    Description:
      '  comfortable cushioning,high durability and long term investment',
  },
  {
    id: 4,
    Image: require('../assets/sofa3.jpg'),
    title: 'Chair',
    by: 'by pocco',
    Description:
      '  comfortable cushioning,high durability and long term investment',
  },
];
const genderList = [
  {name: 'Male'},
  {name: 'Female'},
  {name: 'Pefer not to Identify'},
];
const relativesList = [
  {name: 'Parent'},
  {name: 'Sibling'},
  {name: 'Legal Gaudian'},
  {name: 'Friend'},
  {name: 'Spouse'},
  {name: 'Child'},
];
