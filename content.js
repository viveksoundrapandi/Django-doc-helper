$(function() {




    chrome.storage.sync.get({
        django_version: '1.3',
    }, function(items) {
        var location1 = $(location).attr('href');

        if (location1.indexOf(items.django_version) == -1) {
            window.location.href = $(location).attr('href').replace(/\/en\/((1.(\d))|dev)/, "/en/" + items.django_version);
        }
    });

    // }

});