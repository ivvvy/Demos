$(function(){
    var data="",dataType="";

    $(".dropdown-menu li a").off().on("click",function(){
        var i=$(this).index();
        var text=$(this).eq(i).text();
        $(this).parents("div.input-group-btn").siblings("input").val(text);
        dataType=$(this).parents("ul").siblings("a").attr("data-type");
        $(this).parents("div.input-group-btn").siblings("input").attr("data-type",dataType);


    });


    $(".add").off().on("click",function(){
        var isRow = $(this).hasClass("rowAdd");
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
        if (isRow){
            $("#rowTable>tbody").append(rows);
        }else{
            $("#colTable>tbody").append(rows);
        }

    });




    // function add() {
    //     var rows='<tr>'+
    //         '<td class="editVal">'+
    //         '</td>'+
    //         '<td>'+
    //         '<select>'+
    //         '<option value=""></option>'+
    //         '<option value=""><</option>'+
    //         '<option value="">>,<</option>'+
    //         '<option value="">>=,<=</option>'+
    //         '<option value=""><=</option>'+
    //         '<option value="">>=</option>'+
    //         '</select>'+
    //         '</td>'+
    //         '<td class="editVal">'+
    //         '</td>'+
    //         '</tr>';
    //     $(".table>tbody").append(rows);
    // }

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



    $("#rowSave").off().on("click",function(){
        var rows = getTableArr(true);
        var cols = getTableArr(false);
        console.log("rows:"+rows);
        console.log("cols:"+cols);
        showTable(rows,cols);
        //changeBgColor();
    });
    $("#colSave").off().on("click",function(){
        var rows = getTableArr(true);
        var cols = getTableArr(false);
        showTable(rows,cols);
        //changeBgColor();
    });


    function getJson() {
        var rowDataArr = getData(true);
        var colDataArr = getData(false);
        //----------------------------------------------
        var result = {
            tableName:"决策表名",
            cols:[],
            rows:[],
            results:[]
        }
        var rowConditions = [],
            colConditions = [],
            rowName=$(".rowsVal").val(),
            colName=$(".colsVal").val(),
            rowType=$(".rowsVal").attr("data-type"),
            colType=$(".colsVal").attr("data-type");
        handleData(rowDataArr,rowConditions);
        handleData(colDataArr,colConditions);
        result.cols= createRowOrCol(colName,colType,colConditions);
        result.rows= createRowOrCol(rowName,rowType,rowConditions);
        result.results = getResult();
        console.log("json========================"+JSON.stringify(result));
        //-----------------------------------------------
    }

    function handleData(rowDataArr,rowConditions) {
        for (var i =0;i<rowDataArr.length;i++){
            var item = rowDataArr[i];
            if (item[1].indexOf(",")>=0){
                var leftLine = createLine(item[1].split(",")[0],item[0]);
                var rightLine = createLine(item[1].split(",")[1],item[2]);
                rowConditions.push(createCondition(leftLine,rightLine))
            }else if (item[1].indexOf(">")>=0){
                var rightLine=createLine("","");
                var leftLine = createLine(item[1].split(",")[0],item[0]);
                rowConditions.push(createCondition(leftLine,rightLine));
            }else if (item[1].indexOf("<")>=0){
                var leftLine=createLine("","");
                var rightLine = createLine(item[1].split(",")[0],item[2]);
                rowConditions.push(createCondition(leftLine,rightLine));
            }else {//in not in ==
                var leftLine=createLine("","");
                var rightLine = createLine(item[1].split(",")[0],item[2]);
                rowConditions.push(createCondition(leftLine,rightLine));
            }
        }
    }

    function getData(isRow) {
        var arrAll=[];
        if (isRow){
            var trs=$('#rowSave').parent().siblings(".modal-body").children(".options-body").find("tbody>tr");
        } else {
            var trs=$('#colSave').parent().siblings(".modal-body").children(".options-body").find("tbody>tr");
        }

        for(var i=0;i<trs.length;i++){
            var arrItem = [];
            // var values="",
            //     operators="",
            var tds=trs.eq(i).find("td");
            for (var j =0;j<tds.length;j++){
                if (tds.eq(j).hasClass("editVal")){
                    arrItem.push(tds.eq(j).text());
                } else {
                    arrItem.push(tds.eq(j).find("select option:selected").text());
                }
            }
            if (arrItem[1].indexOf(",")<0){
                if (arrItem[1].indexOf(">")>=0){
                    arrItem[0]==""?swapValue(arrItem):"";
                } else if (arrItem[1].indexOf("<")>=0){
                    arrItem[0]==""?"":swapValue(arrItem);
                }
            }
            arrAll.push(arrItem);
        }
        arrAll.sort(function compare(a,b) {//按第一个数字从小到大排序
            return a[0]-b[0];
        });
        console.log("getData"+arrAll);
        return arrAll;
    }

    function swapValue(arr) {
        var tmp = arr[0];
        arr[0] = arr[2];
        arr[2] = tmp;
    }

    function getTableArr(isRow) {
        var arrAll = getData(isRow);
        var colsArr = [];
        if (!isRow){
            colsArr.push("");
        }
        var checkNum;
        for(var i=0;i<arrAll.length;i++){
            var arrItem = arrAll[i],
                operator = arrItem[1],
                firstItem = arrItem[0],
                secondItem = arrItem[2];

            //校验前后是否为空
            // if (operator.indexOf(",")<0){
            //     if (operator.indexOf("<")>=0){
            //         if (firstItem!=""||secondItem==""){
            //             alert("<或<=时，第一个值必须为空并且第二个值必须有值");
            //             return false;
            //         }
            //     } else if (operator.indexOf(">")>=0){
            //         if (firstItem==""||secondItem!=""){
            //             alert(">或>=时，第一个值必须不为空并且第二个值必须为空");
            //             return false;
            //
            //         }
            //     }
            // }
            //校验值区间
            if (checkNum!=null){//初始值是null
                //获取前一行的operator
                var beforeOperator = arrAll[i-1][1];
                //如果前一行和当前行包含=，则小于等于就报错
                if (beforeOperator.indexOf("=")>=0||operator.indexOf("=")>=0){
                    if (firstItem<=checkNum){
                        //alert("请检查范围");
                        return false;
                    }
                } else {//都不包含=，则小于就报错
                    if (firstItem<checkNum){
                        //alert("请检查范围--");
                        return false;

                    }
                }

            }
            checkNum = secondItem;

            if (isRow){
                var rowData = $('.rowsVal').val();
            } else {
                var rowData = $('.colsVal').val();
            }
            if(operator.indexOf(",")>0){
                colsArr.push(firstItem+operator.split(",")[0].replace(">","<")+rowData+operator.split(",")[1]+secondItem);
            }else{
                var value = firstItem==""?secondItem:firstItem;
                colsArr.push(rowData+operator+value);
            }
        }
        console.log("||||||||"+colsArr);
        return colsArr;
    }


    function showTable(row,col) {
        $('#example').empty();
        var data1=[];
        data1.push(col);
        for(var i=0;i<row.length;i++){
            data1.push(new Array(row[i]));
        }
        var container1=document.getElementById('example'),
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
                //console.log(value);
                if (!value && col) {
                    cellProperties.readOnly = false;
                }else if(!value && row===0){
                    td.style.backgroundColor = '#F2F2F2';
                }
            },



        })

        //hot1.addHook('beforeChange', function (changeData, source) {
        //    // changeData 是一个数组，第一个元素(数组)，记录所有修改信息
        //    if (!changeData) return;
        //    var change = changeData[0],
        //        row = change[0];
        //    //row.style.backgroundColor="#e0ecff";
        //    console.log("改变"+change);
        //})


        hot1.addHook('afterSelectionEnd', function(r, c, r2, c2){
            // 清除所有扩展的样式
            // 给选择范围的单元格添加样式
            for(var i = r; i <= r2; i++){
                for(var j = c; j <= c2; j++){
                    hot1.setCellMeta(i, j, 'className', hot1.getCellMeta(i, j).className + ' selected-td');
                }
            }
            // 重新渲染网格
            hot1.render();
        })


    }
    
    function createLine(comparator,value) {
        var line = {};
        line.comparator = comparator;
        line.value = value;
        return line;
    }
    function createCondition(leftLine,rightLine) {
        var condition = {};
        condition.leftLine = leftLine;
        condition.rightLine = rightLine;
        return condition;
    }
    function createRowOrCol(name,paramType,conditions) {
        var result = {};
        result.name = name;
        result.paramType = paramType;
        result.conditions = conditions;
        return result;
    }
    function createParameterWithType(type,name,paramType) {
        var result = {};
        result.type = type;
        result.name = name;
        result.paramType = paramType;
        return result;
    }
    function createParameter(type,value) {
        var result = {};
        result.type = type;
        result.value = value;
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
    function createResult(name,paramType,outcomes) {
        var result = {};
        result.name = name;
        result.paramType = paramType;
        result.outcomes = outcomes;
        return result;
    }


    // function changeBgColor(){
    //     var rows = $("#example tr").length;
    //     var cells = $("#example td").length/rows;
    //     var trs=$("#example tbody tr:not(:first-child)");
    //     console.log("列数=========="+cells+"行数="+rows);
    //     for (var i =1;i<cells;i++){
    //         for (var j =0;j<rows-1;j++){
    //             trs.eq(j).find("td").eq(i).css("background-color","#e0ecff")
    //         }
    //     }
    //
    // }




    $(".value-select li a").off().on("click",function(){

    });


    function getType(className){

    }

    $(".typeArea").off().on('click',function () {
        showInput();
    });

    function showInput() {
        if($(".typeResult option:selected").text()=="函数"){
            $(".inputBox").css("display","block");
        }else{
            $(".inputBox").css("display","none");
        }
    }
    function getResult() {
        var result = [];
        var outComes = [];
        var rows = $("#example tr").length;
        var cells = $("#example td").length/rows;
        var trs=$("#example tbody tr:not(:first-child)");
        var resultParam=$(".resultVal").val(),
            resultParamType=$(".resultVal").attr("data-type");
        var operate=$(".operatorResult option:selected").text();
        $(".value-select li a").off().on("click",function(){
            var dataType=$(this).attr("data-type");
            console.log(dataType);

        });
        console.log("列数=========="+cells+"行数="+rows);
        for (var i =1;i<cells;i++){
            for (var j =0;j<rows-1;j++){
                var type = (j%2==0?1:2);//1:常量  2：函数  3：变量
                switch (type) {
                    case 1://常量
                        outComes.push(createConstOutCome(operate,"const",trs.eq(j).find("td").eq(i).text()));
                        break;
                    case 2://函数
                        var fnValue = trs.eq(j).find("td").eq(i).text();
                        var params = fnValue.split("(")[1].split(")")[0].split(",");
                        var fnName = fnValue.split("(")[0];
                        var parameters = [];
                        for(var k =0;k<params.length;k++) {
                            if (!isNaN(params[k])) {
                                parameters.push(createParameter("const", params[k]));
                            }else {
                                parameters.push(createParameterWithType("var",params[k],"INPUT"));
                            }

                        }
                        outComes.push(createFnOutcome(operate,"fn",fnName,parameters));
                        break;
                    case 3://变量
                        outComes.push(createConstOutCome(operate,"var",trs.eq(j).find("td").eq(i).text()));
                        break;

                }
                console.log("第"+j+"行的第"+i+"列的值为"+trs.eq(j).find("td").eq(i).text());
            }

        }
        result.push(createResult(resultParam,resultParamType,outComes));
        return result;

    }

    
    
    $(".compile").off().on('click',function () {
        getJson();
    })

});