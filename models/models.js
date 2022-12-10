// here put the models definition

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const driverSchema = new Schema(
  {
    name: String,
    document_Id: {
      type: Number,
      unique: true,
      required: true
    },
    movil: Number,
    email: String,
    password: String,
    location:
    {
      country: String,
      city: String,
    },

    license_Id: Number,
    car: {
      color: String,
      model: String,
      car_Id: String,
      traffic_Lincense: String

    },
    status: Boolean,
    score: Number

  },
  { versionKey: false }
);
module.exports = mongoose.model("driver", driverSchema);
