/** Given a comma-separated string of names,
and you want to print how many times each name appeared
test cases
'' => false
'name' => 'name occured one time'
'name name' => 'name occured two times'
'name name names' => 'name occured two times names occured once
**/

function nameFrequency(nameString){
  if(!nameString) {
    return false;
  }
  const nameArray = nameString.split(',');
  const nameMap = new Map();
  for(i = 0; i < nameArray.length; i++){
    const name = nameArray[i].toLowerCase().trim();
    const count = nameMap.get(name) || 0;
    nameMap.set(name,  count + 1);
  }
  const resultArray = []
  for(const [item, frequency] of nameMap){
    resultArray.push(`${item} occured ${frequency} time${frequency > 1 ? 's': ''}`);
  }

  return resultArray;

}

console.log(nameFrequency("name"))
