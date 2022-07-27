const router = require("express").Router();
const {isAuthenticated} = require("../controllers/auth");
const jobController = require("../controllers/job");

router.get("/alljobs",isAuthenticated, jobController.getAllJobs); // get the list of all jobs

router.get("/job/:id",isAuthenticated, jobController.getJobById); // get job by job id

router.post("/job",isAuthenticated, jobController.createJob); // create job

router.put("/job/:id",isAuthenticated, jobController.updateJob); // update job

router.delete("/job/:id",isAuthenticated, jobController.deleteJob); // delete a job by job id

router.get("/job/user/:id",isAuthenticated, jobController.getJobByUserId); // get job by user id

router.get("/job/user/:id/:jobId",isAuthenticated, jobController.getJobByUserIdAndJobId); // get job by user id and job id

module.exports = router;
