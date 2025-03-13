const Task = require("../models/Task")
const asyncWrapper = require("../middleware/async")
const {createCustomError} = require("../errors/custom-error")


const getAllTasks = asyncWrapper(
    async (req, res) => {
        const tasks = await Task.find({});
         res.status(200).json({tasks, amount: tasks.length})
    }
) 

const postTask = asyncWrapper( async (req, res) => {
        const newTask = new Task(req.body)
        await newTask.save()
        res.status(200).json({newTask}) 
    }
)

const updateTask = asyncWrapper( async (req, res, next) => {
        const {id: taskID} = req.params
        const updatedTask = await Task.findByIdAndUpdate(taskID, req.body, {new: true, runValidators: true})
        if(!updatedTask){return next(createCustomError(`can not find a document with this id: ${taskID}`, 404))}
        res.status(200).json({updatedTask})
   }
)

const deleteTask = asyncWrapper( async (req, res, next) => {
        const {id: taskID} = req.params
        const deletedTask = await Task.findByIdAndDelete(taskID)
        if(!deletedTask){return next(createCustomError(`can not find a document with this id: ${taskID}`, 404))}
        res.status(200).json({ message: `Task "${deletedTask.name}" has been successfully deleted.` });
    }
)

const getTask = asyncWrapper( async (req, res, next) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return next(createCustomError(`can not find a document with this id: ${taskID}`, 404))
        }
        res.status(200).json({task})
    }
)

module.exports = {
    getAllTasks,
    getTask,
    deleteTask,
    updateTask,
    postTask
}