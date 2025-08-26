import { connect } from "mongoose";

const connectDb = async () => {
  try {
    const { connection } = await connect(
      "mongodb+srv://nawaf:ZszMBhDCd4nA@cluster0.nmyldjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(connection.host);
  } catch (error) {
    console.log(error, "something went wrong");
    process.exit(1);
  }
};
export default connectDb;
// ZszMBhDCd4nA the password
