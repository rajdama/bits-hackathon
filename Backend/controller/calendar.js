const Check = require("../models/diet_check_schema.js");

exports.saveCheckbox = (req, res) => {
    let {userId, checkbox} = req.body;
    console.log(userId, checkbox)
    let _check = new Check({
        userId,
        dayCheck:checkbox
    })
    _check.save((error, data)=>{
        if(error){
            console.log(error);
            return res.status(400).json({message: error})
        }
        return res.status(201).json({message: "Added Successfully"})
    })
};

