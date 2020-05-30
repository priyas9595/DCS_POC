exports.harshDriving=async(event)=>{
    let response;
    try {
        const insightName=event.queryStringParameters&&event.queryStringParameters.name;
        let range= event.queryStringParameters&&event.queryStringParameters.range;
        if(range==null)
        {
            range='Daily';
        }
        let message='No data Request ';
        if(insightName!==null)
        {
            message= insightName +'for '+range +' time interval' ;
        }
       
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: message,
                // location: ret.data.trim()
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};