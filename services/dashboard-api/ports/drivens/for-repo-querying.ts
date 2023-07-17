import { User as UserReposiroty } from "../../../repository/app/schemas";
import { User } from "../drivers/";


export interface ForRepoQuerying {
    getUser( email:string, password:string): Promise<UserReposiroty>;
    createUser( user: User, password: string): Promise<UserReposiroty>;
}