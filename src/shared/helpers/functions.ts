//Get the relative position of an element with respect to the document
export const getCoordinate = (position: number | undefined): number => {
  return position ? position + window.scrollY : 0;
};
