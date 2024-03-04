const z = require('zod');
const CreateUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
});

module.exports = {
    createUserSchema
}

