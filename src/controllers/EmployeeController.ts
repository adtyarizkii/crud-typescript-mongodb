import express, { request } from 'express';
import { EmployeeeModel } from '../db/employee';

class EmployeeController {

    getAllEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const employees = await EmployeeeModel.find()
            return res.status(200).json({data: employees})
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).json({err: error})
        }
    }

    getEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.params;
            const employee = await EmployeeeModel.findById(id)
            return res.status(200).json({data: employee})
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).json({err: error})
        }
    }

    addEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { name, email, phone, departement } = req.body;
            const employee = new EmployeeeModel({
                name,
                email,
                phone,
                departement
            })
            await employee.save()

            return res.status(201).json({message: `Employee Added!`, data: employee})
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).json({err: error})
        }
    }

    updateEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params
            const { name, email, phone, departement } = req.body;

            const employee = await EmployeeeModel.findById(id)
            if (employee) {
                employee.name = name
                employee.email = email
                employee.phone = phone
                employee.departement = departement
                await employee.save()
                return res.status(200).json({message: `Employee Updated!`, data: employee})
            }
            return res.sendStatus(400)
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).json({err: error})
        }
    }

    deleteEmployee = async (req: express.Request, res:express.Response) => {
        try {
            const {id} = req.params
            await EmployeeeModel.findByIdAndDelete({_id: id})
            return res.status(200).json({message: `Employee Deleted!`})
        } catch (error) {
            console.log(error);
            return res.sendStatus(400).json({err: error})
        }
    }



}

export default new EmployeeController()