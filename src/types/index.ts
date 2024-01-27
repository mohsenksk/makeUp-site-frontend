export interface LoginTypes{
    name: String,
    email: String, 
    phoneNumber: Number,
    password:Number,
    confirmPass:Number 
}
export interface actionType{
    type:String,
    payload:Object
} 

export interface ProductState{
    product: any,
    params: any[];
}
export interface UserState{
    userData:any,
    params: any[]
}
export interface publlicData{
    publicData:any,
    params :any[]
}