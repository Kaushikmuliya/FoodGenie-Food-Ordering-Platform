const express = require("express");
const router = express.Router();
const aiController = require("../controllers/ai.controller");


router.get("/test", (req, res) => {
  res.send("AI route working");
});

router.post("/generate-food-ai", aiController.generateFoodAI);

router.post("/generate-food-ai/:foodId", aiController.generateAndSaveFoodAI);

router.put("/admin/restaurants/:id/analyze", aiController.analyzeRestaurantReviews)

router.put(
  "/stores/:id/review",
  aiController.addReview
);



module.exports = router;