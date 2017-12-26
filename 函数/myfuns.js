function ji_suan(num1,num2,operator){//参数名前不句带var

var res=0;
if(operator=="+"){
      res=num1+num2;
}else if(operator=="-"){
    res=num1-num2;
}else if(operator=="*"){
     res=num1*num2;
}else if(operator=="/"){
      res=num1/num2;
	  }
	 return res;//返回

}

//第二个函数
function test(val){
	window.alert("你输入的是"+val);
	 return 88;//返回
}