const request =require('request');
const url = "http://apis.data.go.kr/1262000/CountryCovid19SafetyServiceNew/getCountryCovid19SafetyListNew";
let serviceKey = "=rvm6FQiamwgRCx3tiPy2tiaoBkCkW4aCX86T%2FESPcC%2Bg5AiERZUoTy5vp2%2BOxbVqUz0kuuFcUBeGiVhTKPOrGQ%3D%3D";
let queryList = pageNo+numOfRows+countryName+countryCode;
let pageNo = "&ServiceKey="+"1";
let numOfRows="&numOfRows="+"10";
let countryName="&cond[country_nm::EQ]="+"레바논";
let countryCode="&cond[counret_iso_alp::EQ]"+"LB";
const requestUrl=url+serviceKey+queryList;
console.log("request URL is ... ${requesetUrl}");

request(requestUrl,(err,response,body)=>{
    if(err) throw err;
    console.log(body);
})

