import type { Response } from "@/application/domain/models/response";
import type { InputLogin, InputRegister, OutputLogin, OutputRegister } from "../models/Authen";

export interface AuthRepository{
    login(props:InputLogin): Promise<Response<OutputLogin>>;
    register(props:InputRegister): Promise<Response<OutputRegister>>; 
}