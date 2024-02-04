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
export type product= Partial<{
    params:Object,
    name:String|null|undefined,
    description:String|null,
    image:any|null,
    price:Number|null,
    brandId:Number|undefined,
    token:any,
    id:Number,
    newArray:object
}>

