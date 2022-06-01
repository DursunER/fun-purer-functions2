function removePersonWithID(tutors, id) {
    console.log({tutors})
    if (tutors.length === 0) {
        console.log({tutors})
        return tutors;
    } else if (id < 0 || id > tutors.length) {
        return undefined;
    } else {

        tutors.splice(id-1,1)
        return tutors;
    }
   
}





module.exports = removePersonWithID;
