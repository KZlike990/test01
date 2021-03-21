window.onload=function () {
    let getSelect = document.getElementById('mySelect');
    getSelect.multiple = true;
    //multiple 属性可设置或返回是否可有多个选项被选中。
}

/*清除表格信息*/
function Clear() {
    let getTd=document.getElementsByTagName('td');
    for(let i=0;i<getTd.length;i++)
    {
        let j='';
        getTd[i].innerText=j;
    }
}

function List() {
/*显示姓名*/
    let getUser=document.getElementById('userName');
    let p1=document.getElementById('one');
    p1.innerText=(getUser.value);

/*显示密码*/
    let getPsw=document.getElementById('psw');
    let p2=document.getElementById('two');
    p2.innerText=(getPsw.value);

/*多选按钮，选中的选项被显示*/
    let getcheckbox=document.getElementsByName('goWebsite');
    let arr=[];
    let p3=document.getElementById('three');
    for(let i=0;i<getcheckbox.length;i++){
        if(getcheckbox[i].checked==true){
            arr.push(getcheckbox[i].value);
        }
    }
    p3.innerText=(arr);

/*下拉列表，支持多选，显示选中的值*/
    let getSelect=document.getElementById('mySelect');
    let p4=document.getElementById('four');
    let y='';
    for(let i=0;i<getSelect.length;i++)
    {
        if(getSelect.options[i].selected==true)
        {//selected 属性可设置或返回选项的 selected 属性的值。
            y+=getSelect.options[i].text;
            p4.innerText=y;
        }
    }

/*显示被选中单选按钮的value值*/
    let getRadios=document.getElementsByName('radios');
    let p5=document.getElementById('five');
    for(let i=0;i<getRadios.length;i++)
    {
        if(getRadios[i].checked==true)
        {
            let y='';
            y+=getRadios[i].value;
            p5.innerText=y;
        }
    }

/*下拉列表，仅为单选，显示选中的值*/
    let getselect=document.getElementById('herSelect');
    let p6=document.getElementById('six');
    let k='';
    for(let i=0;i<getselect.length;i++)
    {
        if(getselect.options[i].selected==true)
        {
            k+=getselect.options[i].text;
            p6.innerText=k;
        }
    }
}
