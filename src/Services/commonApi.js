import axios from "axios";

export const commonapi = async (httpmethod, url, reqbody, reqheader) => {
    const configreq = {
        method: httpmethod,
        url,
        data: reqbody,
        header: reqheader ? reqheader : {
            "Content-Type": "application/json"
        }
    }
    return await axios(configreq).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}