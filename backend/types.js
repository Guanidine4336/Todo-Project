const zod = require("zod");

// Schema for creating a Todo
const createTodo = zod.object({
    title: zod.string(),
    descr: zod.string(),
    completed: zod.boolean().optional(),
});

// Schema for updating a Todo
const updateTodo = zod.object({
    id: zod.string(),
});

// Export schemas
module.exports = {
    createTodo,
    updateTodo,
};
