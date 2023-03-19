

import mongoose from 'mongoose'


export const connectDB = () => {
    mongoose.connect(process.env.CONNECTION)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log(err));
}

