const express = require("express");
const router = express.Router();

const userRoutes = require("./../domains/user");
const subjectRoutes = require("./../domains/subject");
const gradeRoutes = require("./../domains/grade");

router.use("/user", userRoutes);
router.use("/subject", subjectRoutes);
router.use("/grade", gradeRoutes);



module.exports = router;