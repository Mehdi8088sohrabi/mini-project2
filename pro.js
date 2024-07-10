const h1Elements = document.querySelectorAll('.hed');
const pElements = document.querySelectorAll('.para');

h1Elements.forEach((h1, index) => {
    const icon = h1.querySelector('i');
    const paragraph = pElements[index];

    h1.addEventListener('click', function() {
        if (icon.classList.contains('fa-arrow-down')) {
            icon.classList.remove('fa-arrow-down');
            icon.classList.add('fa-arrow-up');
            paragraph.style.display = 'block'; // نمایش پاراگراف
            h1.style.backgroundColor = 'rgb(77, 73, 73)'; // تغییر بک‌گراند h4 به رنگ مورد نظر
        } else {
            icon.classList.remove('fa-arrow-up');
            icon.classList.add('fa-arrow-down');
            paragraph.style.display = 'none'; // عدم نمایش پاراگراف
            h1.style.backgroundColor = 'grey'; // بازگرداندن بک‌گراند h4 به حالت اولیه
        }
    });
});
