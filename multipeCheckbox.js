
window.onload=function(){
    var checks = document.getElementsByName("hobby");
    var allCheck = document.getElementById("allcheck");
    allCheck.onclick = function(){
        //将其余复选框状态与首个复选框状态同步
        for(var i = 0;i < checks.length;i++){
            checks[i].checked= allCheck.checked;
        }
    }
    
    var checkNum = allcheck.length;
    //判断为你手动点击了每个选项框
    for(var i = 0;i < checkNum;i++){
            checks[i].onclick = function(){
            //对选中数量进行判断，然后选中数量=总量 勾选第一个
                var checkOn = 0 ;
                for(var i = 0;i < checkNum;i++){
                    if(checks[i].checked){
                        checkOn ++;
                    }
                }
                allCheck.checked = (checkOn == checks.length);

            /* if(checkOn == checks.length){
                    allCheck.checked = true;
                }if(checkOn<checks.length){
                    allCheck.checked = false;
            } */
            //对选中数量进行判断，然后选中未数量=总量 不勾选第一个
            }
                            }
}
