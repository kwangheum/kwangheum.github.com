/**
 * version : 3.0
 * bootstrap version : 3.2.0
 * developer : kwangheum
 * email : myrkh1213@gmail.com
 * hompage : http://kwangheum.blogspot.kr
*/
(function($, window, document, undefined) {
	/**
	 * data-null : true,false
	 * data-min-length : int
	 * data-max-length : int
	 * data-number : true,false
	 * data-email : true,false
	 * data-phone : true,false
	 * data-url :  true,false
	 * data-pattern : String
	 */
	function validation(element){
		var error = false;
		$(element).find("[data-null]").each(function(cnt,node){
			if(($(node).data("null")!=undefined&&!$(node).data("null"))||$(node).data("null")=="false"){
				if(!nullCheck(node)){
					var title="";
					var nullPoint = false;
					nullPoint = ($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')=='');
					if(nullPoint){
						if($(node).attr("type")=="file"){
							title="파일을 첨부해주세요";
						}else if($(node).attr("type")=="checkbox"||$(node).attr("type")=="radio"){
							title="값을 선택해주세요";
						}else{
							title="값을 입력해주세요";
						}
					}else{
						title = $(node).data("message");
					}
					$(node).tooltip("destroy");
					$(node).addClass("form-has-error").tooltip({
						title:title
					});
					error = true;
				}
			}
		});
		$(element).find("[data-min-length]").each(function(cnt,node){
			if($(node).attr("multiple")==undefined){
				if(nullCheck(node)){
					var minLength = parseInt($(node).data("min-length"));
					var dataLength = 0;
					var title = "";
					if($(node).attr("type")=="file"){
						dataLength = $("input[type=file]").val().replace("C:\\fakepath\\","").length;
						if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
							title = "파일명의 길이가 짧습니다. 최소 "+minLength+"글자 이상인 파일명을 올려주세요";
						}else{
							title = $(node).data("message");
						}
					}else if($(node).attr("type")=="checkbox"){
						dataLength = $("input[name="+$(node).attr("name")+"]:checked").length;
						if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
							title = "최소 "+minLength+"개를 선택해 주세요";
						}else{
							title = $(node).data("message");
						}
					}else{
						dataLength = $(node).val().length;
						if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
							title = "값의 길이가 짧습니다. 최소 "+minLength+"글자 이상인 값을 작성해주세요";
						}else{
							title = $(node).data("message");
						}
					}
					if(dataLength<minLength){
						error = true;
						$(node).tooltip("destroy");
						$(node).addClass("form-has-error").tooltip({
							title:title
						});
					}
				}
			}
		});
		$(element).find("[data-max-length]").each(function(cnt,node){
			if($(node).attr("multiple")==undefined){
				if(nullCheck(node)){
					var maxLength = parseInt($(node).data("max-length"));
					var dataLength = 0;
					var title = "";
					if($(node).attr("type")=="file"){
						dataLength = $("input[type=file]").val().replace("C:\\fakepath\\","").length;
						if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
							title = "파일명의 길이가 깁니다. 최대 "+maxLength+"글자 이하인 파일을 올려주세요";
						}else{
							title = $(node).data("message");
						}
					}else if($(node).attr("type")=="checkbox"){
						dataLength = $("input[name="+$(node).attr("name")+"]:checked").length;
						if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
							title = "최대 "+maxLength+"개를 선택해 주세요";
						}else{
							title = $(node).data("message");
						}
					}else{
						dataLength = $(node).val().length;
						if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
							title = "값의 길이가 깁니다. 최대 "+maxLength+"글자 이하인 값을 작성해주세요";
						}else{
							title = $(node).data("message");
						}
					}
					if(dataLength>maxLength){
						error = true;
						$(node).tooltip("destroy");
						$(node).addClass("form-has-error").tooltip({
							title:title
						});
					}
				}
			}
		});
		$(element).find("[data-number=true]").each(function(cnt,node){
			if(nullCheck(node)){
				var regex = /[0-9]/;
				if(!regex.test($(node).val())){
					var title="";
					if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
						title = "숫자만 입력해주세요";
					}else{
						title = $(node).data("message");
					}
					$(node).tooltip("destroy");
					$(node).addClass("form-has-error").tooltip({
						title:title
					});
					error = true;
				}
			}
		});
		$(element).find("[data-email=true]").each(function(cnt,node){
			if(nullCheck(node)){
				var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
				var title="";
				if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
					title = "정확한 이메일을 작성해주세요";
				}else{
					title = $(node).data("message");
				}
				if(!regex.test($(node).val())){
					$(node).tooltip("destroy");
					$(node).addClass("form-has-error").tooltip({
						title:title
					});
					error = true;
				}
			}
		});
		$(element).find("[data-phone=true]").each(function(cnt,node){
			if(nullCheck(node)){
				var regex = /^[0-9-+]+$/;
				if(!regex.test($(node).val())){
					var mobileRegExp = /^(01[016789])-?\d{3,4}-?\d{4}$/;
					var phoneRegExp = /^(070|02|031|032|033|041|042|043|051|052|053|054|055|061|062|063|064)-?\d{3,4}-?\d{4}$/;
					var title="";
					if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
						title = "정확한 연락처를 작성해주세요";
					}else{
						title = $(node).data("message");
					}
					if(!(mobileRegExp.test(elementValue)||phoneRegExp.test(elementValue))){
						$(node).addClass("form-has-error").tooltip({
							title:title
						});
						error = true;
					}
				}
			}
		});
		$(element).find("[data-url=true]").each(function(cnt,node){
			if(nullCheck(node)){
				var regex = /^(http(s?)):\/\/(.*)/;
				var title="";
				if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
					title = "정확한 홈페이지 주소를 작성해주세요";
				}else{
					title = $(node).data("message");
				}
				if(!regex.test($(node).val())){
					$(node).addClass("form-has-error").tooltip({
						title:title
					});
					error = true;
				}
			}
		});
		$(element).find("[data-pattern]").each(function(cnt,node){
			if(nullCheck(node)){
				var regex = new RegExp($(node).data("pattern"));
				if(!regex.test($(node).val())){
					var title="";
					if($(node).data("message")==undefined||$(node).data("message").replace(/ /gi,'')==''){
						title = "입력할 수 없습니다";
					}else{
						title = $(node).data("message");
					}
					
					$(node).addClass("form-has-error").tooltip({
						title:title
					});
					error = true;
				}
			}
		});
		return !error;
	}
	function nullCheck(element){
		var dataNull = false;
		if($(element).attr("type")=="checkbox"||$(element).attr("type")=="radio"){
			if($(element).attr("name")!=undefined&&$(element).attr("name").replace(/ /gi,"")!=""){
				dataNull = $("input[name="+$(element).attr("name")+"]:checked").size()>0;
			}
		}else{
			dataNull = ($(element).val().replace(/ /gi,"")!="");
		}
		return dataNull;
	}
	
	var pluginName = "heumValidation", 
		defaults = {};
	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	Plugin.prototype = {
		init : function() {
			var defaults = defaults,element = $(this.element),options = this.options;
			$("[data-null],[data-min-length],[data-max-length],[data-number],form [data-email],[data-phone],[data-url]").on("click focus",function(){
				var element = $(this);
				if($(this).attr("type")=="checkbox"||$(this).attr("type")=="radio"){
					element = $("input[name="+$(this).attr("name")+"]:"+$(this).attr("type"))
				}
				$(element).removeClass("form-has-error");
				$(element).tooltip("destroy");
			});
			$(element).submit(function(event){
				if($(this).data("auto-validation")||$(this).data("auto-validation")==undefined){
					var result = validation($(this));
					if(!result){
						alert("입력 값들을 다시 한번 확인해주세요");
						event.preventDefault();
					}
					return result;
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
						return false;
					}
				});
			}
		});
	};
})(jQuery, window, document);