import ajax from './ajax';

const BASE='/api';

export const reqAddress =(longitude,latitude)=>ajax(`${BASE}/position/${latitude},${longitude}`);
export const reqCategorys =()=>ajax(`${BASE}/index_category`);
export const reqShops =(longitude,latitude)=>ajax(`${BASE}/shops`,{longitude,latitude});
export const reqUserOfPwd =({name,pwd,captcha})=>ajax(`${BASE}/login_pwd`,{name,pwd,captcha},"POST");
export const reqUserOfCode =({phone,code})=>ajax(`${BASE}/login_sms`,{phone,code},"POST");
export const reqUser =()=>ajax(`${BASE}/userinfo`);
export const reqSendCode =({phone})=>ajax(`${BASE}/sendcode`,{phone});
export const reqLogout =()=>ajax(`${BASE}/logout`);
export const reqShopInfo =()=>ajax("/info");
export const reqShopGoods =()=>ajax("/goods");
export const reqShopRatings =()=>ajax("/ratings");