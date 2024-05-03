 interface User{
        email:string,
        name:string
    }
    
interface Admin{
        isAdmin:boolean,
        code?:number
    }
    
const isUser: User | Admin = {
        email:"demo@gmail.com",
        name:"ankush",
        isAdmin:false
    }
    
console.log(isUser);                   

// {email: 'demo@gmail.com', name: 'ankush', isAdmin: false}
    