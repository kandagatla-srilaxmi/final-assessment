const express=require('express');
const router=express.Router();
const callService=require('../services/customer');

router.post("/insert",async(req,res)=>{
    try{
        let id=req.body.id;
        let fName=req.body.fName;
        let lName=req.body.lName;
        let email=req.body.email;
        let gender=req.body.gender;
        let address=req.body.address;
        let city=req.body.city;
        let state=req.body.state;
        data={
            id:id,
            fName:fName,
            lName:lName,
            email:email,
            gender:gender,
            address:address,
            city:city,
            state:state,
        }
        console.log(data);
        await callService.postMethod(data);
        res.send({"result":"inserted sucessfully..."});
    }
    catch(error){
        res.send(error);
    }
});

router.get("/getAll",async(req,res)=>{
    try{
        let result=await callService.getMethod();
        res.send(result);

    }
    catch(error){
        res.send(error);
    }
});

router.get("/get/:id",async(req,res)=>{
    try{
        let id=req.params.id;
        let result=await callService.getById(id);
        res.send(result[0]);
    }
    catch(error){
        res.send(error);
    }
});


router.put('/update',async(req,res)=>{
    try{
        let id=req.body.id;
        let fName=req.body.fName;
        let lName=req.body.lName;
        let email=req.body.email;
        let gender=req.body.gender;
        let address=req.body.gender;
        let city=req.body.gender;
        let state=req.body.gender;
        console.log(id);
        if(fName!==undefined){
            let result=await callService.updateMethod(id,"fName",fName);
        }
        if(lName!==undefined){
            let result=await callService.updateMethod(id,"lName",lName);
        }
        if(email!==undefined){
            let result=await callService.updateMethod(id,"email",email);
        }
        if(gender!==undefined){
            let result=await callService.updateMethod(id,"gender",gender);
        }
        if(address!==undefined){
            let result=await callService.updateMethod(id,"gender",address);
        }
        if(city!==undefined){
            let result=await callService.updateMethod(id,"city",city);
        }
        if(state!==undefined){
            let result=await callService.updateMethod(id,"state",state);
        }
        res.send({"result":"updated sucessfully"});
    }
    catch(error){
        res.send(error);
    }
});
router.delete("/delete/:id",async(req,res)=>{
    try{
        let id=req.params.id;
        console.log(id);    
        let result = await callService.deleteMethod(id);
        
        res.send({"result":"deleted successfully"});
    }
    catch(error){
        res.send(error);
    }
});

module.exports=router;