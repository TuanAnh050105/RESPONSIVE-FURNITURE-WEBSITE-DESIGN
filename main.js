// Menu
let menu = document.querySelector('.menu-icon');     // mở đóng thanh điều hướng
let navbar = document.querySelector('.navbar');     // chứa các liên kết hoặc các mục menu cho người dùng điều hướng giữa các trang trên website
let cart = document.querySelector('.cart');         //thường được dùng để hiển thị số lượng sản phẩm trong giỏ hàng hoặc mở giao diện giỏ hàng 
let login = document.querySelector('.login-form');  //là một form chứa các trường nhập liệu

// Toggle menu
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
};

// Cart toggle
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
};

// Login Form Toggle
document.querySelector('#user-icon').onclick = () => {
    login.classList.toggle('active');// active cho phép người dùng thao tác các nút có lệnh active khác.
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
};

// Remove menu on click on menu links
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('move');
};

// Change header background color and shadow on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector('.scroll-top');  // cho phép người dùng được phép di chuyển ở bất kỳ vị trí nào trở về trang.

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('active', window.scrollY > 0);
});
