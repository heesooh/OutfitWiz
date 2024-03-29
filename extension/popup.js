document.getElementById('submitButton').addEventListener('click', function() {
  var fileInput = document.getElementById('imageInput');
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      var imageData = reader.result;
      // Open a new tab with the specified URL
      chrome.tabs.create({ url: "http://localhost:5173/product" });
    };
  }
});