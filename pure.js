function removePersonWithID(tutors, id) {
    
    if (tutors.length === 0) {
        
        return tutors;
    } else if (id < 0 || id > tutors.length) {
        return undefined;
    } else {

        tutors.splice(id-1,1)
        return tutors;
    }
   
}


function raiseSalaries(empList, percIncrease){
    empList.map(employee => employee.salary += (employee.salary * percIncrease)/100)
  
    return empList
}   

function updateTasks(taskObj, newTasks){
    
    if (newTasks === []) {
        return taskObj
    } else {
        newTasks.forEach( task => taskObj.tasks.push(task))
    }
  
    return taskObj
}


function cloneObject(targetObj, sourceObj) {
    
    let newTargetObj = {};
    targetKeys = Object.keys(targetObj).concat(Object.keys(sourceObj));
    targetValues = Object.values(targetObj).concat(Object.values(sourceObj));
    
    for (let i=0; i< targetKeys.length; i++) {
       
        if (targetKeys[i] === targetKeys[i+1]){
            targetKeys.splice(i,1)
            targetValues.splice(i,1)
        }
    }
   
   for (let i=0; i<targetKeys.length; i++) {
     
    newTargetObj[targetKeys[i]] = targetValues[i];
  
   }
   
    return newTargetObj
}


module.exports = {removePersonWithID, raiseSalaries, updateTasks, cloneObject};
