$.ajax({
	type: 'POST',
	crossDomain: false,
	beforeSend: function(xhr, settings) {
    	if (!csrfSafeMethod(settings.type)) {
        	xhr.setRequestHeader("X-CSRFToken", csrftoken)
    	}
    },
    url: '/ajax/check_freshness/',
    success: function(data, status) {

    	var data = JSON.parse(data)

    	// reload page if not fresh
    	if (fresh != data.fresh) {
			location.reload()
		}
    	
    }
})