const express = require("express");
const router = express.Router();
// both are same
// const {createStudent}=require("../controllers/studentController")
// router.post('/student', createStudent)

const blogfdController = require("../controller/blogfdController");
router.post("/blogfd", blogfdController.createblog);
router.get("/blogdata", blogfdController.getblogdata);
router.put("/blogdata", blogfdController.updatebloagdata);
router.delete("/blogdata/id", blogfdController.deletebloagdata);

module.exports = router;
