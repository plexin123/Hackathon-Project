const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const resultDiv = document.getElementById('result');

uploadForm.addEventListener('submit', async (e) => {e.preventDefault();
const file = fileInput.files[0];
const formData = new FormData();
formData.append('file', file);

try{
    const response = await fetch('API url', {method: 'POST',body: formData});
    const data = await response.json();
}
catch (error){
    console.error('Error:', error);
}
});

function displayResult(data){
    resultDiv.innerHTML = <p>Diagnosis: ${Data.diagnosis}</p>
}





