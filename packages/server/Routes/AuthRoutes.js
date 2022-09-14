const { register, login } = require("../Middlewares/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddleware");
const UserModel = require("../models/UserModel");
const ReportModel = require("../models/ReportModel");
const router = require("express").Router();

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

router.get('/getOneUser/:id', async (req, res) => {
    try {
        const data = await UserModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/getOneReport/:id', async (req, res) => {
    try {
        const data = await ReportModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/updateOneUser/:id', async (req, res) => {
    try {
        console.log("update user endpoint running...")
        const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
        console.log(req);
        res.json(data)
    }
    catch (error) {
        console.log("something broke im updateOneUser", error.message)
        res.status(500).json({ message: error.message })
    }
})

// New Routes... 

module.exports = router;
