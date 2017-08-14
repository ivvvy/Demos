$(function () {
    var data=[
        ['请选择变量'],
        ['请输入条件']
    ];
    var container1=document.getElementById('example1'),
        hot1;
    hot1=new Handsontable(container1,{
        data:data,
        rowHeaders:false,
        colHeaders:false,
        colWidths:150,
        rowWidths:150,
        contextMenu:true,
        /*columns:[
            {type:'dropdown',
                source:["v","vvv"]
            },



]*/

    });
    $("#addConditionCol").off().on("click",function () {
        hot1.alter('insert_col');
    });



    var data1=[
        ['请选择变量'],
        ['请输入结果']
    ];
    var container1=document.getElementById('example2'),
        hot2;
    hot2=new Handsontable(container1,{
        data:data1,
        rowHeaders:false,
        colHeaders:false,
        colWidths:150,
        rowWidths:150,
        contextMenu:true

    })

    $("#addResultCol").off().on("click",function () {
        hot2.alter('insert_col');
    });

    $("#addRow").off().on("click",function () {
        hot1.alter('insert_row');
        hot2.alter('insert_row');
    });

    $("#example1 tbody tr:first-child").off().on('dblclick',"td",function(){
       // $(this).attr("data-toggle","dropdown");
        $(".dropdown-menu").addClass("show");
       /* var tds=$("#example1 tbody tr:first-child td");
        for(var i=0;i<tds.length;i++){
            var data=hot1.getCell(0,i);
            console.log(data);
        }*/

    });

    $(".dropdown-menu li a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        /*var tds=$("#example1 tbody tr:first-child td");
        for(var i=0;i<tds.length;i++){
            var data=hot1.getCell(0,i);
            var a=data[0];
            console.log(a);

        }*/
        $("#example1 tbody tr:first-child td").eq(i).text(text);
        console.log($("#example1 tbody tr:first-child td").eq(i).text(text));
        var dataType=$(this).attr("data-type");
        $(".dropdown-menu").removeClass("show");

    });
})

