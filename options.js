// Saves options to chrome.storage
function save_options() {
    var django_version = document.getElementById('django-version').value;

    chrome.storage.sync.set({
        django_version: django_version,

    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        django_version: '1.3',
    }, function(items) {
        document.getElementById('django-version').value = items.django_version;

    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);