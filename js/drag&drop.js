const dropArea = document.querySelector('.new-product-box');
/* const dragText = document.querySelector('.header'); */
const dropAreaDrag = document.querySelector('.new-product-drag');

var button = dropAreaDrag.querySelector('.new-product-btn');
var input = dropAreaDrag.querySelector('input');

var file;

button.onclick = () => {
  input.click();
};

// when browse
input.addEventListener('change', function () {
  file = this.files[0];
  dropArea.classList.add('active');
  displayFile();
});

// when file is inside drag area
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('active');
  dragText.textContent = 'Release to Upload';
  // console.log('File is inside the drag area');
});

// when file leave the drag area
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
  // console.log('File left the drag area');
  dragText.textContent = 'Drag & Drop';
});

// when file is dropped
dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  // console.log('File is dropped in drag area');

  file = event.dataTransfer.files[0]; // grab single file even of user selects multiple files
  // console.log(file);
  displayFile();
});

function displayFile() {
  var fileType = file.type;
  // console.log(fileType);

  var validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

  if (validExtensions.includes(fileType)) {
    // console.log('This is an image file');
    var fileReader = new FileReader();

    fileReader.onload = () => {
      var fileURL = fileReader.result;
      // console.log(fileURL);
      var imgTag = `<img src="${fileURL}" alt="">`;
      dropArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert('This is not an Image File');
    dropArea.classList.remove('active');
  }
}
