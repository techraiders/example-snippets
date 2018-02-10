function TodoCrtl() {
  var p1 = {fname: 'Navneet'};
  var p2 = {lname: 'prakash'};
  
  console.clear();
  console.log(p1, p2);
  
  var p3 = angular.extend(p1, p2);
  console.log(p3);
//   p3 = {fname: 'Navneet', lname: 'prakash'};
}