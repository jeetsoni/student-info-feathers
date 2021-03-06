// student-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "student";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      image: { type: String },
      standardID: {
        type: mongooseClient.Schema.ObjectId,
        ref: "standard",
        required: true,
      },
      street: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: Number, required: true },
      isActive: { type: Boolean, default: true },
      feesSubmitted: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
