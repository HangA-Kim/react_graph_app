export interface ApiBaseType {
  id: number,
  create_date:string,
  update_date:string,
}
const initState:ApiBaseType = {id: 0, create_date:'',update_date:'',};



export interface Visitor extends ApiBaseType{
  loyal_custom:number,
  new_customer:number,
  unique_customer:number,
  month:string,
}
// export const initVisitorState:VisitorsState = {...initState, loyal_custom:0, new_customer:0, unique_customer:0, month:''}



export interface CustomersState extends ApiBaseType{
  last_month:number,
  this_month:number,
  month:string,
}
// export const initCustomerState:CustomersState = {...initState, last_month:0, this_month:0, month:''};



export interface RevenueState extends ApiBaseType{
  day:string,
  offline:number,
  online:number,
}
// export const initRevenuState:RevenueState = {...initState, day:'', offline:0, online:0}

