const router = require("express").Router();
const userRouter = require("./user");
const checkoutRouter = require("./checkout");

router.use("/user",userRouter)
router.use("/checkout",checkoutRouter);

module.exports = router;