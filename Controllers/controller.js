//here put controlles, you can create other js files for more controlles, remember separate responsabilities

const { model } = require("mongoose");
const { find } = require("../models/models");
const driver = require("../models/models");

module.exports.findDriver = (req, res) => {
  driver.find({}, (error, drivers) => {
    if (error) {
      return res.status(500).json({
        message: "Error in query",
      });
    }
res.status(200);
    return res.send({ drivers: drivers });
  });
};

 module.exports.create = (req, res) => {
  const data = req.body;
 
  driver.create(data, (error, driver) => {

    if(error){
      return res.status(500).json({
        message: "Error in query"+error,
      });
      
    }
    res.status(200);
    res.send({ data: driver });
  })


} 


module.exports.search = (req, res) => {
  const { id } = req.params
  
  driver.find({
    "status": id
  }, (error, drivers) => {
    if (error) {
      return res.status(500).json({
        message: "Error in query"+ error,
      });
    }
    res.status(200);
    return res.send({ drivers: drivers[0] });
  });
};







module.exports.updateSingle = (req, res) => {
  const { id } = req.params
  const body = req.body
 
  driver.updateOne({document_Id: id },body,(err, docs) => {
if(err){
  return res.status(500).json({
    message: "Error in query"+ err,
  });
}
          res.send({items: docs})
      })
}



module.exports.deleteSingle = (req, res) => {
    const { id } = req.params
    
    driver.deleteOne(
        {document_Id: id },(err, docs) => {
          if(err){
            return res.status(500).json({
              message: "Error in query"+ err,
            });
          }
            res.send({
                items: docs
            })

        })
}

