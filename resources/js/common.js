(function(W, D) {
	$(document).ajaxStart(function () {
		$.kwangheum.loading(true);
	}).ajaxStop(function () {
		$.kwangheum.loading(false);
	});
	$(window).load(function(){
		console.log('%c 잠깐만!!!', 'color: red; font-weight: bold;font-size:100px;');
		console.log('%c 개발자 도구를 열었다는건... 후후 내 소스를 볼려고....!? 별거 없지만 보세요...', 'font-weight: bold;font-size:20px;');
		console.log('%c 만약 저 스카웃 하고 싶으면 연락 꼭 주세요!! 나 back,front 다 자신 있어요!! 연락만 주세요!! light-respect@naver.com', 'color:#aaa;font-weight: bold;font-size:15px;');
	});
	W.$.fn.kwangheum = $.fn.kwangheum || {};
	W.$.kwangheum = $.kwangheum || {};
	var moveContents = false;
	$.fn.removeAttributes = function() {
		return this.each(function() {
			var attributes = $.map(this.attributes, function(item) {
				return item.name;
			});
			var element = $(this);
			$.each(attributes, function(i, item) {
				element.removeAttr(item);
			});
		});
	}
	/**
	 * 이미지를 base64로 렌더링하여 원하는 타겟에다 넣어줌
	 * 
	 * @param event
	 * @param selector
	 */
	$.fn.heumPreview = function(opt, callback) {
		var file = $(this);
		var previewImage = function() {
			if (!file || !opt.img) {
				return;
			}
			var inputFile = file.get(0);
			var img = opt.img;

			if (window.FileReader) {
				var getFile = inputFile.files[0];
				if (!getFile.type.match(/image\//)) {
					return;
				}
				try {
					var reader = new FileReader();
					reader.onload = function(e) {
						if (opt.background) {
							var image = new Image;
							image.onload = function() {
								var MAX_WIDTH = $(img).width();
								var MAX_HEIGHT = $(img).width();
								var width = image.width;
								var height = image.height;
								var resizeWidth = image.width;
								var resizeHeight = image.height;
								if (width > MAX_WIDTH || height > MAX_HEIGHT) {
									if (width > height) {
										resizeWidth = MAX_WIDTH;
										resizeHeight = Math.round((height * resizeWidth) / width);
									} else {
										resizeHeight = MAX_HEIGHT;
										resizeWidth = Math.round((width * resizeHeight) / height);
									}
								} else {
									resizeWidth = width;
									resizeHeight = height;
								}
								$(img).css({
									"background": 'url(' + e.target.result + ') center',
									"background-repeat": "no-repeat",
									"background-size": resizeWidth + "px " + resizeHeight + "px"
								});
							}
							image.src = e.target.result;
						} else {
							img.attr("src", e.target.result);
						}
					}
					reader.readAsDataURL(getFile);
					if (typeof callback === "function") {
						callback.call(file, getFile)
					}
				} catch (e) {
					console.warn(e.message);
				}
			}
		};
		$(this).change(function() {
			var image = new Image();
			image.onload = function() {
				console.log(image.width);
			};
			previewImage();
		});
	};
	/**
	 * 모바일에서 클릭이 느려서 만든것
	 * @param callback
	 */
	$.fn.heumClick = function(callback) {
		var element = $(this);
		element.on("touchend touchmove click", function(event) {
			if (event.type != 'touchmove') {
				if (!moveContents) {
					cancelHandler(event);
					if (typeof callback === "function") {
						callback.call(this);
					}
				}
				moveContents = false;
				return false;
			} else {
				moveContents = true;
			}
		});
	};
	$.kwangheum = {
		dateUtils: {
			getToday: function() {
				var date = new Date();
				var year = date.getFullYear().toString();
				var month = this.setFillString((date.getMonth() + 1), "0", 2);
				var day = this.setFillString(date.getDate(), "0", 2);
				var hour = this.setFillString(date.getHours(), "0", 2);
				var minute = this.setFillString(date.getMinutes(), "0", 2);
				return year + month + day + hour + minute;
			},
			getSplitToday: function() {
				var date = new Date();
				var year = date.getFullYear().toString();
				var month = this.setFillString((date.getMonth() + 1), "0", 2);
				var day = this.setFillString(date.getDate(), "0", 2);
				return year + division + month + division + day;
			},
			setFillString: function(data, str, digits) {
				var nstr = "";
				data = data.toString();
				if (data.length < digits) {
					for (var i = 0; i < digits - data.length; i++) {
						nstr += str;
					}
				}
				return nstr + data;
			}
		},
		getNewId: function() {
			var date = new Date();
			var year = date.getFullYear().toString();
			var month = this.dateUtils.setFillString((date.getMonth() + 1), "0", 2);
			var day = this.dateUtils.setFillString(date.getDate(), "0", 2);
			var hour = this.dateUtils.setFillString(date.getHours(), "0", 2);
			var minute = this.dateUtils.setFillString(date.getMinutes(), "0", 2);
			var seconds = date.getSeconds();
			var milliseconds = date.getMilliseconds();
			return year + month + day + hour + minute + seconds + milliseconds;
		},
		uuid : function() {
			var d = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return (c=='x' ? r : (r&0x3|0x8)).toString(16);
			});
			return uuid;
		},
		/** 로딩화면 띄워주기
		 * @param open
		 * @param message
		 * @param callback
		 */
		loading: function(open, message, callback) {
			$(".kwangheum-page-loading").remove();
			if (open == undefined || open) {
				message = message == undefined ? '잠시만 기다려주세요' : message;
				$("body").prepend(
					'<div class="kwangheum-page-loading" style="position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 5000;">' +
					'<div style="width: 50%;padding: 2% 6%;position: absolute;margin-left: 25%;top: 160px;z-index: 50001;color:#fff;font-weight: 900;font-size: 3em;text-align: center;">' +
					message +
					'</div>' +
					'<div style="width: 100%;height: 100%;background: #000;opacity: 0.5;"></div>' +
					'</div>'
				);
			}
			if (typeof callback === "function") {
				callback.call(this);
			}
		},
		/**
		 * 파라미터 추출
		 * 
		 * @param val
		 * @returns 쿼리
		 */
		getAllParameter: function(val) {
			var query_string = {};
			var query = window.location.search.substring(1);
			if (val != undefined) { //주소창 url이 아닐경우
				query = val;
			}
			query = query.replace("params=", "");

			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if (typeof query_string[pair[0]] === 'undefined') {
					query_string[pair[0]] = pair[1];
				} else if (typeof query_string[pair[0]] === 'string') {
					var arr = [query_string[pair[0]], pair[1]];
					query_string[pair[0]] = arr;
				} else {
					query_string[pair[0]].push(pair[1]);
				}
			}
			return query_string;
		}
	}

	/**
	 * 모바일에서 클릭시 click이벤트 삭제
	 * 
	 * @param event
	 * @param selector
	 */
	function cancelHandler(event, selector) {
		event.stopPropagation();
		event.preventDefault();
		if (selector != undefined && event.type == 'touchend') {
			selector.off('click');
		}
	}
}(window, document));
