import mongoose from 'mongoose';

const uri: any = `mongodb+srv://ahadsts9901:ahsan123@cluster0.2ib77co.mongodb.net`

const run = async () => {
    try {
        await mongoose.connect(uri, {
            dbName: 'react-backend',
        });
        console.log("mongoose connected")
    } catch (err: any) {
        console.error(err);
    }
}

run().catch(console.dir);