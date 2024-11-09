// (() => {

//     function saveData() {
//         const inpFiled = document.getElementById('user-input')
//         const inpValue = inpFiled.value
    
//         localStorage.setItem('userInput', inpValue)

//         const p =document.createElement('p');
//         p.textContent = inpValue;
//         document.body.appendChild(p);
    
//         inpFiled.value = ''
//     }
    
//     document.getElementById('user-btn').addEventListener('click', saveData);

//     function loadData() {
//         const saveData = localStorage.getItem('userInput');
//         if(saveData) {
//             const p = document.createElement('p');
//             p.textContent = saveData;
//             document.body.appendChild(p);
//         } else {
//             console.log('No user input')
//         }
//     }

//     window.onload = loadData
// })()

// (() => {
//     const inputName = document.querySelector('.inputName');
//     const inputSurname = document.querySelector('.inputSurname');
//     const inputPatronymic = document.querySelector('.inputPatronymic');
//     const inputAge = document.querySelector('.inputAge');
//     const inputYearStudy = document.querySelector('.inputYearStudy');
//     const inputFaculty = document.querySelector('.inputFaculty');
//     let studentId = 4; // Начальный ID
//     function renderStudent(student) {
//         return `
//             <tr>
//                 <td>${student.id}</td>
//                 <td>${student.surname}</td>
//                 <td>${student.name}</td>
//                 <td>${student.patronymic}</td>
//                 <td>${student.ageInput} (${student.age} лет)</td>
//                 <td>${student.trainingYear}</td>
//                 <td>${student.faculty}</td>
//             </tr>`;
//     }
//     function saveToLocalStorage(student) {
//         let students = JSON.parse(localStorage.getItem('students')) || [];
//         students.push(student);
//         localStorage.setItem('students', JSON.stringify(students));
//     }
//     function loadFromLocalStorage() {
//         const students = JSON.parse(localStorage.getItem('students')) || [];
//         const tableBody = document.querySelector('tbody');
//         students.forEach(student => {
//             tableBody.innerHTML += renderStudent(student);
//             studentId = Math.max(studentId, student.id + 1); // Обновляем studentId
//         });
//     }
//     function clearInputs() {
//         inputName.value = '';
//         inputSurname.value = '';
//         inputPatronymic.value = '';
//         inputAge.value = '';
//         inputYearStudy.value = '';
//         inputFaculty.value = '';
//     }
//     function seveData() {
//         const data = {
//             id: studentId,
//             surname: inputSurname.value,
//             name: inputName.value,
//             patronymic: inputPatronymic.value,
//             ageInput: inputAge.value,
//             trainingYear: inputYearStudy.value,
//             faculty: inputFaculty.value
//         };
//         saveToLocalStorage(data);
//         renderTable();
//         clearInputs();
//         studentId++;
//     }
//     function getStudent() {
//         const tableBody = document.querySelector('tbody');
//         const btn = document.querySelector('.btn');
//         const errorMessages = document.querySelector('.error-messages');
//         btn.addEventListener('click', (e) => {
//             e.preventDefault();
//             const errors = [];
//             const name = inputName.value.trim();
//             const surname = inputSurname.value.trim();
//             const patronymic = inputPatronymic.value.trim();
//             const ageInput = inputAge.value.trim();
//             const yearStudy = inputYearStudy.value.trim();
//             const faculty = inputFaculty.value.trim();
//             // Проверка на ошибки
//             if (!(name && surname && patronymic)) {
//                 errors.push('Name or surname or patronymic is required!');
//             }
//             if (!ageInput) {
//                 errors.push('Age is required!');
//             } else {
//                 const today = new Date();
//                 const birthday = new Date(ageInput);
//                 if (birthday > today) {
//                     errors.push('Дата рождения не может быть в будущем!');
//                 }
//             }
//             if (!yearStudy) {
//                 errors.push('Year of study is required!');
//             } else {
//                 const today = new Date();
//                 const yearStudyDate = new Date(yearStudy);
//                 const minYearStudyDate = new Date('2000-01-01');
//                 if (yearStudyDate > today || yearStudyDate < minYearStudyDate) {
//                     errors.push('Введите корректную дату начала обучения');
//                 }
//             }
//             if (!faculty) {
//                 errors.push('Faculty is required!');
//             }
//             if (errors.length > 0) {
//                 errorMessages.innerHTML = '';
//                 errors.forEach((error) => {
//                     const p = document.createElement('p');
//                     p.textContent = error;
//                     errorMessages.appendChild(p);
//                 });
//             } else {
//                 const today = new Date();
//                 const birthday = new Date(ageInput);
//                 let age = today.getFullYear() - birthday.getFullYear();
//                 const m = today.getMonth() - birthday.getMonth();
//                 if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
//                     age--;
//                 }
//                 let coursInfo = '';
//                 const yearStudyDate = new Date(yearStudy);
//                 const startYear = yearStudyDate.getFullYear();
//                 const endYear = startYear + 4;
//                 const currentYear = today.getFullYear();
//                 const currentYearMonth = today.getMonth();
//                 if (currentYear > endYear || (currentYear === endYear && currentYearMonth >= 8)) {
//                     coursInfo = 'закончил';
//                 } else {
//                     let checkDate = currentYear - startYear;
//                     if (currentYearMonth >= 8) {
//                         checkDate++;
//                     }
//                     coursInfo = `${checkDate} курс`;
//                 }
//                 let trainingYear = `${startYear} - ${endYear} (${coursInfo})`;
//                 const student = {
//                     id: studentId,
//                     name,
//                     surname,
//                     patronymic,
//                     ageInput,
//                     age,
//                     trainingYear,
//                     faculty
//                 };
//                 const studentHtml = renderStudent(student);
//                 tableBody.innerHTML += studentHtml;
//                 saveToLocalStorage(student); // Сохраняем студента в localStorage
//                 studentId++;
//                 clearInputs();
//                 errorMessages.innerHTML = '';
//             }
//         });
//     }
//     // Загрузка студентов из localStorage при загрузке страницы
//     window.onload = loadFromLocalStorage;
//     getStudent();
// })();
