let shape=
  {1:"circle",
  2:"semi-circle",
  3:"triangle",
  4:"rectangle",
  5:"pentagon",
  6:"hexagon",
  7:"heptagon",
  8:"octagon",
  9:"nonagon",
  10:"decagon",
};

function numberOfSides(num){
  console.log(`your shape is ${shape[num]}`);
}
numberOfSides(5);