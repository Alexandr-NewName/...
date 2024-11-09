(() => {

    function saveData() {
        const inpFiled = document.getElementById('user-input')
        const inpValue = inpFiled.value
    
        localStorage.setItem('userInput', inpValue)

        const p =document.createElement('p');
        p.textContent = inpValue;
        document.body.appendChild(p);
    
        inpFiled.value = ''
    }
    
    document.getElementById('user-btn').addEventListener('click', saveData);

    function loadData() {
        const saveData = localStorage.getItem('userInput');
        if(saveData) {
            const p = document.createElement('p');
            p.textContent = saveData;
            document.body.appendChild(p);
        } else {
            console.log('No user input')
        }
    }

    window.onload = loadData
})()

