/**
 * version : 1.0
 * developer : kwangheum
 * email : myrkh1213@gmail.com
 * hompage : http://kwangheum.blogspot.kr
*/
(function($, window, document, undefined) {
	var pluginName = "heumValidation", 
		defaults = {};
	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	function eventHandler(event, selector) {
	    event.stopPropagation();
	    event.preventDefault();
	    if (event.type === 'touchend'){
	        selector.off('click');
	    }
	}
	function parseBoolean(elementValue) {
		return /true/i.test(elementValue);
	}
	function changeView(elementOption,division,text){
		elementOption.validationGroup.removeClass("has-warning").removeClass("has-error").removeClass("has-success");
		elementOption.validationGroup.removeClass("glyphicon-warning-sign").removeClass("glyphicon-remove").removeClass("glyphicon-ok");
		if(division=="success"){
			elementOption.validationGroup.addClass("has-success");
			elementOption.validationFeed.addClass("glyphicon-ok");
			elementOption.validationText.text(text);
		}else if (division=="error"){
			elementOption.validationGroup.addClass("has-error");
			elementOption.validationFeed.addClass("glyphicon-remove");
			elementOption.validationText.text(text);
		}else if(division=="warning"){
			elementOption.validationGroup.addClass("has-warning");
			elementOption.validationFeed.addClass("glyphicon-warning-sign");
			elementOption.validationText.text(text);
		}else if(division=="default"){
			elementOption.validationText.text(text);
		}
	}
	function emailValidation(elementValue){
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(elementValue);
	}
	function phoneValidation(elementValue){
		var regExp = /^[0-9-+]+$/;
		if(regExp.test(elementValue)){
			var mobileRegExp = /^(01[016789])-?\d{3,4}-?\d{4}$/;
			var phoneRegExp = /^(070|02|031|032|033|041|042|043|051|052|053|054|055|061|062|063|064)-?\d{3,4}-?\d{4}$/;
			if(mobileRegExp.test(elementValue)||phoneRegExp.test(elementValue)){
				return "";
			}else{
				return "연락처 형식에 맞지 않습니다";
			}
		}else{
			return "연락처는 숫자 또는 + 또는 - 만 사용하실 수 있습니다";
		}
	}
	function textValidation(elementValue,elementOption){
		if(!elementOption.nullPermit){
			if(isEmpty(elementValue)){
				return "빈칸을 허용하지 않습니다";
			}
		}
		if(elementOption.number&&!$.isNumeric(elementValue)){
			return "숫자만 입력할 수 있습니다";
		}
		if(elementOption.min>0){
			if(elementValue.length <= elementOption.min){
				return elementOption.min+"자 이상 작성해주시길 바랍니다";
			}
		}
		if(elementOption.max>0){
			if(elementValue.length > elementOption.max){
				return "최대 길이는 "+elementOption.max+"자 까지입니다";
			}
		}
		return "";
	}
	function isEmpty(elementValue){
		if(elementValue==undefined){
			return true;
		}else{
			if(elementValue.replace(/ /,'')==''){
				return true;
			}else{
				return false;
			}
		}
	}
	function checkboxValidation(elementOption){
		var errorMessage="";
		if(elementOption.name!=undefined){
			if(elementOption.min>0){
				if($("input[name="+elementOption.name+"]:checked").size()<elementOption.min){
					errorMessage = elementOption.min+"개 이상 선택해주시길 바랍니다";
				}
			}
			if(elementOption.max>0){
				if($("input[name=checkbox]:checked").size()<elementOption.min){
					errorMessage = elementOption.max+"개 이하로 선택해주시길 바랍니다";
				}
			}
		}
		return errorMessage;
	}
	function radioValidation(elementOption){
		if(elementOption.name!=undefined&&!elementOption.nullPermit){
			if($("input[name="+elementOption.name+"]:checked").size()>0){
				return "";
			}else{
				return "값을 선택해주세요";
			}
		}
	}
	function heumValidations(element,elementOption){
		var elementOption = {
				min : element.data("heum-min")==undefined?0:element.data("heum-min"),
				max : element.data("heum-max")==undefined?0:element.data("heum-max"),
				number : element.data("heum-number")==undefined?false:parseBoolean(element.data("heum-number")),
				nullPermit : element.data("heum-null")==undefined?true:parseBoolean(element.data("heum-null")),
				name : element.attr("name"),
				id : element.attr("id"),
				validationConfirm : element.data("heum-validation")==undefined?true:parseBoolean(element.data("heum-validation")),
				validationGroup : element.parents("div.heum-validation-group"),
				validationValue : element.parents("div.heum-validation-group").find(".heum-validation-value"),
				validationText : element.parents("div.heum-validation-group").find(".heum-validation-text"),
				validationLabel : element.parents("div.heum-validation-group").find("label"),
				validationFeed : element.parents("div.heum-validation-group").find(".heum-validation-feed")
			},error = false;
		if(element.is("input")){
			if(element.attr("type")=="email"){
				if(emailValidation(element.val())){
					var errorMessage = textValidation(element.val(),elementOption);
					error = !isEmpty(errorMessage);
					if(error){
						changeView(elementOption,"error",errorMessage);
					}else{
						changeView(elementOption,"success","사용하셔도 좋습니다");
					}
					elementOption.validationValue.val(!error);
				}else{
					changeView(elementOption,"error","올바른 이메일을 입력해주세요");
					elementOption.validationValue.val(false);
					error = true;
				}
			}else if(element.attr("type")=="tel"){
				var errorMessage = phoneValidation(element.val());
				var textError = textValidation(element.val(),elementOption);
				if(!isEmpty(textError)){
					errorMessage = textError;
				}
				error = !isEmpty(errorMessage);
				changeView(elementOption,(error?"error":"success"),errorMessage);
				elementOption.validationValue.val(!error);
			}else if(element.attr("type")=="checkbox"){
				var errorMessage = checkboxValidation(elementOption);
				error = !isEmpty(errorMessage);
				changeView(elementOption,(error?"error":"success"),errorMessage);
				elementOption.validationValue.val(!error);
			}else if(element.attr("type")=="radio"){
				elementOption.nullPermit = element.data("heum-null")==undefined?false:parseBoolean(element.data("heum-null"));
				var errorMessage = radioValidation(elementOption);
				error = !isEmpty(errorMessage);
				changeView(elementOption,(error?"error":"success"),errorMessage);
				elementOption.validationValue.val(!error);
			}else{
				var errorMessage = textValidation(element.val(),elementOption);
				error = !isEmpty(errorMessage);
				changeView(elementOption,(error?"error":"success"),errorMessage);
				elementOption.validationValue.val(!error);
			}
		}
	}
	function validations(element){
		var validationConfirm = element.data("heum-validation")==undefined?true:parseBoolean(element.data("heum-validation"));
		if(validationConfirm){
			heumValidations(element);
		}
	}
	
	Plugin.prototype = {
		init : function() {
			var defaults = defaults,
				element = $(this.element),
				options = this.options;
			if(!element.hasClass("form-horizontal")){
				element.addClass("form-horizontal");
			}
			element.find("input:visible,textarea:visible").each(function(){
				var thisElement = $(this);
				var label = $("<label/>",{
					class : "col-md-2 control-label",
					text : $(this).data("heum-label"),
					"for" : $(this).attr("id")
				});
				var divGroup = $("<div/>",{
					class : "heum-validation-group form-group has-feedback"
				});
				var div = $("<div/>",{
					class : "col-md-10"
				});
				var feed = $("<span/>",{
					class : "heum-validation-feed glyphicon form-control-feedback"
				});
				var validationText = $("<span/>",{
					class : "heum-validation-text control-label"
				});
				var validationValue = $("<input/>",{
					class : "heum-validation-value",
					type : "hidden",
					value : !parseBoolean($(this).data("heum-validation"))
				});
				if($(this).attr("type")!="checkbox"&&$(this).attr("type")!="radio"){
					$(this).wrap(div).parent("div").append(feed,validationText,validationValue);
					$(this).parent("div").wrap(divGroup);
					$(this).parents("div.heum-validation-group").prepend(label);
				}else{
					if($("input[name="+$(this).attr("name")+"]").index($(this))==0){
						$("input[name="+$(this).attr("name")+"]").wrapAll(div).parent("div").append(validationText,validationValue);
						$(this).parent("div").wrap(divGroup);
						var groupLabel = $("<label/>",{
							class : "col-md-2 control-label",
							text : $(this).data("heum-group-label")
						});
						$(this).parents(".heum-validation-group").find(".heum-validation-text").wrap("<div/>");
						$(this).parents(".heum-validation-group").prepend(groupLabel);
					}
					$(this).wrap(label.removeClass("col-md-2").addClass($(this).attr("type")+"-inline"));
				}
				if($(this).attr("type")!="checkbox"&&$(this).attr("type")!="radio"){
					thisElement.keyup(function(){
						validations($(this));
					});
				}else{
					thisElement.change(function(){
						var elementOption = {
							validationGroup : $(this).parents("div.heum-validation-group"),
							validationValue : $(this).parents("div.heum-validation-group").find(".heum-validation-value"),
							validationText : $(this).parents("div.heum-validation-group").find(".heum-validation-text"),
							validationFeed : $(this).parents("div.heum-validation-group").find(".heum-validation-feed")
						};
						changeView(elementOption,"default","");
						elementOption.validationValue.val(false);
					});
				}
			});
			element.find("*[type=reset]").on("click touchend",function(event){
				eventHandler(event, $(this));
				element.find("input[type=checkbox],input[type=radio]").prop("checked",false);
				element.heumValidation().reset();
			});
			element.submit(function(){
				element.find("button,a").button("loading");
				var error=false;
				element.find("input:visible,textarea:visible").each(function(){
					if($(this).attr("type")=="checkbox"||$(this).attr("type")=="radio"){
						if($("input[name="+$(this).attr("name")+"]").index($(this))==0){
							validations($(this));
						}
					}else{
						validations($(this));
					}
				});
				element.find(".heum-validation-value").each(function(){
					if(!parseBoolean($(this).val())){
						error = true;
						return false;
					}
				});
				if(error){
					element.find("button,a").button("reset");
					toastr.clear();
					toastr.error("값을 제대로 입력해주시길 바랍니다");
					return false;
				}
			});
		}
	};
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this,options));
			} else {
				$.fn.extend({
					reset : function(){
						$(this).find(".heum-validation").val(false);
						$(this).find(".has-error").removeClass("has-error");
						$(this).find(".has-success").removeClass("has-success");
						$(this).find(".has-warning").removeClass("has-warning");
						$(this).find(".glyphicon-remove").removeClass("glyphicon-remove");
						$(this).find(".glyphicon-ok").removeClass("glyphicon-ok");
						$(this).find(".glyphicon-warning-sign").removeClass("glyphicon-warning-sign");
						$(this).find(".heum-validation-text").text("");
						$(this).find("input:not(input[type=radio],input[type=checkbox]):visible,textarea:visible").val("");
					},
					parseBoolean : function(element){
						return parseBoolean($(element).val());
					},
					emailValidation : function(element){
						return emailValidation($(element).val());
					},
					phoneValidation : function(element){
						return phoneValidation($(element).val());
					},
					changeView : function(element,division,text){
						var elementOption = {
							validationGroup : $(element).parents("div.heum-validation-group"),
							validationValue : $(element).parents("div.heum-validation-group").find(".heum-validation-value"),
							validationText : $(element).parents("div.heum-validation-group").find(".heum-validation-text"),
							validationFeed : $(element).parents("div.heum-validation-group").find(".heum-validation-feed")
						};
						changeView(elementOption,division,text);
					},
					isEmpty : function(element){
						return isEmpty($(element).val());
					},
					validations : function(element){
						heumValidations($(element));
					}
				});
			}
		});
	};
})(jQuery, window, document);