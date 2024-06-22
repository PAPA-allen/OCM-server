import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../Utils/ErrorHandler";
import { generateLast12Monthsdata } from "../Utils/analytics.generator";
import userModel from "../models/user.models";
import CourseModel from "../models/course.model";
import OrderModel from "../models/orderModel";

// get user analytics --only admin

export const getUserAnalytics = catchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const users = await generateLast12Monthsdata(userModel);

        res.status(200).json({
            success:true,
            users,
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message, 500))
    }
})

// get course analytics --only admin
export const getCoursesAnalytics = catchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const courses = await generateLast12Monthsdata(CourseModel);

        res.status(200).json({
            success:true,
            courses,
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message, 500))
    }
})


// get order analytics --only admin
export const getOrderAnalytics = catchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const orders = await generateLast12Monthsdata(OrderModel);

        res.status(200).json({
            success:true,
            orders,
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message, 500))
    }
})


