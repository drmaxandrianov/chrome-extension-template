chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
	$("#qrcode").html("");
	$('#qrcode').qrcode({
		width: 300,
		height: 300,
		text: tablink
	});
	$("#customText").focus();
});

$("#custom_qr_button").click(function() {
	$("#qrcode").html("");
	$('#qrcode').qrcode({
		width: 300,
		height: 300,
		text: $('#customText').val()
	});
});

$("#scan_qr_button").click(function() {
	chrome.tabs.create({'url': "http://qr.tools.pixelowner.com/"});
});

$("#customText").keyup(function(event){
    //if(event.keyCode == 13){
        $("#custom_qr_button").click();
    //}
});