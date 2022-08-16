const mongoose = require('mongoose')

const boardSchema = mongoose.Schema(
    {
       text: {
           type: String,
           required: [true, 'Please add text value'],
       }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Board', boardSchema)

// const subtaskSchema = mongoose.Schema({
//     title: String,
//     isCompleted: Boolean,
// })

// const taskSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     status: String,
//     subtasks: [subtaskSchema],
// })

// const columnSchema = mongoose.Schema({
//     name: String,
//     tasks: [taskSchema],
// })

// const boardSchema = mongoose.Schema({
//     name: String,
//     columns: [columnSchema],
// })


// SHAPE OF BOARDS:
//
// boards: [
//     {
//       name: "Board name",
//       columns: [
//         {
//           name: "column name",
//           tasks: [
//             {
//               title: "task title",
//               description: "task description",
//               status: "task status",
//               subtasks: [
//                 {
//                   title: "subtask title",
//                   isCompleted: false
//                 },
//               ]
//             },
//           ]
//         },
//       ]
//     }
//   ]