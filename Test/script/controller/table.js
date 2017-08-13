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
        contextMenu:true,

    })

    $("#addResultCol").off().on("click",function () {
        hot2.alter('insert_col');
    });

    $("#addRow").off().on("click",function () {
        hot1.alter('insert_row');
        hot2.alter('insert_row');
    });
})

