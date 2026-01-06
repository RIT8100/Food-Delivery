import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ritankarroy123:Rita1234@cluster0.egnhio6.mongodb.net/food-del').then(() => console.log("DATABASE Connected"));
}

