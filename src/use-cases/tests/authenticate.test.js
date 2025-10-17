"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const authenticate_1 = require("../authenticate");
describe('AuthenticateUseCase', () => {
    const mockUser = {
        id: 'user-1',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: '',
        createdAt: new Date(),
    };
    const JWT_SECRET = 'test-secret';
    const OLD_ENV = process.env;
    beforeAll(async () => {
        process.env = { ...OLD_ENV, JWT_SECRET };
        mockUser.passwordHash = await (0, bcryptjs_1.hash)('valid-password', 6);
    });
    afterAll(() => {
        process.env = OLD_ENV;
    });
    it('should authenticate with correct credentials', async () => {
        const usersRepository = {
            findByEmail: jest.fn().mockResolvedValue(mockUser),
        };
        const useCase = new authenticate_1.AuthenticateUseCase(usersRepository);
        const result = await useCase.execute({
            email: mockUser.email,
            password: 'valid-password',
        });
        expect(result.user).toEqual(mockUser);
        expect(typeof result.token).toBe('string');
        expect(result.token.length).toBeGreaterThan(0);
        expect(usersRepository.findByEmail).toHaveBeenCalledWith(mockUser.email);
    });
    it('should throw error if user does not exist', async () => {
        const usersRepository = {
            findByEmail: jest.fn().mockResolvedValue(null),
        };
        const useCase = new authenticate_1.AuthenticateUseCase(usersRepository);
        await expect(useCase.execute({
            email: 'notfound@example.com',
            password: 'any-password',
        })).rejects.toThrow('Invalid credentials');
    });
    it('should throw error if password does not match', async () => {
        const usersRepository = {
            findByEmail: jest.fn().mockResolvedValue(mockUser),
        };
        const useCase = new authenticate_1.AuthenticateUseCase(usersRepository);
        await expect(useCase.execute({
            email: mockUser.email,
            password: 'wrong-password',
        })).rejects.toThrow('Invalid credentials');
    });
});
