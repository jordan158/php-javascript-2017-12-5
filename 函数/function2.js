//abc是一个函数，它接受数值,调用过程查看调用过程示意图。
function abc(num1){
	if(num1>3){
		abc(--num1);//递归
	}
	document.writeln(num1);
	
}



//编写一个函数，可以接受任意多个数，并计算他们的和

function abc2(){//js函数名不能重复
	//在js中有一个arguments,可以访问所有传入值
	window.alert(arguments.length);
	//遍历所的参数
	for(var i=0;i<arguments.length;i++){
		window.alert(arguments[i]);
	}
}

//金字塔

function abc10(n){
     
           for (var i=1;i<=n;i++){ 
            for(var j=1;j<=n-i;j++){
			document.write("&nbsp");
			}
			for(var j=1;j<=2*i-1;j++){
			document.write("*");
			} 
         document.write("<br/>");
       }
 }
 
 
 //九九乘法口决表
 
function koujuebiao(n){
	 for(i=1;i<=n;i++){
  for(j=1;j<=n;j++){
       document.write (j+"*"+i+"="+i*j+"&nbsp;");
  if(i==j) {
	  document.write ("<br/>");
 break;
 }  //用的if语句，如果这两个数字相同了 那么跳出，另起一行
}
}
}
 
 
 
 
 
 
 
 
 
 