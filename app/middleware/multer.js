const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './assets/uploads/') 
    },
    filename : function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})
const filefilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
        cb(null, true)
    }else{
        cb(null, "Only jpeg/jpg/png images are allowed")
    }
}
const upload = multer({ 
    storage: storage, 
    limits : {
        fileSize : 1024 * 1024 * 5
    },
    fileFilter : filefilter
}).single("image")

module.exports = {
    upload
}