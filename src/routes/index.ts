import express from 'express'
import EmployeeController from '../controllers/EmployeeController'

const router = express.Router()

router.get("/employee", EmployeeController.getAllEmployee)
router.get("/employee/:id", EmployeeController.getEmployee)
router.post("/add-employee", EmployeeController.addEmployee)
router.patch("/employee/:id", EmployeeController.updateEmployee)
router.delete("/employee/:id", EmployeeController.deleteEmployee)

export default router;