$(function(){

    $(".dropdown-menu li a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        $(this).parents("div.input-group-btn").siblings("input").val(text);



    });


    $(".options-btn>.btn-primary").off().on("click",function(){
        var rows='<tr>'+
                '<td>'+
                '<input type="text" class="value-input" />'+
                '</td>'+
                '</tr>';
        $(".table>tbody").append(rows);
    });

    $("#save").off().on("click",function(){
        var values=[],
            rows=$(".col-lg-6:first .input-group .form-control").val(),
            cols=$(".col-lg-6:last .input-group .form-control").val();
        var inputs=$(".table>tbody>tr>td>input");
        for(var i=0;i<inputs.length;i++){
            //var items=inputs[i];
            values.push(inputs.eq(i).val());
            //console.log(values[0]);

        }

        var lists=values.sort(function(a,b){
            return a-b;
        });
        console.log(lists);

        var result = [];
        for(var j=0;j<lists.length;j++){
            if(j==0){
                result.push(rows+"<"+lists[0])

            }else{
                result.push(lists[j-1]+"<="+rows+">"+lists[j]);
                if(j==lists.length-1){
                    result.push(rows+">="+lists[lists.length-1]);
                }
            }

        }




        var data1=[
                result
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
