let value;
setTimeout(()=>{
    value = 12;
    console.log(value);
},2000);

async function f() {
    return 1;
  }
  
  f((res)=>{console.log(res)}).then(alert); // 1