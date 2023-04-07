const express = require("express");
const router = express.Router();

router.get('/',(req,res,next) => {
  res.status(200).json({
    message: "Handling Products Get Requests"
  });
});

// router.post('/',(req,res,next) => {
//   res.status(200).json({
//     message: "Handling Products Post Requests"
//   });
// });

router.get('/:id',(req,res,next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Handling Products Get Requests of "+id
  });
});

router.get('/categories',(req,res,next) => {
  res.status(200).json({
    message: "Handling Products Categories Get Requests"
  });
});

router.get('/categories/:name',(req,res,next) => {
  const name = req.params.name;
  res.status(200).json({
    message: "Handling Products Categories Get Requests of "+name
  });
});

module.exports = router;
