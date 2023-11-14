import { UsersDB } from "../models/Users";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public findUsers = async (): Promise<UsersDB[]> => {
        const res = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        return res
    }

    public findUsersByNickname = async (nickname: string): Promise<UsersDB | undefined> => {
        const [response] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({nickname})
        return response

    }

    public findUserById = async (id: string): Promise<UsersDB | undefined> => {
        const [response]: UsersDB[] | undefined[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({ id })

        return response
    }

    public findUserByEmail = async (email: string): Promise<UsersDB | undefined> => {
        const [response]: UsersDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({ email })
        return response
    }

    public insertUser = async (newUserDB: UsersDB): Promise<void> => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(newUserDB)
    }

}