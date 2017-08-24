$(function () {
    var data = [
        ['请选择变量', '请选择变量'],
        ['请输入条件', '请输入结果']
    ];
    var container1 = document.getElementById('example1'),
        hot1;
    hot1=new Handsontable(container1, {
        data: data,
        rowHeaders: false,
        colHeaders: false,
        colWidths: 150,
        rowWidths: 150,
        contextMenu: {
            items: {
                "row_above": {name: "当前行上方"},
                "row_below": {name: "当前行下方"},
                "remove_row": {name: "删除行"},
                "remove_col": {name: "删除列"},
            }
        },
        readOnly: true,
        autoColumnSize: true,


    });






    hot1.updateSettings({
        cells: function (row, col, prop) {
            var cellProperties = {};
            if (hot1.getData()[row][prop] === '请输入结果') {
                cellProperties.className = "index";
            }

            return cellProperties;
        }
    });



    //$("#example1").handsontable({
    //    data:[
    //        ['请选择变量', '请选择变量'],
    //        ['请输入条件', '请输入结果']
    //    ],
    //    colHeaders: false,
    //    colWidths: 150,
    //    rowWidths: 150,
    //    readOnly: true,
    //    autoColumnSize: true,
    //    contextMenu:{
    //        items: {
    //            "row_above": {name: "当前行上方"},
    //            "row_below": {name: "当前行下方"},
    //            "remove_row": {name: "删除行"},
    //            "remove_col": {name: "删除列"},
    //        }
    //    }
    //
    //});



    $("#addConditionCol").off().on("click", function () {
        var index = $(".index").index();
        hot1.alter('insert_col', index);
        //console.log("索引："+index);
    });

    $("#addResultCol").off().on("click", function () {
        hot1.alter('insert_col');
    });


    function dropDown() {
        if ($(".typeResult option:selected").text() == "常量") {
            $(".inputBox").css("display", "none");
        } else if ($(".typeResult option:selected").text() == "函数") {
            $(".fnSelect").css("display", "block");
            $(".inputBox").css("display", "block");
        } else if ($(".typeResult option:selected").text() == "变量") {
            $(".varSelect").css("display", "block");
            $(".inputBox").css("display", "none");
        } else {
            $(".varSelect").css("display", "none");
            $(".fnSelect").css("display", "none");
            $(".inputBox").css("display", "none");
        }
    }


    //function getFnValue() {
    //    var selectType = $(".typeResult option:selected").text();
    //    if (selectType == "变量") {
    //        value = $(".inputArea").val();
    //    } else if (selectType == "常量") {
    //        value = $(".inputArea").val();
    //    } else if (selectType == "函数") {
    //        var inputs = $(".typeArea");
    //        var fnName = $(".inputArea").val();
    //        var value = [], types = [];
    //        for (var k = 0; k < inputs.length; k++) {
    //            value.push(inputs.eq(k).val());
    //            types.push(inputs.eq(k).attr("data-type"));
    //        }
    //        value = fnName + "(" + value + ")";
    //    }
    //
    //    return value;
    //}

    function getTypeAndOperator() {
        var type = "", operators = "";
        operators = $(".operatorResult option:selected").text();
        if ($(".typeResult option:selected").text() == "函数") {
            type = 2;
        } else if ($(".typeResult option:selected").text() == "变量") {
            type = 3;
        } else {
            type = 1;
        }
        console.log("|||" + type + "|||" + operators);
    }

    var hot=select(hot1,true);

    //hot1.addHook('afterSelectionEnd', function (r, c, r2, c2) {
    //    // 给选择范围的单元格添加样式
    //    for (var i = r; i <= r2; i++) {
    //        for (var j = c; j <= c2; j++) {
    //            console.log("|||" + r + "|||" + c + "|||" + r2 + "|||" + c2);
    //            if (r === 0) {
    //                $(".tableSubmenu li a").off().on("click", function () {
    //                    var only = "";
    //                    var index = $(this).index();
    //                    console.log(i);
    //                    hot1.removeCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
    //                    var text = $(this).eq(index).text();
    //                    var dataType = $(this).parents(".tableSubmenu").siblings("a").attr("data-type");
    //                    $(".tableMenu").removeClass("show");
    //                    only = "only__" + dataType+"__conditions";
    //                    hot1.setDataAtCell(i - 1, j - 1, text);
    //                    hot1.setCellMeta(i - 1, j - 1, 'className', hot1.getCellMeta(i - 1, j - 1).className + ' ' + only);
    //                    hot1.render();
    //                });
    //            } else if (r === r2) {
    //                $(".btn-success").off().on("click", function () {
    //                    var only = "";
    //                    hot1.removeCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
    //                    hot1.setDataAtCell(i - 1, j - 1, getFnValue());
    //                    var operatorResult = $(".operatorResult option:selected").text();
    //                    var typeResult = $(".typeResult option:selected").val();
    //                    var conditionsName = $(".inputArea").val();
    //                    if (typeResult == "fn") {
    //                        var inputs = $(".typeArea"), values = [], types = [], id = "", type = "";
    //                        for (var h = 0; h < inputs.length; h++) {
    //                            values.push(inputs.eq(h).val());
    //                            types.push(inputs.eq(h).attr("data-type"));
    //                        }
    //                        console.log(values + "|||" + types);
    //                        id = (conditionsName + "__" + values).toString().replace(/,/g, "-");
    //                        type = types.toString().replace(/,/g, "-");
    //
    //                        only = "only__" + operatorResult + "__" + typeResult + "__" + id + "__" + type;
    //                    } else {
    //                        only = "only__" + operatorResult + "__" + typeResult + "__" + conditionsName;
    //                    }
    //                    hot1.setCellMeta(i - 1, j - 1, 'className', hot1.getCellMeta(i - 1, j - 1).className + ' ' + only);
    //                    hot1.render();
    //
    //                });
    //            }
    //
    //        }
    //    }
    //
    //    // 重新渲染网格
    //    hot1.render();
    //});



    $("#example1 tbody tr:first-child").off().on('dblclick', "td", function () {
        $(".tableMenu").addClass("show");
    });


    $(".value-select a").off().on("click", function () {
        var i = $(this).index();
        var text = $(this).eq(i).text();
        if ($(".typeResult option:selected").text() == "函数") {
            $(".fnSelect").css("display", "none");
            $(this).parents(".value-select").siblings(".inputArea").val(text);
            getTypeAndOperator();
        } else {
            $(".varSelect").css("display", "none");
            $(this).parents(".value-select").siblings(".inputArea").val(text);
        }

    });


    $(".inputArea").off().on('click', function () {
        dropDown();
    });


    function getJson() {
        var result = {
            tableName: "TABLE_1",
            cols: [],
            rows: [],
            results: []
        };
        getColData(result);
        console.log("json========================"+JSON.stringify(result));

    }


    function createLeft(type, value) {
        var left = {};
        left.type = type;
        left.value = value;
        return left;
    }

    function createRight(type, value) {
        var right = {};
        right.type = type;
        right.value = value;
        return right;
    }

    function createRightWithName(type, name,parameters) {
        var right = {};
        right.type = type;
        right.name = name;
        right.parameters = parameters;
        return right;
    }

    function createRightWithValue(type, name) {
        var right = {};
        right.type = type;
        right.name = name;
        return right;
    }


    function createLine(comparator, type, value, isLeft) {
        var line = {};
        line.comparator = comparator;
        if (isLeft) {
            line.left = createLeft(type, value);
        } else {
            line.right = createRight(type, value);
        }
        return line;
    }

    function createEmptyLine() {
        var line = {};
        return line;
    }
    
    function createParamLine(comparator,type,name,parameters,isLeft) {
        var line = {};
        line.comparator = comparator;
        if (isLeft) {
            line.left = createEmptyLine();
        } else {
            line.right = createRightWithName(type, name,parameters);
        }
        return line;
    }

    function createVarLine(comparator,type,name,isLeft) {
        var line = {};
        line.comparator = comparator;
        if (isLeft) {
            line.left = createEmptyLine();
        } else {
            line.right = createRightWithValue(type, name);
        }
        return line;
    }



    function createCondition(leftLine, rightLine) {
        var condition = {};
        condition.leftLine = leftLine;
        condition.rightLine = rightLine;
        return condition
    }

    function createCol(name, paramType, conditions) {
        var result = {};
        result.name = name;
        result.paramType = paramType;
        result.conditions = conditions;
        return result;
    }

    //结果中的函数或者变量
    function createParameterWithType(type, name, paramType) {
        var result = {};
        result.type = type;
        result.name = name;
        result.paramType = paramType;
        return result;
    }

    //常量
    function createParameter(type, value) {
        var result = {};
        result.type = type;
        result.value = value;
        return result;
    }

    function createFnOutcome(operator, type, name, parameters) {
        var result = {};
        result.operator = operator;
        result.type = type;
        result.name = name;
        result.parameters = parameters;
        return result;
    }

    function createConstOutCome(operator, type, value) {
        var result = {};
        result.operator = operator;
        result.type = type;
        result.value = value;
        return result;
    }

    function createVariableOutCome(operator, type, name) {
        var result = {};
        result.operator = operator;
        result.type = type;
        result.name = name;
        return result;
    }

    function createResults(name, paramType, outcomes) {
        var result = {};
        result.name = name;
        result.paramType = paramType;
        result.outcomes = outcomes;
        return result;
    }


    function getColData(result) {
        var rows = $("#example1 tr").length;
        var cells = $("#example1 td").length / rows;
        var trs = $("#example1 tbody tr");
        var results = [],cols=[];
        console.log("列数==========" + cells + "行数=" + rows);
        for (var i = 0; i < cells; i++) {
            var index = $(".index:first").index();
            console.log("结果条件:"+index);
            if(i<index){
                var resultParamType,resultParam,conditions=[];
                //条件
                for(var k=0;k<rows;k++){
                    var tdValue = trs.eq(k).find("td").eq(i).text();
                    console.log("第" + k + "行的第" + i + "列的值为" + tdValue);
                    var className = trs.eq(k).find("td").eq(i).attr('class'),
                        classNameValue=className.replace("htDimmed","").trim();
                    console.log("className:"+classNameValue);
                    var firstLine,lastLine;
                    //区分是选择变量还是选择条件
                    if(classNameValue.indexOf("conditions")<0){
                        var classNameValueArr = classNameValue.split("only__");
                        var DataArr=classNameValueArr.toString().split(",")[1];
                        var allData=DataArr.toString().split("__");
                        console.log("====" + allData+"|||"+typeof allData);
                        var operator = allData[0], type = allData[1], fnName = allData[2];
                        console.log("操作符：" + operator + "类型：" + type + "函数名：" + fnName);
                        switch (type) {
                            case "const"://常量
                                if(isNaN(tdValue)) {
                                    if(/.*[\u4e00-\u9fa5]+.*$/.test(tdValue)){
                                        conditions.push(createCondition(createEmptyLine(),createLine(operator,type,'\"'+fnName+'\"',false)));
                                    }
                                }else{
                                    conditions.push(createCondition(createEmptyLine(),createLine(operator,type,fnName,false)));
                                }
                                break;
                            case "fn"://函数
                                var fnData=allData[3],fnTypes=allData[4];
                                console.log("函数参数："+fnData+"函数参数类型："+fnTypes);
                                var params=fnData.split("-");
                                var parameters = [];
                                for(var r =0;r<params.length;r++) {
                                    if (!isNaN(params[r])) {
                                        parameters.push(createParameter("const", params[r]));
                                    }else {
                                        if(/.*[\u4e00-\u9fa5]+.*$/.test(params[r])){
                                            parameters.push(createParameter("const", '\"'+params[r]+'\"'));
                                        }else{
                                            parameters.push(createParameterWithType("var",params[r],"INPUT"));
                                        }
                                    }

                                }
                                conditions.push(createCondition(createEmptyLine(),createParamLine(operator,parameters,false)));
                                break;
                            case "var"://变量
                                conditions.push(createCondition(createEmptyLine(),createVarLine(operator,type,'\"'+fnName+'\"',false)));
                                break;

                        }
                    }else{
                        firstLine=classNameValue.indexOf("__"),
                        lastLine=classNameValue.lastIndexOf("__"),
                        resultParam=tdValue,
                        resultParamType=classNameValue.substring(firstLine+2,lastLine);
                        console.log("条件变量类型："+resultParamType);
                    }
                    if (k==(rows-1)){
                        cols.push(createCol(resultParam,resultParamType,conditions));
                    }

                }
                //console.log("我是结果")
            }else if(i>=index){
                var resultParamType,resultParam,outComes = [];
                //结果
                for (var j = 0; j < rows; j++) {
                    var tdValue = trs.eq(j).find("td").eq(i).text();
                    console.log("第" + j + "行的第" + i + "列的值为" + tdValue);
                    var className = trs.eq(j).find("td").eq(i).attr('class'),
                        classNameValue=className.replace("htDimmed","");
                    console.log("className:"+classNameValue);
                    if(classNameValue.indexOf("conditions")<0){
                        var classNameValueArr = classNameValue.split("only__");
                        var DataArr=classNameValueArr.toString().split(",")[1];
                        var allData=DataArr.toString().split("__");
                        console.log("====" + allData+"|||"+typeof allData);
                        var operator = allData[0], type = allData[1], fnName = allData[2];
                        console.log("操作符：" + operator + "类型：" + type + "函数名：" + fnName);
                        var operator=allData[0],type=allData[1],fnName=allData[2];
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
                                for(var h =0;h<params.length;h++) {
                                    if (!isNaN(params[h])) {
                                        parameters.push(createParameter("const", params[h]));
                                    }else {
                                        if(/.*[\u4e00-\u9fa5]+.*$/.test(params[h])){
                                            parameters.push(createParameter("const", '\"'+params[h]+'\"'));
                                        }else{
                                            parameters.push(createParameterWithType("var",params[h],"INPUT"));
                                        }
                                    }

                                }
                                outComes.push(createFnOutcome(operator,"fn",fnName,parameters));
                                break;
                            case "var"://变量
                                outComes.push(createVariableOutCome(operator,"var",'\"'+tdValue+'\"'));
                                break;

                        }

                    }else{
                        firstLine=classNameValue.indexOf("__"),
                        lastLine=classNameValue.lastIndexOf("__"),
                        resultParamType=classNameValue.substring(firstLine+2,lastLine),
                        resultParam=tdValue;
                        console.log("条件变量类型："+resultParamType);
                    }
                    if (j==(rows-1)){
                        results.push(createResults(resultParam,resultParamType,outComes));
                    }
                }

            }
        }
        result.cols=cols;
        result.results=results;

    }


    $(".compile").off().on('click', function () {
        getJson();
    })


});

