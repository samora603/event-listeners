const fileInput = document.getElementById('fileInput');
const fileCountDisplay = document.getElementById('fileCount');
const saveButton = document.querySelector('.saveButton');
const checkButton = document.querySelector('.checkButton');
const output = document.getElementById('output');

let fileCount = localStorage.getItem("fileCount") ? parseInt(localStorage.getItem("fileCount")) : 0;
fileCountDisplay.textContent = `File count : ${fileCount}`;

fileInput.addEventListener("change", e => {
    const newFiles = fileInput.files.length;

    fileCount += newFiles;
    fileCountDisplay.textContent  = `File count : ${fileCount}`;
    localStorage.setItem("fileCount", fileCount);
})

saveButton.addEventListener("click", e => {
    localStorage.setItem("fileCount", fileCount);
    alert("number of files uploaded saved to local storage");
})
checkButton.addEventListener("click", e =>{
    const output = document.getElementById('output');
    const value  = localStorage.getItem("fileCount")
    if(value !== null){
        output.innerHTML = `You have uploaded ${value} files`;
     }else{
        output.innerHTML = `You have not uploaded any files`
     }
})