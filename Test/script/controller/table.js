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
        contextMenu:true

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

    });

    $("#addResultCol").off().on("click",function () {
        hot2.alter('insert_col');
    });

    $("#addRow").off().on("click",function () {
        hot1.alter('insert_row');
        hot2.alter('insert_row');
    });



    function dropDown(){
        if($(".typeResult option:selected").text()=="常量"){
            $(".inputBox").css("display","none");
        }else if($(".typeResult option:selected").text()=="函数"){
            //$(".inputArea").attr("data-toggle","dropdown");
            $(".fnSelect").css("display","block");
            $(".inputBox").css("display","block");
        }else{
            //$(".inputArea").attr("data-toggle","dropdown");
            $(".varSelect").css("display","block");
            $(".inputBox").css("display","none");
        }
    }


    function getFnValue(){
        var selectType=$(".typeResult option:selected").text();
        if(selectType=="变量"){
            value=$(".inputArea").val();
        }else if(selectType=="常量"){
            value=$(".inputArea").val();
        }else if(selectType=="函数"){
            var inputs=$(".typeArea");
            var fnName=$(".inputArea").val();
            var value=[],types=[];
            for(var k=0;k<inputs.length;k++){
                value.push(inputs.eq(k).val());
                types.push(inputs.eq(k).attr("data-type"));
                console.log("pppppp"+value);
            }
            value=fnName+"("+value+")";
        }

        return value;
    }

    function getTypeAndOperator(){
        var type="",operators="";
        operators=$(".operatorResult option:selected").text();
        if($(".typeResult option:selected").text()=="函数"){
            type=2;
        }else if($(".typeResult option:selected").text()=="变量"){
            type=3;
        }else{
            type=1;
        }
        console.log("|||"+type+"|||"+operators);
    }



    hot1.addHook('afterSelectionEnd', function(r, c, r2, c2){
        // 给选择范围的单元格添加样式
        for(var i = r; i <= r2; i++){
            for(var j = c; j <= c2; j++){
                console.log("|||"+r+"|||"+c+"|||"+r2+"|||"+c2);
                //hot1.setCellMeta(i, j, 'className', hot1.getCellMeta(i, j).className + ' selected-td');
                if(r===0){
                    $(".tableSubmenu li a").off().on("click",function(){
                        var index=$(this).index();
                        console.log(i);
                        var text=$(this).eq(index).text();
                        hot1.setDataAtCell(i-1, j-1, text);
                        $(".tableMenu").removeClass("show");

                    });
                }else if(r===r2){
                    $(".btn-success").off().on("click",function(){
                        hot1.setDataAtCell(i-1, j-1, getFnValue());

                    });
                }

            }
        }

        // 重新渲染网格
        hot1.render();
    });

    hot2.addHook('afterSelectionEnd', function(r, c, r2, c2){
        // 给选择范围的单元格添加样式
        for(var i = r; i <= r2; i++){
            for(var j = c; j <= c2; j++){
                console.log("|||"+r+"|||"+c+"|||"+r2+"|||"+c2);
                //hot1.setCellMeta(i, j, 'className', hot1.getCellMeta(i, j).className + ' selected-td');
                if(r===0){
                    $(".tableSubmenu li a").off().on("click",function(){
                        var index=$(this).index();
                        console.log(i);
                        var text=$(this).eq(index).text();
                        hot2.setDataAtCell(i-1, j-1, text);
                        $(".tableMenu").removeClass("show");

                    });
                }else if(r===r2){
                    $(".btn-success").off().on("click",function(){
                        hot2.setDataAtCell(i-1, j-1, getFnValue());

                    });
                }

            }
        }

        // 重新渲染网格
        hot2.render();
    });





    $("#example1 tbody tr:first-child").off().on('dblclick',"td",function(){
        $(".tableMenu").addClass("show");
    });

    $("#example2 tbody tr:first-child").off().on('dblclick',"td",function(){
        $(".tableMenu").addClass("show");
    });


    $(".value-select a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        if($(".typeResult option:selected").text()=="函数"){
            //$(".inputArea").attr("data-toggle","dropdown");
            $(".fnSelect").css("display","none");
            $(this).parents(".value-select").siblings(".inputArea").val(text);
            getTypeAndOperator();
        }else{
            //$(".inputArea").attr("data-toggle","dropdown");
            $(".varSelect").css("display","none");
            $(this).parents(".value-select").siblings(".inputArea").val(text);
        }
        /*var hasSubmenu=$(this).parents().hasClass("dropdown-submenu");
        if(hasSubmenu){
            var i=$(this).index();
            var text=$(this).eq(i).text();
            var dataType=$(this).parents(".dropdown-menu").siblings("a").attr("data-type");
            $(this).parents(".value-select").siblings(".inputArea").val(text);
            $(".inputArea").attr("data-type",dataType);
            console.log("类型2:"+dataType);
        }else{
            var dataType=1;
            $(".inputArea").attr("data-type",dataType);
            console.log("类型1:"+dataType);
        }*/
    });


        $(".params-select a").off().on("click",function(){
            var hasSubmenu=$(this).parents().hasClass("dropdown-submenu");
            if(hasSubmenu){
                var dataType=$(this).parents(".dropdown-menu").siblings("a").attr("data-type");
                console.log("类型2:"+dataType);
            }else{
                var dataType=1;
                console.log("类型1:"+dataType);
            }
        });



    $(".inputArea").off().on('click',function () {
        dropDown();
    });


    function getJson(){
        var result={
            tableName:"决策矩阵名",
            cols:[],
            rows:[],
            results:[]
        };
        var colConditions=[];

    }





})

