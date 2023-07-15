//Function to check if an item is inside right dropzone column

const isDivInsideRightZone = (childDivId: any) => {
  const childDiv = document.getElementById(childDivId);
  const parentDiv = document.getElementById("rightDropZone");

  if (!childDiv || !parentDiv) {
    // if one of the elements is not found
    return false;
  }

  let currentParent = childDiv.parentNode;

  while (currentParent !== null) {
    if (currentParent === parentDiv) {
      // if parent div found
      return true;
    }
    currentParent = currentParent.parentNode;
  }

  // if parent div not found
  return false;
};
export default isDivInsideRightZone;
