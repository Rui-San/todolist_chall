import mongoose from "mongoose";

export class Database {

	public static async connect(): Promise<void> {

		const uri = process.env.MONGO_URI;
		
		if (!uri) // validate if the db connection is defined in env 
			throw new Error("MONGO_URI not defined. Please set it in the .env file.");

		try{ // attempt to connect to the db via mongoose.connect()
			await mongoose.connect(uri);
			console.log("Connected to MongoDB successfully.");	
		}catch(err){
			console.error("Failed to connect to MongoDB:", err);
			process.exit(1);
		}
	}

}