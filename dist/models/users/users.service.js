"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.selectUser = {
            id: true,
            name: true,
            email: true,
            is_admin: true,
            created_at: true,
            updated_at: true,
        };
    }
    create(createUserDto) {
        return this.prismaService.user.create({ data: createUserDto });
    }
    findAll(name) {
        return this.prismaService.user.findMany({
            select: this.selectUser,
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }
    async findOne(id) {
        const user = await this.prismaService.user.findUnique({
            where: { id },
            select: this.selectUser,
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário não encontrado`);
        }
        return user;
    }
    async findOneByEmail(email) {
        return this.prismaService.user.findUnique({ where: { email } });
    }
    async update(id, updateUserDto) {
        await this.findOne(id);
        return this.prismaService.user.update({
            where: { id },
            data: updateUserDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.user.delete({ where: { id } });
    }
    async findOneWithPassword(id) {
        const user = await this.prismaService.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário não encontrado`);
        }
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map