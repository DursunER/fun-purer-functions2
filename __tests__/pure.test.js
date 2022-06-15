const {removePersonWithID, raiseSalaries, updateTasks, cloneObject} = require("../pure")

describe('Given a array of tutors and id of each tutor return new array with that person removed', () => {

    test("Return empty array when empty array is passed", () => {
        //Arrnge
        const tutors = [];
        const id = 0
        const expected = []

        //Act
        
        const result = removePersonWithID(tutors, id);

        //Assert
        expect(result).toEqual(expected)

    })

    test("Return no such id when the id passed is not the tutors array", () => {
        
        //Arrnge
        const tutors = [
            { id: 1, name: "foluso" },
            { id: 2, name: "suneet" },
            { id: 3, name: "paul r" },
            { id: 4, name: "liam" },
            { id: 5, name: "anat" },
            { id: 6, name: "sam" },
            { id: 7, name: "tom" },
            { id: 8, name: "alex" },
        ];
        const id = 100
        const expected = undefined

        //Act
        
        const result = removePersonWithID(tutors, id);

        //Assert
        expect(result).toEqual(expected)

    })

    test("Return updated array of tutors with given id refering to element removed.", () => {
        
        //Arrnge
        const tutors = [
            { id: 1, name: "foluso" },
            { id: 2, name: "suneet" },
            { id: 3, name: "paul r" },
            { id: 4, name: "liam" },
            { id: 5, name: "anat" },
            { id: 6, name: "sam" },
            { id: 7, name: "tom" },
            { id: 8, name: "alex" },
        ];
        const id = 4
        const expected =  [
            { id: 1, name: "foluso" },
            { id: 2, name: "suneet" },
            { id: 3, name: "paul r" },
            { id: 5, name: "anat" },
            { id: 6, name: "sam" },
            { id: 7, name: "tom" },
            { id: 8, name: "alex" },
        ];

        //Act
        
        const result = removePersonWithID(tutors, id);

        //Assert
        expect(result).toEqual(expected)

    }); 
});

    describe('raiseSalaries function returns updated salaries', () => {

        test("calculate new salaries according to percentage increase", () => {
            //Arrnge
            const empList =[
                { name: "Alice", salary: 3000 },
                { name: "Bob", salary: 2000 },
                { name: "Vel", salary: 4500 },
            ]
            const percIncrease = 10;

            const expected = [
            { name: 'Alice', salary: 3300 },
            { name: 'Bob', salary: 2200 }, 
            { name: 'Vel', salary: 4950 }
]
    
            //Act
            
            const result = raiseSalaries(empList, percIncrease)
    
            //Assert
            expect(result).toEqual(expected)
    
        })
       
})

describe('updateTasks function should return a new person object with a new tasks properties', () => {

    test("return tasks in from object including added ones", () => {
        
        //Arrnge
        const taskObj = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const newTasks = ["read books", "tidy room"];
        const expected = {
            name: 'Anat',
            tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
          }

        //Act
        const result = updateTasks(taskObj, newTasks)

        //Assert
        expect(result).toEqual(expected)

    })
   
}) 

describe('cloneObject target object with all the key-value pairs from the source object copied over', () => {

    test("function _should_ mutate the target object", () => {
        //Arrnge
        const targetObj = { a: 1, b: 2 };
        const sourceObj = { b: 4, c: 5 };
        const expected = { a: 1, b: 4, c: 5 }

        //Act
        const result = cloneObject(targetObj, sourceObj)

        //Assert
         expect(result).toEqual(expected)

    })
   
}) 

/*
describe('', () => {

    test("", () => {
        //Arrnge
        
        const expected = 

        //Act
        
        const result = 

        //Assert
        expect(result).toEqual(expected)

    })
   
}) */