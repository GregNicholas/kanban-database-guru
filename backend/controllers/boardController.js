const asyncHandler = require('express-async-handler')

const Board = require('../models/boardModel')

// @dexc Get Boards
// @route GET /api/boards
// @access Private
const getBoards = asyncHandler(async (req, res) => {
    const boards = await Board.find()

    res.status(200).json(boards)
})

// @dexc Set Board
// @route POST /api/boards
// @access Private
const createBoard = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a valid text field')
    }

    const board  = await Board.create({
        text: req.body.text
    })

    res.status(200).json(board)
})

// @dexc Update Board
// @route PUT /api/boards/:id
// @access Private
const updateBoard = asyncHandler(async (req, res) => {
    const board = await Board.findById(req.params.id)

    if(!board){
        res.status(400)
        throw new Error('Board not found')
    }

    const updatedBoard = 
        await Board.findByIdAndUpdate(req.params.id, req.body, 
            {
                new: true,
            })

    res.status(200).json(updatedBoard)
})

// @dexc Delete Board
// @route DELETE /api/boards/:id
// @access Private
const deleteBoard = asyncHandler(async (req, res) => {
    const board = await Board.findById(req.params.id)

    if(!board){
        res.status(400)
        throw new Error('Board not found')
    }

    await board.remove()

    res.status(200).json({message: `Delete board id: ${req.params.id}`})
})


module.exports = {
    getBoards, createBoard, updateBoard, deleteBoard
}