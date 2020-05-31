exports.handler=async(event)=>
{
    let resonse;
    let speed=event.queryStringParameters&&event.queryStringParameters.speed;
    if(speed==null)
    {
        speed=80;
    }
    else{
        speed=parseInt(speed);
    }
    
    let message= "overspeed limit is "+speed;
    try{
        resonse={
            'statusCode' :200,
            'body':JSON.stringify({message:message})
        };
    }
    catch(error){
        console.log(err);
        return err;
    }
    return resonse;
    
};