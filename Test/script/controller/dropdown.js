$(function(){
    var data="";

    $(".dropdown-menu li a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        $(this).parents("div.input-group-btn").siblings("input").val(text);



    });


    $(".add").off().on("click",function(){
        var rows='<tr>'+
                '<td class="editVal">'+
                '</td>'+
                '<td>'+
                '<select>'+
                '<option value=""></option>'+
                '<option value=""><</option>'+
                '<option value="">>,<</option>'+
                '<option value="">>=,<=</option>'+
                '<option value=""><=</option>'+
                '<option value="">>=</option>'+
                '</select>'+
                '</td>'+
                '<td class="editVal">'+
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

    $(".table").on("click",".editVal",function(e){
        var that=this;
        var content=$(that).text();
        $(that).html('<input type="text" class="value-input" value="'+content+'" />');
        $("input[class='value-input']").click(function(e){
            e.stopPropagation();
        });
        $("input[class='value-input']").trigger('focus');
        $("input[class='value-input']").blur(function(){
            var newtxt=$(this).val();
            $(that).html(newtxt);

        })
    });





    //$("#delete").off().on("click",function(){
    //    $(this).parents(".options-btn").siblings(".options-body").children(".table").children().children().remove();
    //});





    $(".save").off().on("click",function(){
        var values=[],
            trs=$(".table>tbody>tr"),
            tds=$(".table>tbody>tr>td.editVal"),
            operators=$(".table tbody tr td select option:selected").val();



        for(var i=0;i<tds.length;i++){
            values.push(tds.eq(i).text());
            var v=tds.eq(i).find("option:selected").val();
            console.log(v);
        }



        //var lists=values.sort(function(a,b){
        //    return a-b;
        //});
        //console.log(lists);

        //var result = [];
        //for(var j=0;j<lists.length;j++){
        //    if(j==0){
        //        result.push(data+"<"+lists[0])
        //
        //    }else{
        //        result.push(lists[j-1]+"<="+data+">"+lists[j]);
        //        if(j==lists.length-1){
        //            result.push(data+">="+lists[lists.length-1]);
        //        }
        //    }
        //
        //}





        //var data1=[
        //        result
        //    ],
        //    container1=document.getElementById('example'),
        //    hot1;
        //hot1=new Handsontable(container1,{
        //    data:data1,
        //    rowHeaders:false,
        //    colHeaders:false,
        //    colWidths:150,
        //    rowWidths:150
        //
        //});
    });



});
