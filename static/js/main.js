// <!-- Screen purely clearing funcntion-->
function allClear() {
      var cal=document.getElementById('display');
      cal.textContent="";
  }    	

//   <!-- Appending of numbers to the previous number-->
  function append(num) {
      var cal=document.getElementById('display');
      var prev=cal.textContent;
      cal.textContent=prev+num;
  }
  
//   <!--calculation of entered data using eval() function-->
  function calculation() {
      var cal=document.getElementById('display');
      var exp=cal.textContent;
      exp=eval(exp);
      cal.textContent=exp;
  }
//   <!-- removing of one element-->
  function removeOne() {
      var cal=document.getElementById('display');
      var g=cal.textContent;
      cal.textContent=g.substr(0, g.length-1);
      
  }
