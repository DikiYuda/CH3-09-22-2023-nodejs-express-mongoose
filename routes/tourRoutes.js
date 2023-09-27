const express = require("express")
const toursController = require("../controllers/toursController")

const router = express.Router()

// router.param("id", toursController.checkId)

router
  .route("/")
  .get(toursController.getAllToursModel)
  .post(
    toursController.checkBody,
    toursController.createTour
  )

router
  .route("/model")
  .post(toursController.createTourModel)

router
  .route("/:id")
  .get(toursController.getTourByIdModel)
  .patch(toursController.editTourModel)
  .delete(toursController.removeTourModel)

module.exports = router
