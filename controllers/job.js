exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({ status: "Ok", jobs });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json({ status: "Ok", job });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.json({ status: "Ok", job });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ status: "Ok", job });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    res.json({ status: "Ok", job });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};

exports.getJobByUserId = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.params.id });
    res.json({ status: "Ok", jobs });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};

exports.getJobByUserIdAndJobId = async (req, res) => {
  try {
    const job = await Job.find({ user: req.params.id, _id: req.params.jobId });
    res.json({ status: "Ok", job });
  } catch (error) {
    res.json({ message: "Some Error Occured", error: error.message });
  }
};
