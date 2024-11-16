import api from "@/application/infrastructure/api/index"
import {AUTHEN} from "./constant"


export function authen(){
    return api.post(AUTHEN)
}