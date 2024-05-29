import { commonapi } from "./commonApi";
import { serverUrl } from "./serverUrl";


export const registerApi = async (reqbody) => {
  return await commonapi("POST", `${serverUrl}/register`, reqbody)
}

export const loginApi = async (reqbody) => {
  return await commonapi("POST", `${serverUrl}/login`, reqbody)
}

export const getgoogleloginApi = async (reqbody)=>{
  return await commonapi("POST",`${serverUrl}/google`,reqbody)
}

