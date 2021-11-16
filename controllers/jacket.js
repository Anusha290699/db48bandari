var jacket = require('../models/jacket');

// List of all jacket
exports.jacket_list = async function(req, res) {
    try{
        thejacket = await jacket.find();
        res.send(thejacket);
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`); 
    }
};
//VIEWS 
// Handle a show all view 
exports.jacket_view_all_Page = async function(req, res) { 
    try{ 
        thejacket = await jacket.find(); 
        res.render('jacket', { title: 'jacket Search Results', results: thejacket }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific jacket.
// for a specific jacket. 
exports.jacket_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jacket.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle jacket create on POST.
exports.jacket_create_post = async function (req, res) {
    console.log(req.body)
    let document = new jacket();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"jacket_name":"Puffed jacket", "brand": "Chapter Club", "price":"Thirty-four USD"}
    document.name = req.body.name;
    document.brand = req.body.brand;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
};
// Handle jacket delete form on DELETE. 
exports.jacket_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jacket delete DELETE ' + req.params.id); 
}; 
 
exports.jacket_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await jacket.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle jacket update form on PUT. 
exports.jacket_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jacket.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  toUpdate.name= req.body.name; 
        if(req.body.brand) toUpdate.brand = req.body.brand; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
