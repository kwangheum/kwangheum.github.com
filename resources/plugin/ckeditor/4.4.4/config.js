/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	//나광흠 추가
	config.image_previewText = ' ';
	config.filebrowserImageUploadUrl = ctx+"/file/upload/image.it?type=Images";
	disableAutoInline = true;
	config.fillEmptyBlocks = false;
	config.enterMode = CKEDITOR.ENTER_BR;
	config.shiftEnterMode = CKEDITOR.ENTER_BR;
	//나광흠 추가 끝
};
