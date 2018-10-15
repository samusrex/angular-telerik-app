const Products = require('../models/product.model.js');
const url = require('url');

exports.create = (req,res)=>{

   
    let decodeQry =decodeURIComponent(req.query.models);
    let ProductJson = JSON.parse(decodeQry);

    console.log(ProductJson);
  
	
	if(!req.query) {
		
		return res.status(400).send({message:"Note can not be empty."});
	}
	
	const product = new Products
	({
    
    
    ProductName: ProductJson[0]['ProductName'],
    UnitPrice: ProductJson[0]['UnitPrice'],
    UnitsInStock: ProductJson[0]['UnitsInStock'],
    UnitsOnOrder: ProductJson[0]['UnitsOnOrder'],
    Discontinued: ProductJson[0]['Discontinued'],
   

	
    });
    
    console.log(product);
	
	product.save()
	.then(data=>{	res.send(data);		})
	.catch(err=>{	res.status(500).send({	message: err.message	});
    });
    
   
		
};
exports.findAll = (req,res)=>{
	
	Products.find({},function(err,notes){
		
		if(err){
			return res.status(404).send({message:"No Data"});
		}else{
            sorted = notes.sort((a,b)=>{
                
                    return a.ProductName < b.ProductName;
                
            });
            res.jsonp(sorted);
		}
	});
		
		
};
exports.findOne = (req,res)=>{
	
	console.log(req.params);
	
	Products.findById(req.params._id,function(err,notes){
		if(err){
			return res.status(404).send({message:"Note not found with id:"+req.params.productId});
		}else{
			res.send(notes);
		}
	});
	
};
exports.update = (req,res)=>{
	
    //console.log(req.body._id); 
    
    Products.findByIdAndUpdate(req.body._id, {

        ProductName: req.body.ProductName,
        SupplierID: req.body.SupplierID,
        CategoryID: req.body.CategoryID,
        QuantityPerUnit: req.body.QuantityPerUnit,
        UnitPrice: req.body.UnitPrice,
        UnitsInStock: req.body.UnitsInStock,
        UnitsOnOrder: req.body.UnitsOnOrder,
        ReorderLevel: req.body.ReorderLevel,
        Discontinued: req.body.Discontinued,
        Category: req.body.Category
    

    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
	
};
exports.delete = (req,res)=>{
	
	Products.findOneAndRemove(req.params.productId,function(err){
		if(err){
			return res.status(500).send({message:"Error while trying to exclude"});
		}else{
			return res.status(200).send({message:"Note was removed with success"});
		}
	});
	
	
	
};
