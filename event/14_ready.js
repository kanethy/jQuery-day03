//仅绑定整个页面加载完成才自动执行的事件处理函数
//而不是立刻执行！
//window.onload=function(){ //DOM
$(window).load(function(){
  alert("整个页面加载完成");
})

$(()=>{
  alert("dom加载完成");
  $("#btn1").click(function(){
    alert("btn1--疼！");
  })
})