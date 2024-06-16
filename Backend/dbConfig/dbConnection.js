import mongoose from "mongoose";

const dbConnection = async () => {
            try{
                        const connection = await mongoose.connect(process.env.MONGO_URL, {
                                    useNewUrlParser: true,
                                    useUnifiedTopology: true,
                        });

                        console.log("DB Connected Sucessfully!");

            }catch(error){
                        console.log("DB ERROR: " + error);
            }
};

export default dbConnection;