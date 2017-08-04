$(function(){

    $(".dropdown-menu li a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        $(this).parents("div.input-group-btn").siblings("input").val(text);


        var rows=$(".col-lg-6:first .input-group .form-control").val(),
            cols=$(".col-lg-6:last .input-group .form-control").val(),
            data1=[
                {

                }
            ],
            container1=document.getElementById('example'),
            hot1;
        console.log(rows);
        hot1=new Handsontable(container1,{
            data:data1,
            rowHeaders:[rows],
            colHeaders:[cols],
            rowWidths:100,
            colWidths:100


        });
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
        var trs=$(".table>tbody>tr");
        var inputs=$(".table>tbody>tr>td>input");
        for(var i=0;i<inputs.length;i++){
            var items=inputs[i];

        }
    });



});
