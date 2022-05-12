import {makeAutoObservable} from 'mobx'
export default class UserStore{
    constructor(){
        this._isAuth=false//нижнее подчеркивание для того , чтобы знать что переменная изменяться не может
        this._user={}
        this._email=''
        this._users=[]
        this._url=[{delete:"удалить"}]
        makeAutoObservable(this)//будет следить за изменением переменных
    }

    setIsAuth(bool){//это экшены которые как-то этот параметр изменяют
      this._isAuth=bool
    }
    setIsUser(user){//экшен для изменения пользователя
        this._user=user
      }
     setUsers(user){
          this._users=user
      }
      setEmail(email){
          this._email=email
      }
      get isAuth(){//к гетерам можно обращаться как к обычным объектам
          return this._isAuth
      }
      get user(){
          return this._user
      }
      get email(){
          return this._email
      }
      get users(){
          return this._users
      }
      get url(){
          return this._url
      }
}