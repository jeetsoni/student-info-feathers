// Initializes the `student` service on path `/student`
const { Student } = require("./student.class");
const createModel = require("../../models/student.model");
const hooks = require("./student.hooks");
const path = require("path");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: async function (req, file, cb) {
    console.log(file);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use(
    "/student",
    upload.single("image"),
    (req, res, next) => {
      console.log(req.file);
      const { method } = req;
      if (method === "POST") {
        req.body.image = req.file.path.slice(7);
      }
      next();
    },
    new Student(options, app)
  );

  // Get our initialized service so that we can register hooks
  const service = app.service("student");

  service.hooks(hooks);
};
