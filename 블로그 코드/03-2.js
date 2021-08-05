const arr2=[];
arr2.push(1);//arr2=[1]
arr2.splice(0,0,0);//arr2=[0,1]
arr2.pop();//arr2=[1]

const obj2={};
obj2['name']='Cuz-IAm'// obj2={name: 'Cuz-IAm'}
Object.assign(obj2,{name: 'kang'});//obj2={name: 'kang'}
delete obj2.name;//obj2={}

