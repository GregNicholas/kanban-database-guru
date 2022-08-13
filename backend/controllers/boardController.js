const asyncHandler = require('express-async-handler')

// @dexc Get Boards
// @route GET /api/boards
// @access Private
const getBoards = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get boards'})
})

// @dexc Set Board
// @route POST /api/boards
// @access Private
const createBoard = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a valid text field')
    }
    res.status(200).json({message: 'Create board'})
})

// @dexc Update Board
// @route PUT /api/boards/:id
// @access Private
const updateBoard = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update board ${req.params.id}`})
})

// @dexc Delete Board
// @route DELETE /api/boards/:id
// @access Private
const deleteBoard = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete board ${req.params.id}`})
})


module.exports = {
    getBoards, createBoard, updateBoard, deleteBoard
}