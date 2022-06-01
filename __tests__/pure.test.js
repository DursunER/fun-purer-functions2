const removePersonWithID = require("../pure")

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

       
})