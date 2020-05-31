exports.handler=async(event)=>{
    let response;
    try {
        const insightName=event.queryStringParameters&&event.queryStringParameters.name;
        let interval= event.queryStringParameters&&event.queryStringParameters.interval;
        if(interval==null)
        {
            interval='Daily';
        }
        let message='No data Request ';
        if(insightName!==null)
        {
            message= insightName +'for '+interval +' time interval' ;
        }
       
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: message
                // location: ret.data.trim()
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};