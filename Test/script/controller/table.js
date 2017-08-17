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
        readOnly:true,

    });


    $("#addConditionCol").off().on("click",function () {
        hot1.alter('insert_col','','','abc');
    });



    var data1=[
        ['请选择变量'],
        ['请输入结果']
    ];
    var container2=document.getElementById('example2'),
        hot2;
    hot2=new Handsontable(container2,{
        data:data1,
        rowHeaders:false,
        colHeaders:false,
        colWidths:150,
        rowWidths:150,
        contextMenu:true,
        readOnly:true,

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
        }else if($(".typeResult option:selected").text()=="变量"){
            //$(".inputArea").attr("data-toggle","dropdown");
            $(".varSelect").css("display","block");
            $(".inputBox").css("display","none");
        }else{
            $(".varSelect").css("display","none");
            $(".fnSelect").css("display","none");
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
                if(r===0){
                    $(".tableSubmenu li a").off().on("click",function(){
                        var index=$(this).index();
                        console.log(i);
                        var only="";
                        var text=$(this).eq(index).text();
                        var dataType=$(this).parents(".tableSubmenu").siblings("a").attr("data-type");
                        $(".tableMenu").removeClass("show");
                        only="only_"+dataType;
                        hot1.setDataAtCell(i-1, j-1, text);
                        hot1.setCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
                        hot1.render();
                    });
                }else if(r===r2){

                    $(".btn-success").off().on("click",function(){
                        hot1.setDataAtCell(i-1, j-1, getFnValue());
                        var operatorResult=$(".operatorResult option:selected").text();
                        var typeResult=$(".typeResult option:selected").val();
                        var conditionsName=$(".inputArea").val();
                        var only="";
                        if(typeResult=="fn"){
                            var inputs=$(".typeArea"),values=[],types=[],id="",type="";
                            for(var h=0;h<inputs.length;h++){
                                values.push(inputs.eq(h).val());
                                types.push(inputs.eq(h).attr("data-type"));
                            }
                            console.log(values+"|||"+types);
                            id=(conditionsName+"_"+values).toString().replace(/,/g,"-");
                            type=types.toString().replace(/,/g,"-");

                            only="only_"+operatorResult+"_"+typeResult+"_"+id+"_"+type;
                        }else{
                            only="only_"+operatorResult+"_"+typeResult+"_"+conditionsName;
                        }
                        hot1.setCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
                        hot1.render();

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
                if(r===0){
                    $(".tableSubmenu li a").off().on("click",function(){
                        var index=$(this).index();
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


        //$(".params-select a").off().on("click",function(){
        //    var hasSubmenu=$(this).parents().hasClass("dropdown-submenu");
        //    if(hasSubmenu){
        //        var dataType=$(this).parents(".dropdown-menu").siblings("a").attr("data-type");
        //        console.log("类型2:"+dataType);
        //    }else{
        //        var dataType=1;
        //        console.log("类型1:"+dataType);
        //    }
        //});



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


    function createLeft(type,value){
        var left={};
        left.type=type;
        left.value=value;
        return left;
    }

    function createRight(type,value){
        var right={};
        right.type=type;
        right.value=value;
    }


    function createLine(comparator,value,isLeft){
        var line={};
        line.comparator=comparator;
        if(isLeft){
            line.left=createLeft(value[1],value[0]);
        }else{
            line.right=createRight(value[1],value[0]);
        }
        return line;
    }

    function createEmptyLine(isLeft) {
        var line = {};
        return line;
    }

    function createConditon(leftLine,rightLine){
        var condition={};
        condition.leftLine=leftLine;
        condition.rightLine=rightLine;
        return condition
    }

    function createCol(name,paramType,conditions){
        var result={};
        result.name=name;
        result.paramType=paramType;
        result.conditions=conditions;
        return result;
    }

    //结果中的函数或者变量
    function createParameterWithType(type,name,paramType) {
        var result={};
        result.type=type;
        result.name=name;
        result.paramType=paramType;
        return result;
    }

    //常量
    function createParameter(type,value) {
        var result={};
        result.type=type;
        result.value=value;
        return result;
    }

    function createFnOutcome(operator,type,name,parameters) {
        var result = {};
        result.operator = operator;
        result.type = type;
        result.name = name;
        result.parameters = parameters;
        return result;
    }

    function createConstOutCome(operator,type,value) {
        var result = {};
        result.operator = operator;
        result.type = type;
        result.value = value;
        return result;
    }

    function createVariableOutCome(operator,type,name){
        var result = {};
        result.operator = operator;
        result.type = type;
        result.name = name;
        return result;
    }

    function createResult(name,paramType,outcomes){
        var result={};
        result.name = name;
        result.paramType = paramType;
        result.outcomes = outcomes;
        return result;
    }



    function getColData(){
        var rows=$("#example1 tr").length;
        var cells=$("#example1 td").length/rows;
        var trs=$("#example1 tbody tr");
        console.log("列数=========="+cells+"行数="+rows);
        for(var i=0;i<cells;i++){
            for(var j=0;j<rows;j++){
                var tdValue=trs.eq(j).find("td").eq(i).text();
                console.log("第"+j+"行的第"+i+"列的值为"+tdValue);
                var classNameValue=trs.eq(j).find("td").eq(i).attr('class');
                var classNameValueArr=classNameValue.split("only_");
                var DataArr=classNameValueArr.toString().split(",")[1];
                console.log("===="+DataArr);


            }
        }
    }



    $(".compile").off().on('click',function () {
        getColData();
    })





});

