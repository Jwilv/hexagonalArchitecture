import { ControlAuthenticatorStub } from '../adapters/drivens/control-authenticator-stub';
import { RepoQuerierStub } from '../adapters/drivens/repo-querier-stub';
import { ForControlAuthenticating, ForRepoQuerying } from '../ports/drivens';
import { AuthenticatedUser, ForAuthenticating, User } from '../ports/drivers';


export class DashboardApi implements ForAuthenticating {

    constructor(
        private readonly controlAuthenticator : ForControlAuthenticating,
        private readonly repoQuerier : ForRepoQuerying
    ){}

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email, password);
        const permissions = await this.controlAuthenticator.getPermissions(email, password);
        const user = await this.repoQuerier.getUser(email, password);

        return {
            ...authDetails,
            ...user,
            ...permissions
        }
    }

    async register (user: User, password: string): Promise<AuthenticatedUser> {
        const userReposiroty = await this.repoQuerier.createUser(user, password);
        const authDetails = await this.controlAuthenticator.getAuthDetails(user.email, password);
        const permissions = await this.controlAuthenticator.getPermissions(user.email, password);
        const responseUser = await this.repoQuerier.getUser(user.email, password);

        return {
            ...userReposiroty,
            ...authDetails,
            ...permissions,
            ...responseUser
        }
        
    }

}