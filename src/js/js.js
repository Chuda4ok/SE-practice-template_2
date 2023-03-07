// виклик меню друку
const printButton = document.getElementById('print-btn');
printButton.addEventListener('click', () => {
    window.print();
});

const imageInput = document.querySelector('#image-input');
const premerDiv = document.querySelector('.premer');

imageInput.addEventListener('change', function () {
    // Отримати вибраний файл
    const file = imageInput.files[0];

    // Створити URL для файлу
    const imageUrl = URL.createObjectURL(file);

    // Змінити фон div на обране зображення
    premerDiv.style.backgroundImage = `url(${imageUrl})`;
    premerDiv.style.backgroundSize = 'cover';
    premerDiv.style.backgroundPosition = 'center';
});

function f1() {




    //додавання елементу
    let printContainet = document.querySelector('#print-container');
    let arr;
    let date = document.querySelector('#date').value;
    let grup = document.querySelector('#grup').value;
    let teach = document.querySelector('#teach').value;
    let namesString = document.querySelector('#surname').value;
    // let color = document.querySelector('#color').value;

    arr = namesString.split(",").map(name => name.trim());
    for (let i = 0; i < arr.length; i++) {
        let divPrint = document.createElement('div');

        //дозволяе редагрувати текс
        divPrint.setAttribute("contenteditable", "true");



        divPrint.classList.add('print-page');
        // a.style.background = color;
        divPrint.innerHTML = `дата проведення:${date}<br>номер нупи №${grup}<br>викладач:${teach}<br>кому:${arr[i]}`;
        printContainet.append(divPrint)


    }

    // Зміна фону print-page
    const backgroundDiv = document.querySelectorAll('.print-page');
    const file = imageInput.files[0];

    // Створити URL для файлу
    const imageUrl = URL.createObjectURL(file);

    // Змінити фон div на обране зображення
    for (let i = 0; i < backgroundDiv.length; i++) {
        backgroundDiv[i].style.backgroundImage = `url(${imageUrl})`;
        backgroundDiv[i].style.backgroundSize = 'cover';
        backgroundDiv[i].style.backgroundPosition = 'center';
    }


}

document.querySelector('.b').onclick = f1;
