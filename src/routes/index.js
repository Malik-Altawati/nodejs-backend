const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");

const userRoutes = require("./../domains/user");
const otpRoutes = require("./../domains/otp");

const subjectRoutes = require("./../domains/subject");
const gradeRoutes = require("./../domains/grade");
const studentRoutes = require("./../domains/student");

router.use("/user", userRoutes);
router.use("/otp", otpRoutes);

router.use("/subject", subjectRoutes);
router.use("/grade", gradeRoutes);
router.use("/student",auth, studentRoutes);



module.exports = router;