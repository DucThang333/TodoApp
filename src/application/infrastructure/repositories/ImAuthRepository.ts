import type { AuthRepository } from "@/application/domain/repositories/AuthRepository";
import type { Response } from "@/application/domain/models/response";
import type { InputLogin, OutputLogin, InputRegister, OutputRegister } from "@/application/domain/models/Authen";


export class ImAuthRepository implements AuthRepository{
    login(props: InputLogin): Promise<Response<OutputLogin>> {
        throw new Error("Method not implemented.");
    }
    register(props: InputRegister): Promise<Response<OutputRegister>> {
        throw new Error("Method not implemented.");
    }   
}