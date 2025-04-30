// JavaScript for Dark/Light Mode Toggle
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const body = document.body;

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = '☀️';
    } else {
        modeToggleBtn.textContent = '🌙';
    }
});

// JavaScript for handling file upload and displaying results
document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.getElementById('media-upload');
    const uploadStatus = document.getElementById('upload-status');
    const resultOutput = document.getElementById('result-output');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        uploadStatus.textContent = 'Uploading and analyzing...';

        // Simulate a delay for analysis (replace with actual API call)
        setTimeout(() => {
            uploadStatus.textContent = 'Analysis complete!';
            resultOutput.innerHTML = `
                <p><strong>Result:</strong> Deepfake detected with 90% confidence.</p>
                <p><strong>Recommendation:</strong> This media is likely manipulated.</p>
            `;
        }, 3000);
    } else {
        uploadStatus.textContent = 'Please select an image or video to upload.';
    }
});