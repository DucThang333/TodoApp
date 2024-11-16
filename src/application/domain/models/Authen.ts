import type { User } from "./User";

export type InputLogin = {
    email:string,
    password:string,
}

export type OutputLogin = {
    user:User,
    token:string    
}

export type InputRegister = {

}

export type OutputRegister = {
    
}