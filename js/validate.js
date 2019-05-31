$(function () {
	$("form").validate({
		rules: {
			url: {
				required: true,
			},
		},
		messages: {
			url: {
				required: 'ボタンを押して下さい。',
			},
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "url") {
				error.insertAfter("#form");
			}
		},
		submitHandler: function () {
			send_ajax();
		}
	});
})

