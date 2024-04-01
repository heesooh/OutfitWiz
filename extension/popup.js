var holder = document.getElementById('holder');
var results = document.getElementById('results');
var cancelButton = document.getElementById('cancelButton');
var uploadButton = document.getElementById('uploadButton');

holder.innerText = "DROP FILE HERE";

var tests = {
    filereader: typeof FileReader != 'undefined',
    dnd: 'draggable' in document.createElement('span'),
    formdata: !!window.FormData,
    progress: "upload" in new XMLHttpRequest
};

if (tests.dnd) {
    holder.ondragover = function (e) {
        this.className = 'hover';
        e.preventDefault();
        return false;
    };
    holder.ondragend = function () {
        this.className = '';
        return false;
    };
    holder.ondragleave = function () {
        this.className = '';
        return false;
    };
    holder.ondrop = function (e) {
        e.preventDefault();
        this.className = '';
        var imgSrc;
        // Check if the dropped content is a file or a URL
        if (e.dataTransfer.files.length > 0) {
            // If dropped content is a file, create a URL from the file object
            var file = e.dataTransfer.files[0];
            imgSrc = URL.createObjectURL(file);
        } else {
            // If dropped content is a URL, extract the URL
            var htmlContent = e.dataTransfer.getData("text/html");
            var div = document.createElement("div");
            div.innerHTML = htmlContent;
            imgSrc = div.querySelector('img').src;
        }

        // Create an image element and set its source to the obtained URL
        var imgElement = document.createElement('img');
        imgElement.src = imgSrc;

        // Clear any previous results and append the image element
        results.innerHTML = '';
        results.appendChild(imgElement);
    };
}

// Update cancel button functionality
cancelButton.addEventListener('click', function() {
    results.innerHTML = '';
});

// Update upload button functionality
uploadButton.addEventListener('click', function() {
    window.open('http://localhost:5173/product', '_blank');
});
