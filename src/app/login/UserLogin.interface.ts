export interface UserLogin {
    username: string;
    account: {
        password: string;
        confirmPwd: string;
    }
}