document.addEventListener("DOMContentLoaded", function(event) {

    // DOM Elements
    var fileCanvas = document.getElementById('fileCanvas');
    var fileUpload = document.getElementById('fileUpload');
    var pdfTitleP = document.getElementById('pdfTitleP');
    var pdfTitle = document.getElementById('pdfTitle');
    var inputPdfFile = document.getElementById('pdfFile');
    var fileObject = document.getElementById('fileObject');
    var fileIframe = document.getElementById('fileIframe');
    var titleEm = document.getElementById('pdfTitle');

    fileCanvas.style.visibility = "hidden";
    pdfTitleP.style.visibility = "hidden";


    inputPdfFile.onchange = function(e) {

        if (inputPdfFile.files[0].type != 'application/pdf') {
            alert("Please, select a PDF file.")
            e.preventDefault();
            return;
        }

        var filePdfBlob = new Blob([inputPdfFile.files[0]], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(filePdfBlob);


        fileObject.setAttribute('data', fileURL);
        fileIframe.setAttribute('src', fileURL);
    };

    fileIframe.onload = function(e) {
        fileCanvas.style.visibility = "visible";
        pdfTitleP.style.visibility = "visible";
        pdfTitle.innerText = inputPdfFile.files[0].name;

        if (fileUpload.classList.contains("w-100")) {
            fileUpload.classList.remove("w-100");
            fileUpload.classList.add("w-25")
        }

    };
});