const Dev = require('../modules/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, reponse){
       const { latitude, longitude, techs } = request.query
       const techsArray = parseStringAsArray(techs)
       const devs = await Dev.find({
           techs: {
               $in: techsArray
           },
           location : {
               $near: {
                   $geometry: {
                       type: 'Point',
                       cordinates: [longitude, latitude],
                   },
                   $maxDistance: 10000,
               }
           }
       })
        return reponse.json(devs)
    }
}