const geoCode = require('./data/geocode');
const forCast = require('./data/forcast')

console.log(process.argv[2])
geoCode.getGeo(process.argv[2],(res,err)=>{
    console.log('GeoERROR: ', err);
    // console.log("RESPONSE",res)
    if(res){
        forCast.forCast(res[0],res[1],(res,err)=>{
            console.log("ForCastERROR: ",err);
          if(res.error){
            console.log(res.error.message)
          }else{
            
            console.log("response::---> ")
            console.log("country: ",res.location.country)
            console.log("latitude: ",res.location.lat);
            console.log("longtude: ",res.location.lon);
            console.log("weather is : ", res.current.condition.text);
            console.log("Temp is : ", res.current.temp_c,"c");
          }
        })
    }
})