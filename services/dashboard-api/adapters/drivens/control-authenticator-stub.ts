import { AuthDetails, ForControlAuthenticating, Permissions } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock : AuthDetails = {
    token: '2323245',
    refreshToken: '1234567890-'
}

const permissionsMock : Permissions = {
    admin: true,
    user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }
    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock);
    }

}