import { Request, Response } from "express";
import axios from 'axios'
import { eUser } from "../enums/users";


const auth = async () => {
    try { 
        const baseURL: string | null = process.env.PATHAUTH ?? null

        if(!baseURL)
            throw new Error("Url de  aurtorización no encontrada :c ")
       
        const response: any = await axios.post(baseURL, {
            "authuser": eUser.authUser
          }, );
        
         if(!response)
          throw new Error("Fallo llamado a servicio de autotización ")

        const { token } = response?.data
        return {
            mesagge: "SUCCESS", 
            token
        }

        
    } catch(error) {
        console.log("Error auth: ", error)
    }
}


export const profile = async(req: Request, res: Response) => {
    try {
        const baseURL: string | null = process.env.PATHURL ?? null

        if(!baseURL)
            throw new Error("Url de  profile no encontrada :c ")

        const authData: any  = await auth()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}` 
            }
        };
        const response = await axios.post( 
            baseURL,
            {},
            config
          )

        res.json({
            mesagge: "SUCCESS", 
            result: response.data
        })
         
    } catch (error) { 
        console.log("Error profile: ", error)
        throw error
    }
}