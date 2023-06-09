import companyData from "./../../../models/companyData";
import connectDb from "./../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let p = new companyData({
      name: req.body.name,
      year: req.body.year,
    });
    await p.save();
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
