exports.harshDriving=async(event)=>{
    try {
        const insightName=event.queryStringParameters&&event.queryStringParameters.name;
        const value=event.queryStringParameters&&event.queryStringParameters.value;
        let range= event.queryStringParameters&&event.queryStringParameters.range;
        if(range==null)
        {
            range='Daily';
        }
        let message='No data Request ';
        if(insightName!==Null)
        {
            message= insightName +'for '+range +' time interval' ;
        }
       
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: message,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
}