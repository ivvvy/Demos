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
            tds=$(".table>tbody>tr>td.editVal");

        var symbol=[];
        $("select").each(function(){
            var operators= $(this).children("option:selected").text();
            symbol.push(operators);
            console.log(symbol);

        });

        for(var i=0;i<tds.length;i++){
            values.push(tds.eq(i).text());
            //console.log(values);
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



        var rows=['','12<行变量1<25','25<行变量1<=35','36<行变量1<=45'];
        var cols1=['列变量3>=4'];
        var cols2=['5<列变量3<15'];

        var data1=[
                rows,
                cols1,
                cols2
            ],
            container1=document.getElementById('example'),
            hot1;
        hot1=new Handsontable(container1,{
            data:data1,
            rowHeaders:false,
            colHeaders:false,
            colWidths:150,
            rowWidths:150,
            contextMenu:true,
            readOnly:true,

            renderer: function (instance, td, row, col, prop, value, cellProperties) {
                // 渲染为text类型，可选的有TimeRenderer、PasswordRenderer等不同的类型
                Handsontable.renderers.TextRenderer.apply(this, arguments);
                // 判断条件
                console.log(value);
                if (!value && col===2) {
                    cellProperties.readOnly = false;
                    td.style.backgroundColor = '#e0ecff';
                }else if(!value && row===0){
                    td.style.backgroundColor = '#F2F2F2';
                }
            },



        });
        hot1.alter('insert_row');

    });



});
