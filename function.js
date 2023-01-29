 function sayhallo(){
    console.log("hallo there,sunny")
    console.log("hallo there,sunny")
 } 
 sayhallo()
 //value in function
 function sayhallo(name){
    console.log("hallo there,sunny")
    console.log("hallo there,",name)
 } 
 sayhallo("gupta")

 function namstey(){
    return "hallo india";
 }
 let greeting =namstey();
 console. log(greeting)
 console.log(namstey()) 

 //fuynction in varable 

 var getuserrole=function(name, role){
switch(role){
    case "admin":
        return ' ${name}is admin with all access';
        case "subadmin":
            return '${name}is subadmin with all access create and delete content';
            case "testpre":
                return  '${name}is testpre with all access create and delete content test';
                default:
                    return'${name}is trial user';
 }
}
 console.log (getuserrole("sunny", "admin"));