1. "3" is the printed value.
2. "150" is the printed value.
3. "150" is the printed value.
4. The function returns the array of discounted prices [50,100,150]. However it won't print the array to the console. 
5. This will cause an error, as *i* is locally defined. Outside the for loop i doesn't reference anything. 
6. This will cause an error, since discountedPrices is a locally defined variable within the for loop
7. "150" is printed
8. The function returns the array of discounted prices [50,100,150]. However it won't print the array to the console.
9. This will cause an error, as *i* is locally defined. Outside the for loop i doesn't reference anything. 
10. "3" is the printed value
11. The function still returns [50,100,150].
12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]
13. 
    1.  "32"
        1.  Concatenates 3 and 2
    2.  1
        1.  Subtracts 2 from 3
    3.  3
        1.  Adds nothing to the int 3
    4.  3null
        1.  Concatenates 3 and the string "null"
    5.  4
        1.  Adds 1 to 3 since true represents 1
    6.  0
        1.  adds nothing to 0, outputing 0.
    7.  3undefined
        1.  Concatenates string 3 with undefined
    8.  NaN
        1.  Tries to subtract undefined from 3, which results in a not a number value. 
14. 
    1.  True
        1.  Type conversion from stringtype 2 to int 2, and then it compares.
    2.  False
        1.  
    3.  True
        1.  Converts both to the same type (int) before comparison
    4.  False
        1.  Checks that the operands are the same type pre comparison, since they aren't the same False is returned. 
    5.  False
        1.  convert true to int returns 1, which isn't equal
    6.  True
        1.  Boolean(2) returns true, since it's typecast during the process the type is the same, and the value is the same, therefore the comparison is true. 
15. The "==" operator converts the type before comparison, whereas "===" compares the values as well as the data types of the values being compared. It'll return false if the types aren't the same even if the values are the same.