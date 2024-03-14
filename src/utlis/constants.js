import sofa from '../assets/sofa.jpeg';
import lamp from '../assets/lamp.jpg'; 
import floor from '../assets/floor.jpg';
import sofa3 from '../assets/sofa3.jpg';
import colorcreation from '../assets/colorcreation.jpg'

export const getImageSource = (title) => {
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
       title: "Comfey Sofa",
       by: "by pocco",
       Description: "  comfortable cushioning,high durability and long term investment"
    },
    {
        title: "lamp",
        by: "by pocco",
        Description: "  comfortable cushioning,high durability and long term investment"
     },
     {
        title: "floor",
        by: "by pocco",
        Description: "  comfortable cushioning,high durability and long term investment"
     },
     {
        title: "Chair",
        by: "by pocco",
        Description: "  comfortable cushioning,high durability and long term investment"
     },
];