"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const zod_1 = require("zod");
const make_register_use_case_1 = require("@/use-cases/factories/make-register-use-case");
class registerController {
    async register(request, response, next) {
        const registerBodySchema = zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6)
        });
        const { name, email, password } = registerBodySchema.parse(request.body);
        try {
            const registerUseCase = (0, make_register_use_case_1.makeRegisterUseCase)();
            const user = await registerUseCase.execute({
                name,
                email,
                password
            });
            response.status(201).send(user);
            next();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.registerController = registerController;
