import "dotenv/config";
import { Response } from "express";
import { IUser } from "../models/user.models";
import { redis } from "./redis";

interface ITokenOptions {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure: boolean;
}

export const sendToken = (user: IUser, statusCode: number) => {
  
};
