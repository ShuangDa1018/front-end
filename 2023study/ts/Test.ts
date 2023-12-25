class User {
    private _password:string='1'
    get password(){
        return this._password
    }
    set password(val){
        this._password = val
    }
}
const u = new User()
u.password= '213'