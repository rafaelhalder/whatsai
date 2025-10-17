"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateController = void 0;
const zod_1 = require("zod");
const make_authenticate_use_case_1 = require("@/use-cases/factories/make-authenticate-use-case");
class authenticateController {
    async authenticate(request, response, next) {
        const authenticateBodySchema = zod_1.z.object({
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6)
        });
        const { email, password } = authenticateBodySchema.parse(request.body);
        try {
            const authenticateUseCase = (0, make_authenticate_use_case_1.makeAuthenticateUseCase)();
            const { user, token } = await authenticateUseCase.execute({
                email,
                password
            });
            response.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            response.status(200).send({ token });
            next();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.authenticateController = authenticateController;
