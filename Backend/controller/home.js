const Check = require("../models/diet_check_schema.js");
const Chart = require("../models/diet_chart_schema.js");

exports.datecheck = (req, res) => {
  console.log(req.body);
  Check.findOne({ date: req.body.date }).exec((error, data) => {
    let checked = true;
    let dayCheck = data.dayCheck;

    dayCheck.map((item) => {
      if (item.check == false) {
        checked = false;
      }
    });

    Chart.findOne({ day: req.body.day }).exec((error, dietPlan) => {
      if (!checked) {
        return res.status(200).json({ dayCheck, dietPlan, checked: false });
      }

      return res.status(200).json({ dietPlan, checked: true });
    });
  });
};

exports.postchecks = (req, res) => {
  const { day, dayChecks } = req.body;

  const _check = new Check({
    day,
    dayChecks,
  });

  _check.save((error, data) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error });
    }

    return res.status(201).json({ message: "Added Successfully" });
  });
};
