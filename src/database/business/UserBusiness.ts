import { GetUsersOutputDTO } from "../../dto/user/getUsers.dto";
import { LoginInputDTO, LoginOutputDTO } from "../../dto/user/login.dto";
import { SignupInputDTO, SignupOutputDTO } from "../../dto/user/signup.dto";
import { BadRequestError } from "../../errors/BadRequestError";
import { NotFoundError } from "../../errors/NotFoundError";
import { TokenPayload, USER_ROLES, Users } from "../../models/Users";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenManager } from "../../services/TokenManager";
import { UserDatabase } from "../UserDatabase";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) { }

    public getUsers = async (): Promise<GetUsersOutputDTO> => {
        const usersDB = await this.userDatabase.findUsers()

        if (!usersDB) {
            throw new NotFoundError("Usuários não encontrados")
        }

        const users = usersDB.map((userDB) => {
            const user = new Users(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password,
                userDB.role,
                userDB.created_at
            )

            return user.toUserModel()
        })

        const output: GetUsersOutputDTO = users
        return output
    }

    public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
        const { nickname, email, password } = input
        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)

        const newUser = new Users(
            id,
            nickname,
            email,
            hashPassword,
            USER_ROLES.NORMAL,
            new Date().toLocaleString("pt-br")
        )

        const nicknameExist = await this.userDatabase.findUsersByNickname(nickname)
        if (nicknameExist) {
            throw new BadRequestError(`${nickname}, já está em uso`)
        }

        const emailExist = await this.userDatabase.findUserByEmail(email)
        if (emailExist) {
            throw new BadRequestError(`${email}, já está cadastrado`)
        }

        const newUserDB = newUser.toDBModel()
        await this.userDatabase.insertUser(newUserDB)

        const payload: TokenPayload = {
            id: newUser.getId(),
            nickname: newUser.getNickname(),
            role: newUser.getRole()
        }

        const token = this.tokenManager.createToken(payload)

        const output: SignupOutputDTO = {
            token: token,
            nickname: payload.nickname
        }

        return output
    }

    public login = async (input: LoginInputDTO): Promise<LoginOutputDTO> => {
        const {email, password} = input

        const userDB = await this.userDatabase.findUserByEmail(email)

        if(!userDB) {
            throw new NotFoundError("'email' não cadastrado")
        }

        const comparePassword = await this.hashManager.compare(password, userDB.password)

        if(!comparePassword) {
            throw new BadRequestError("'Senha' incorreta")
        }

        const payload: TokenPayload = {
            id: userDB.id,
            nickname: userDB.nickname,
            role: userDB.role
        }

        const token = this.tokenManager.createToken(payload)

        const output: LoginOutputDTO = {
            token,
            nickname: payload.nickname
        }

        return output
    }

}
