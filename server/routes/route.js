const cors   = require('cors')
var express  = require('express')
var router   = express.Router()
const multer = require('multer')
const { getDirectory }          = require('./secured/getDirectory')
const { userAuthentication }    = require('./open-service/user-authentication')
const { createDirectory }       = require('./secured/createDirectory')
const { removeItemPermanently } = require('./secured/removeItemPermanently')
const { removeSharedItem }      = require('./secured/removeSharedItem')
const { renameItem }            = require('./secured/renameItem')
const { updatePermission }      = require('./secured/updatePermission')
const { newShareItem }          = require('./secured/newShareItem')
const { isUserExist }           = require('./secured/isUserExist')
const { removePermission }      = require('./secured/removePermission')
const { moveItems }             = require('./secured/moveItems')
const { createCopy }            = require('./secured/createCopy')
const { uploadItem }            = require('./secured/uploadItem')
const { moveToTrash }           = require('./secured/moveToTrash')
const { emptyTrash }            = require('./secured/emptyTrash')
const { restoreItems }          = require('./secured/restoreItems')
const { getImage }              = require('./secured/getImage')
const { existShareItem }        = require('./secured/existShare')
const { download }              = require('./secured/download')
const { moveToDrive }           = require('./secured/moveToDrive')
const { addToDrive }            = require('./secured/addToDrive')
const { logout }                = require('./secured/logout')
const { getAllRooms } = require('./open-service/getAllRooms')
const { getDataSingle } = require('./secured/getDataSingle')
const upload                    = multer()
router.post('/secured/getDirectory',getDirectory )
router.post('/secured/getDataSingle', getDataSingle)
router.post('/open-service/userAuthentication', userAuthentication )
router.post('/secured/addToDrive',addToDrive)
router.post('/secured/uploadItem', upload.single('file'), uploadItem)
router.post('/secured/createDirectory', createDirectory)
router.post('/secured/removeItemPermanently', removeItemPermanently)
router.post('/secured/removeSharedItem', removeSharedItem)
router.post('/secured/renameItem', renameItem)
router.post('/secured/updatePermission', updatePermission)
router.post('/secured/newShareItem', newShareItem)
router.post('/secured/existShareItem', existShareItem)
router.post('/secured/isUserExist', isUserExist)
router.post('/secured/removePermission', removePermission)
router.post('/secured/moveItems',moveItems)
router.post('/secured/createCopy',createCopy)
router.post('/secured/moveToTrash', moveToTrash)
router.post('/secured/moveToDrive', moveToDrive)
router.get('/secured/emptyTrash',emptyTrash)
router.post('/secured/restoreItems',restoreItems)
router.get('/secured/logout',logout)
//router.post('/open-service/getAllRooms',getAllRooms)
router.get('/secured/download', cors({exposedHeaders:['Content-Disposition']}), download)
router.get('/secured/getImage',getImage)
module.exports = router;