window.onload=function () {

    /*产生随机数*/
    let Max=10,Min=0;
    let Range = Max - Min;
    let Rand = Math.random();//[0,1)
    let num = Min + Math.round(Rand * Range); //四舍五入
    document.getElementById("radius").innerText="R="+num;

    /*自动获取焦点*/
    let getAnswer=document.getElementById("answer");
    getAnswer.select();
    getAnswer.focus();

    /*Enter提交*/
    document.getElementById('answer').onkeydown
    =function (even) {
        let code=event.keyCode;
        if(code==13){
            let Bot=document.getElementById("Botton");
            Bot.onload=Call();
            return false;
        }

    }
    }

function Call() {
    let INtext=document.getElementById("Remarks");
    let Getanswer=document.getElementById('answer');

    /*判断输入是否为数字*/
    let GetStr=document.getElementById('answer').value.trim();//trim() 方法会从一个字符串的两端删除空白字符
    if(GetStr.length!=0){
        BOOL=/^[-+]?\d*$/;//判断数字是否为整数
        if(!BOOL.test(GetStr)){
            let SetColor= INtext.style.color="red";
            INtext.innerText=("请输入数字(整数)！");
            //Getanswer.value="";
            Getanswer.select();
            Getanswer.focus();
        }
        else{
            let R=document.getElementById("radius").innerText;
            let num=R.replace(/[^0-9]/ig,"");//替换掉R中非数字的字符
            let Area=num*num*3;

            /*输入正确后*/
            if(Area==Getanswer.value){
                INtext.style.color="blue";
                INtext.innerText=("做对了，再接再励！");

                let result=document.getElementById("Result");
                result.style.color="#7df8ff";
                result.innerText=("Area=R*R*π="+Area);

                let Bot=document.getElementById("Botton");
                Bot.value="下一关";

                /*刷新页面*/
                Bot.onclick=function cc() {
                    window.location.reload()
                }

            }

            /*输入错误后*/
            else {
                //Getanswer.value="";
                Getanswer.select();
                Getanswer.focus();
                INtext.style.color="red";
                INtext.innerText=("这不是正确答案！");
            }

        }
    }
}


