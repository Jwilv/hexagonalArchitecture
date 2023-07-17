import { User as RepoUser } from '../../../repository/app/schemas';
import { ForRepoQuerying } from '../../ports/drivens';
import { User } from '../../ports/drivers';

const RepoUserMock : RepoUser = {
    id: '1234567',
    name: 'Juan',
    email: 'j@j.com'
}


export class RepoQuerierStub implements ForRepoQuerying{
    getUser(email: string, password: string): Promise<RepoUser> {
        return Promise.resolve(RepoUserMock);
    }
    createUser(user: User, password: string): Promise<RepoUser> {
        return Promise.resolve(RepoUserMock);
    }

}