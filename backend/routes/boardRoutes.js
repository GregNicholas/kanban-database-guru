const express = require('express')
const router = express.Router()
const { 
    getBoards, 
    createBoard, 
    updateBoard, 
    deleteBoard 
} = require('../controllers/boardController')

router.route('/').get(getBoards).post(createBoard)
router.route('/:id').put(updateBoard).delete(deleteBoard)

module.exports = router