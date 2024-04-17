import mongoose, { mongo } from "mongoose";

const EmployeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        departement: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const EmployeeeModel = mongoose.model("Employee", EmployeeSchema)