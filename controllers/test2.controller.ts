import { Request, Response } from "express";
import usersModel from "../models/users.model";
const moment = require('moment')


export const postUser = async (req: Request, res: Response) => {
    try { 

        const { body } = req;
       
        const newUser: any = new usersModel({
            name: body?.name,
            city: body?.city, 
            birtday: moment(body?.birtday).toISOString(),
            age: moment().diff(moment(body?.birtday, "DD MMM YYYY"), 'years')
        })

       const creteUser = await newUser.save()

       res.json({
            mesagge: "SUCCESS", 
            result: creteUser
        })
     
    } catch(error) {
        console.log("Error auth: ", error)
    }
}


export const getUsers = async (req: Request, res: Response) => {
    try {
        
        const users: any = await usersModel.find()

        res.json({
            mesagge: "SUCCESS", 
            result: users
        })

    } catch (error) {
        console.log("Error getUsers: ", error)
        res.status(400).json({
            ok: false,
            error
        })
    }
} 