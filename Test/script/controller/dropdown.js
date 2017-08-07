$(function(){
    var data="";
    $(".dropdown-menu li a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        $(this).parents("div.input-group-btn").siblings("input").val(text);



    });


    $("#add").off().on("click",function(){
        var rows='<tr>'+
                '<td>'+
               // '<input type="text" class="value-input" />'+
                '</td>'+
                '</tr>';
        $(".table>tbody").append(rows);
    });

    $(".score").off().on("click",function(){

        //if(($(this).parents(".col-lg-6").attr("data-index"))==0){
        //    rows=$(this).siblings("input").val();
        //    console.log(rows);
        //}else{
        //    cols=$(this).siblings("input").val();
        //    console.log(cols);
        //}
        data=$(this).siblings("input").val();



    });

    $(".table").on("dblclick","td",function(){
        //var i=$(this).index();
        //var oldText = $(this).eq(i).text();
        //var inputObj=$("<input type='text' class='value-input' value='" + oldText + "' />");
        //var tdObj=$(".table>tbody>tr>td");
        //tdObj.html(inputObj);
        //
        ////文本框失去焦点的时候变为文本
        //inputObj.blur(function () {
        //    var newText = $(this).eq(i).val();
        //    tdObj.html(newText);
        //});
    });



    //$("#delete").off().on("click",function(){
    //    $(this).parents(".options-btn").siblings(".options-body").children(".table").children().children().remove();
    //});





    $("#save").off().on("click",function(e){
        var target=e.target;
        console.log(target);
        var values=[],
            inputs=$(".table>tbody>tr>td>input");
        for(var i=0;i<inputs.length;i++){
            //var items=inputs[i];
            values.push(inputs.eq(i).val());
            //console.log(values[0]);

        }

        var lists=values.sort(function(a,b){
            return a-b;
        });
        //console.log(lists);

        var result = [];
        for(var j=0;j<lists.length;j++){
            if(j==0){
                result.push(data+"<"+lists[0])

            }else{
                result.push(lists[j-1]+"<="+data+">"+lists[j]);
                if(j==lists.length-1){
                    result.push(data+">="+lists[lists.length-1]);
                }
            }

        }




        var data1=[
                ["",result]
            ],
            container1=document.getElementById('example'),
            hot1;
        hot1=new Handsontable(container1,{
            data:data1,
            rowHeaders:false,
            colHeaders:false,
            colWidths:150,
            rowWidths:150,

        });
    });



});
