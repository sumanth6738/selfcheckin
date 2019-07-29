const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/mverve_self_checkin', { useNewUrlParser: true })
.then(function(){
    console.log('connected to db')
})
.catch(function(err){
    console.log('something went wrong in DB connetion')
})

module.exports = {
    mongoose
}