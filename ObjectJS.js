<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object in JS</title>
</head>
<body>
    <script>
        //object {}- it is collection(pair) of keys(property) and its value.

        // create object - literal {} and new keyword

        // create object for student

        let student={
            id:101, 
            name:"Abhay",
            age:23, 
            isMarried:false,
            address:{
               streeNo:121,
               area:"Pratap Vihar",
               pincode:2323432,
               city:"GZB" 
            },
            education:["B.Tech","CSE", 18, 2025],
            getInfo:function(){
         return "my details are " + student.id + " and " + student.name;
            },
            examDone:null
        };
        // console.log(student);
        // console.log(typeof(student));

        //access object's properties/keys using dot notation
        console.log(student.address);
        console.log(student.education[2]);

        // find object's keys in object
        console.log('id' in student);
        //delete object's keys from object
        console.log(delete student.name);
        console.log(student);
        // object's length
        let StudentKeys=Object.keys(student);
        console.log(StudentKeys.length);
        // iterrate keys of object

        // using for----loop
        /* for(let i=0; i<StudentKeys.length;i++){
            console.log(student[StudentKeys[i]]);
        } */
        // for in loop
        for(let x in student){
            console.log(student[x]);
        }


        // create an object using new keyword

        let myInfo=new Object();
        myInfo.name="Vikas";
        myInfo.age=23;
        myInfo.isMarried=true;
        myInfo.city="Delhi";
        console.log(myInfo.name);
        // access object's propery using [] nototaion
        console.log(myInfo['age']);

       
    </script>
</body>
</html>