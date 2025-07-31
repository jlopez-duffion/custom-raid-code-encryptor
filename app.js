document.addEventListener("DOMContentLoaded", (event) => {

    const formElem = document.getElementById('raidForm');
    const submitBtn = document.getElementById('formSubmit');
    const outputElem = document.querySelector('.decrypted-code-output');

    formElem.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    let formData = new FormData(formElem, submitBtn);
    const raidCode = formData.get('code');
    const cryptKey = formData.get('key');

    let splitKey = cryptKey.split('');
    let splitCode = raidCode.split('');
    
    let encrypted = [
        splitCode[splitKey[0] - 1],
        splitCode[splitKey[1] - 1],
        splitCode[splitKey[2] - 1],
        splitCode[splitKey[3] - 1],
        splitCode[splitKey[4] - 1],
        splitCode[splitKey[5] - 1],
                    ].join("");
    
    outputElem.textContent = encrypted;
    
    });

});