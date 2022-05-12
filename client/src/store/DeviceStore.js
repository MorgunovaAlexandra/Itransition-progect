import {makeAutoObservable} from 'mobx'
export default class DeviceStore{
    constructor(){
        this._types=[
         
        ]
        this._collections=[
            
        ]
        this._keyType=[]
        this._selectedType={}
        this._selectedBrandBarCollection={}
        this._comment=['first comment','second comment']
        makeAutoObservable(this)//будет следить за изменением переменных

    }
    setKeyType(id){
      this._keyType=id
    }
    setTypes(types){//это экшены которые как-то этот параметр изменяют
      this._types=types
    }
    setCollections(collections){//экшен для изменения пользователя
        this._collections=collections
      }
      setselectedType(type){
        this._selectedType=type
      }
      setselectedBrandBarCollection(collections){
        this._selectedBrandBarCollection=collections
      }
      setComment(comment){
        this._comment=comment
      }
      get keyType(){
        return this._keyType
      }
      get Types(){//к гетерам можно обращаться как к обычным объектам
          return this._types
      }
      get collections(){
          return this._collections
      }
      get selectedType(){
          return this._selectedType
      }
      get selectedBrandBarCollection(){
          return this._selectedBrandBarCollection
      }
      get comment(){
        return this._comment
      }
}