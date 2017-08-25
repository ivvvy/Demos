function getFnValue() {
    var selectType = $(".typeResult option:selected").text();
    if (selectType == "变量") {
        value = $(".inputArea").val();
    } else if (selectType == "常量") {
        value = $(".inputArea").val();
    } else if (selectType == "函数") {
        var inputs = $(".typeArea");
        var fnName = $(".inputArea").val();
        var value = [], types = [];
        for (var k = 0; k < inputs.length; k++) {
            value.push(inputs.eq(k).val());
            types.push(inputs.eq(k).attr("data-type"));
        }
        value = fnName + "(" + value + ")";
    }

    return value;
}

function select(hot1,isTable){
    hot1.addHook('afterSelectionEnd', function (r, c, r2, c2) {
            // 给选择范围的单元格添加样式
            for (var i = r; i <= r2; i++) {
                for (var j = c; j <= c2; j++) {
                    //
                    console.log("|||" + r + "|||" + c + "|||" + r2 + "|||" + c2);
                    $(".wtBorder").css("background-color",'#29c6d4');
                    if(isTable){
                        if (r === 0) {
                            var varSelect=$(".tableSubmenu li a");
                            varSelect.off().on("click", function () {
                                var only = "";
                                var index = $(this).index();
                                console.log(i);
                                hot1.removeCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
                                var text = $(this).eq(index).text();
                                var dataType = $(this).parents(".tableSubmenu").siblings("a").attr("data-type");
                                $(".tableMenu").removeClass("show");
                                only = "only__" + dataType+"__conditions";
                                hot1.setDataAtCell(i - 1, j - 1, text);
                                hot1.setCellMeta(i - 1, j - 1, 'className', hot1.getCellMeta(i - 1, j - 1).className + ' ' + only);
                                hot1.render();
                            });
                        } else if (r === r2) {
                            var confirm=$(".btn-success");
                            confirm.off().on("click", function () {
                                var only = "";
                                hot1.removeCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
                                hot1.setDataAtCell(i - 1, j - 1, getFnValue());
                                var operatorResult = $(".operatorResult option:selected").text();
                                var typeResult = $(".typeResult option:selected").val();
                                var conditionsName = $(".inputArea").val();
                                if (typeResult == "fn") {
                                    var inputs = $(".typeArea"), values = [], types = [], id = "", type = "";
                                    for (var h = 0; h < inputs.length; h++) {
                                        values.push(inputs.eq(h).val());
                                        types.push(inputs.eq(h).attr("data-type"));
                                    }
                                    console.log(values + "|||" + types);
                                    id = (conditionsName + "__" + values).toString().replace(/,/g, "-");
                                    type = types.toString().replace(/,/g, "-");

                                    only = "only__" + operatorResult + "__" + typeResult + "__" + id + "__" + type;
                                } else {
                                    only = "only__" + operatorResult + "__" + typeResult + "__" + conditionsName;
                                }
                                hot1.setCellMeta(i - 1, j - 1, 'className', hot1.getCellMeta(i - 1, j - 1).className + ' ' + only);
                                hot1.render();

                            });
                        }
                    }else{
                        if(c===0){
                        }else if(c===c2){
                            $(".hiddenArea").show();
                            $(".btn-success").off().on("click",function(){
                                var only="";
                                hot1.removeCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
                                hot1.setDataAtCell(i-1, j-1, getFnValue());
                                var operatorResult=$(".operatorResult option:selected").text();
                                var typeResult=$(".typeResult option:selected").val();
                                var conditionsName=$(".inputArea").val();
                                if(typeResult=="fn"){
                                    var inputs=$(".typeArea"),values=[],types=[],id="",type="";
                                    for(var h=0;h<inputs.length;h++){
                                        values.push(inputs.eq(h).val());
                                        types.push(inputs.eq(h).attr("data-type"));
                                    }
                                    console.log(values+"|||"+types);
                                    id=(conditionsName+"__"+values).toString().replace(/,/g,"-");
                                    type=types.toString().replace(/,/g,"-");

                                    only="only__"+operatorResult+"__"+typeResult+"__"+id+"__"+type;
                                }else{
                                    only="only__"+operatorResult+"__"+typeResult+"__"+conditionsName;
                                }
                                hot1.setCellMeta(i-1, j-1, 'className', hot1.getCellMeta(i-1,j-1).className+' '+only);
                                hot1.render();
                            });
                        }
                    }


                }
            }

            // 重新渲染网格
            hot1.render();
    })
}


function getSelectBgColor(){

}

