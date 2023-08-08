const blogfdModel = require("../model/blogfdModel");
const { param } = require("../routes/routes");
var ObjectId = require("mongodb").ObjectId;
const isValid = function (value) {
  if (typeof value === "undefined" || typeof value === null) {
    return false;
  }
  if (typeof value.trim().length == 0) {
    return false;
  }
  if (typeof value === "string" && value.trim().length > 0) {
    return true;
  }
};

const isValidName = /^[a-zA-Z ]*$/;

const createblog = async (req, res) => {
  try {
    let data = req.body.bdata;
    const { title, content, author } = data;

    if (!isValid(title)) {
      return res.status(400).send({ status: false, msg: "title is required" });
    }

    if (!isValidName.test(title)) {
      return res
        .status(400)
        .send({ status: false, msg: "Plz provide a valid title name" });
    }

    let uniquetitle = await blogfdModel.findOne({ title });
    if (uniquetitle) {
      return res
        .status(400)
        .send({ status: false, msg: "same title Already Exist" });
    }

    let savedData = await blogfdModel.create(data);
    return res
      .status(201)
      .send({ status: true, msg: "Sucess", data: savedData });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error });
  }
};

const getblogdata = async (req, res) => {
  let blogdata = await blogfdModel.find({});
  return res.status(201).send(blogdata);
};

const deletebloagdata = async (req, res) => {
  let id = param.body.e;
  console.log(id);
  await blogfdModel
    .deleteOne({ id })
    .then(() => {
      res.send({ msg: "success" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updatebloagdata = async (req, res) => {
  console.log("inised update");
  let id = req.body.id;
  let blogdata = await blogfdModel
    .find({ id })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(result);
    });
};

module.exports = { createblog, getblogdata, updatebloagdata, deletebloagdata };
