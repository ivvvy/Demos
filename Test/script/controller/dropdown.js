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
                '<td class="editVal" data-type="const">'+
                '</td>'+
                '<td>'+
                '<select>'+
                '<option value=""></option>'+
                '<option value="=">=x</option>'+
                '<option value=">">x></option>'+
                '<option value=">=">x>=</option>'+
                '<option value="<">&ltx</option>'+
                '<option value="<="><=x</option>'+
                '<option value="≠">≠x</option>'+
                '<option value=">,<">>x<</option>'+
                '<option value=">=,<">>=x<</option>'+
                '<option value=">,=<">>x=<</option>'+
                '<option value=">=,=<">>=x=<</option>'+
                '</select>'+
                '</td>'+
                '<td class="editVal" data-type="const">'+
                '</td>'+
                '</tr>';
        if (isRow){
            $("#rowTable>tbody").append(rows);
        }else{
            $("#colTable>tbody").append(rows);
        }

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






    $("#rowSave").off().on("click",function(){
        var rows = getTableArr(true);
        var cols = getTableArr(false);
        console.log("rows:"+rows);
        console.log("cols:"+cols);
        showTable(rows,cols);
    });
    $("#colSave").off().on("click",function(){
        var rows = getTableArr(true);
        var cols = getTableArr(false);
        showTable(rows,cols);
    });



    function getJson() {
        var rowDataArr = getData(true);
        var colDataArr = getData(false);
        //----------------------------------------------
        var result = {
            tableName:"matrix_1",
            cols:[],
            rows:[],
            results:[]
        };
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
        result.elseResults=[];
        console.log("json========================"+JSON.stringify(result));
        //-----------------------------------------------
    }

    function handleData(rowDataArr,rowConditions) {
        for (var i =0;i<rowDataArr.length;i++){
            var item = rowDataArr[i];
            if (item[1].indexOf(",")>=0){
                var leftLine = createLine(item[1].split(",")[0],item[0],true);
                var rightLine = createLine(item[1].split(",")[1],item[2],false);
                rowConditions.push(createCondition(leftLine,rightLine))
            }else if (item[1].indexOf(">")>=0){
                var rightLine=createEmptyLine();
                var leftLine = createLine(item[1].split(",")[0],item[0],true);
                rowConditions.push(createCondition(leftLine,rightLine));
            }else if (item[1].indexOf("<")>=0){
                var leftLine=createEmptyLine();
                var rightLine = createLine(item[1].split(",")[0],item[2],false);
                rowConditions.push(createCondition(leftLine,rightLine));
            }else {//in not in ==
                var leftLine=createEmptyLine();
                var rightLine = createLine(item[1].split(",")[0],item[2],false);
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
                    var valueAdapter = [];
                    valueAdapter.push(tds.eq(j).text());
                    valueAdapter.push(tds.eq(j).attr("data-type"));
                    arrItem.push(valueAdapter);
                } else {
                    arrItem.push(tds.eq(j).find("select option:selected").val());
                }
            }
            // if (arrItem[1].indexOf(",")<0){
            //     if (arrItem[1].indexOf(">")>=0){
            //         arrItem[0][0]==""? swapValue(arrItem):"";
            //     } else if (arrItem[1].indexOf("<")>=0){
            //         arrItem[0][0]==""?"": swapValue(arrItem);
            //     }
            // }
            arrAll.push(arrItem);
        }
        arrAll.sort(function compare(a,b) {//按第一个数字从小到大排序
            console.log("=======a:"+a[2][0]+"====b"+b[0][0]);
            if(a[2][0]==""){
                return 1;
            }
            if (b[0][0]==""){
                return -1;
            }
            return a[2][0]-b[0][0];
        });
        console.log("getData"+arrAll);
        return arrAll;
    }

    // function swapValue(arr) {
    //     var tmp = arr[0];
    //     arr[0] = arr[2];
    //     arr[2] = tmp;
    // }

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
                firstItem = arrItem[0][0],
                secondItem = arrItem[2][0];

            //校验前后是否为空
            if (operator.indexOf(",")<0){
                if (operator.indexOf("<")>=0){
                    if (firstItem!=""||secondItem==""){
                        alert("<或<=时，第一个值必须为空并且第二个值必须有值");
                    }
                } else if (operator.indexOf(">")>=0){
                    if (firstItem==""||secondItem!=""){
                        alert(">或>=时，第一个值必须不为空并且第二个值必须为空");

                    }
                }
            }
            //校验值区间
            if (checkNum!=null){//初始值是null
                //获取前一行的operator
                var beforeOperator = arrAll[i-1][1];
                //如果前一行和当前行包含=，则小于等于就报错
                if (beforeOperator.indexOf("=")>=0||operator.indexOf("=")>=0){
                    if (firstItem<=checkNum){
                        alert("请检查范围");
                    }
                } else {//都不包含=，则小于就报错
                    if (firstItem<checkNum){
                        alert("请检查范围--");
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
        //if(!isRow){
            data1.push(col);
        //}
        for(var i=0;i<row.length;i++){
            data1.push(new Array(row[i]));
        }
        var container1=document.getElementById('example'),
            hot1;
        hot1=new Handsontable(container1,{
            data:data1,
            rowHeaders:false,
            colHeaders:false,
            colWidths:220,
            rowWidths:220,
            contextMenu:true,
            readOnly:true,


            //renderer: function (instance, td, row, col, prop, value, cellProperties) {
            //    // 渲染为text类型，可选的有TimeRenderer、PasswordRenderer等不同的类型
            //    Handsontable.renderers.TextRenderer.apply(this, arguments);
            //    if(!value && col===0){
            //        td.style.backgroundColor = '#F2F2F2';
            //    }else if(value && row===0){
            //        td.style.backgroundColor = '#ffffff';
            //    }
            //},

            //cells: function (row, col, prop) {
            //    var cellProperties = {};
            //
            //    if (row === 0) {
            //        cellProperties.readOnly = true;
            //
            //    }else if(col===0){
            //        cellProperties.readOnly = true;
            //    }
            //
            //    return cellProperties;
            //}




        });


        //function getFnValue(){
        //   var selectType=$(".typeResult option:selected").text();
        //    if(selectType=="变量"){
        //        value=$(".typeArea").val();
        //    }else if(selectType=="常量"){
        //        value=$(".typeArea").val();
        //    }else if(selectType=="函数"){
        //        var inputs=$(".inputArea");
        //        var fnName=$(".typeArea").val();
        //        var value=[];
        //        for(var k=0;k<inputs.length;k++){
        //            value.push(inputs.eq(k).val());
        //        }
        //        value=fnName+"("+value+")";
        //    }
        //
        //    return value;
        //}

        //hot3.addHook('afterSelectionEnd', function(r, c, r2, c2){
        //    //for(var i = 0; i < hot3.countRows(); i++){
        //    //    for(var j = 0; j < hot3.countCols(); j++){
        //    //        // 在这里只需移除扩展样式selected-td就行，保留表格原有样式
        //    //        var className = hot3.getCellMeta(i, j).className;
        //    //        if(className && className.lastIndexOf('selected-td') > 0){
        //    //            var index = className.indexOf('selected-td');
        //    //            hot3.setCellMeta(i, j, 'className', className.substring(0, index) + className.substring(index+1, className.length));
        //    //        }
        //    //    }
        //    //}
        //    // 给选择范围的单元格添加样式
        //    for(var i = r; i <= r2; i++){
        //        for(var j = c; j <= c2; j++){
        //            console.log("|||"+r+"|||"+c+"|||"+r2+"|||"+c2);
        //            if(c===0){
        //                hot3.setCellMeta(i, j, 'className', hot3.getCellMeta(i, j).className + ' selected');
        //            }else if(c===c2){
        //                $(".hiddenArea").show();
        //                hot3.setCellMeta(i, j, 'className', hot3.getCellMeta(i, j).className + ' selected-td');
        //                $(".btn-success").off().on("click",function(){
        //                    var only="";
        //                    hot3.removeCellMeta(i-1, j-1, 'className', hot3.getCellMeta(i-1,j-1).className+' '+only);
        //                    hot3.setDataAtCell(i-1, j-1, getFnValue());
        //                    var operatorResult=$(".operatorResult option:selected").text();
        //                    var typeResult=$(".typeResult option:selected").val();
        //                    var conditionsName=$(".typeArea").val();
        //                    if(typeResult=="fn"){
        //                        var inputs=$(".inputArea"),values=[],types=[],id="",type="";
        //                        for(var h=0;h<inputs.length;h++){
        //                            values.push(inputs.eq(h).val());
        //                            types.push(inputs.eq(h).attr("data-type"));
        //                        }
        //                        console.log(values+"|||"+types);
        //                        id=(conditionsName+"__"+values).toString().replace(/,/g,"-");
        //                        type=types.toString().replace(/,/g,"-");
        //
        //                        only="only__"+operatorResult+"__"+typeResult+"__"+id+"__"+type;
        //                    }else{
        //                        only="only__"+operatorResult+"__"+typeResult+"__"+conditionsName;
        //                    }
        //                    hot3.setCellMeta(i-1, j-1, 'className', hot3.getCellMeta(i-1,j-1).className+' '+only);
        //                    hot3.render();
        //                });
        //            }
        //        }
        //    }
        //
        //    // 重新渲染网格
        //    hot3.render();
        //})
        var hot=select(hot1,false);
    }

    function createLeft(type,value) {
        var left = {};
        left.type = type;
        left.value = value;
        return left;
    }
    function createRight(type,value) {
        var right = {};
        right.type = type;
        right.value = value;
        return right;
    }
    function createLine(comparator,value,isLeft) {
        var line = {};
        line.comparator = comparator;
        if (isLeft){
            line.left = createLeft(value[1],value[0]);
        } else {
            line.right = createRight(value[1],value[0]);
        }
        return line;
    }
    function createEmptyLine() {
        var line = {};
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

    function createVariableOutCome(operator,type,name){
        var result = {};
        result.operator = operator;
        result.type = type;
        result.name = name;
        return result;
    }

    function createResult(name,paramType,outcomes) {
        var result = {};
        result.name = name;
        result.paramType = paramType;
        result.outcomes = outcomes;
        return result;
    }

    function creatElseResult(name,paramType,outcomes){
        var result = {};
        result.name = name;
        result.paramType = paramType;
        result.outcomes = outcomes;
        return result;
    }

    function getResult() {
        var result = [];
        var outComes = [];
        var rows = $("#example tr").length;
        var cells = $("#example td").length/rows;
        var trs=$("#example tbody tr:not(:first-child)");
        var resultParam=$(".resultVal").val(),
            resultParamType=$(".resultVal").attr("data-type");
        console.log("列数=========="+cells+"行数="+rows);
        for (var i =1;i<cells;i++){
            for (var j =0;j<rows-1;j++){
                var tdValue = trs.eq(j).find("td").eq(i).text();
                var classNameValue = trs.eq(j).find("td").eq(i).attr('class');
                var classNameValueArr = classNameValue.split("only__");
                var DataArr=classNameValueArr.toString().split(",")[1];
                var allData=DataArr.toString().split("__");
                console.log("===="+allData);
                var operator=allData[0],type=allData[1],fnName=allData[2];
                //1:常量  2：函数  3：变量
                console.log("操作符："+operator+"类型："+type+"函数名："+fnName);
                switch (type) {
                    case "const"://常量
                        if(isNaN(tdValue)) {
                            outComes.push(createConstOutCome(operator,"const",'\"'+tdValue+'\"'));
                        }else{
                            outComes.push(createConstOutCome(operator,"const",tdValue));
                        }
                        break;
                    case "fn"://函数
                        var fnData=allData[3],fnTypes=allData[4];
                        console.log("函数参数："+fnData+"函数参数类型："+fnTypes);
                        var params=fnData.split("-");
                        var parameters = [];
                        for(var k =0;k<params.length;k++) {
                            if (!isNaN(params[k])) {
                                parameters.push(createParameter("const", params[k]));
                            }else {
                                if(/.*[\u4e00-\u9fa5]+.*$/.test(params[k])){
                                    parameters.push(createParameter("const", '\"'+params[k]+'\"'));
                                }else{
                                    parameters.push(createParameterWithType("var",params[k],"INPUT"));
                                }
                            }

                        }
                        outComes.push(createFnOutcome(operator,"fn",fnName,parameters));
                        break;
                    case "var"://变量
                        //8.16
                        outComes.push(createVariableOutCome(operator,"var",tdValue));
                        break;

                }
                console.log("第"+j+"行的第"+i+"列的值为"+trs.eq(j).find("td").eq(i).text());
            }

        }
        result.push(createResult(resultParam,resultParamType,outComes));
        return result;

    }


    function getElseResult(){
        var elseParam=$(".resultVal").val(),
            elseParamType=$(".resultVal").attr("data-type");

    }

    function showInput() {
        if($(".typeResult option:selected").text()=="函数"){
            $(".inputBox").css("display","block");
        }else{
            $(".inputBox").css("display","none");
        }
    }


    $(".inputArea").off().on('click',function () {
        showInput();
    });


    $(".addElse").off().on('click',function(){
        var rows=
            '<td class="elseTd">'+
            '</td>';
            $(".elseTable>tbody>tr").append(rows);
    });



    $(".elseTable tbody tr").off().on('click','.elseTd',function(e){
        var i=$(this).index();
        console.log("我是:"+i);
        $(".hiddenArea").css("display","block");


    });





    $(".compile").off().on('click',function () {
        getJson();
    })



});

