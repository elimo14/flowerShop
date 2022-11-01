
var discountCode;
function copy() {
    var discountCode = document.getElementById('discount').value;
    document.getElementById('discount').value = 'کپی شد!';
    return discountCode

}

function buy() {
    var counter = document.getElementById('counter').value;
    document.getElementById('counter').value++;
}

function seeMore() {
    document.getElementById('showmatn').style.display = 'block';
    document.getElementById('seeMore').style.display = 'none';
}

var visibilityShow;
function seeAnswer(item) {
    if (!item.visibilityShow) {
        item.visibilityShow = 'show';

        item.firstElementChild.style.display = 'none';//plus none
        item.firstElementChild.nextElementSibling.style.display = 'inline'//mines show

        item.lastElementChild.style.display = 'block';
        item.lastElementChild.previousElementSibling.style.color = '#f25757';
    } 
    else {
        item.visibilityShow = null;
        item.firstElementChild.style.display = 'inline';//plus show
        item.firstElementChild.nextElementSibling.style.display = 'none'//mines none
        item.lastElementChild.style.display = 'none';
        item.lastElementChild.previousElementSibling.style.color = '#1d7d5e';
    }
}

var app = angular.module('app1', []);
app.controller('ctrlapp1', function ($scope) {
    $scope.imgArray = [
        { src: 'image/giant.png', alt: 'giant', name: 'برگ انجیری غول پیکر ارتفاع110', price: '3863000 تومان', discount: '2897250 تومان', btn: 'خرید این گیاه' },
        { src: 'image/kalanko.png', alt: 'kalanko', name: 'کوانکولا مخملی یک تنه ارتفاع130', price: '3863000 تومان', discount: '2897250 تومان', btn: 'خرید این گیاه' },
        { src: 'image/cactus.png', alt: 'cactus', name: 'کاکتوس افوربیا اینرمیس', price: '3863000 تومان', discount: '2897250 تومان', btn: 'خرید این گیاه' },
        { src: 'image/orchide.png', alt: 'orchide', name: 'گلدان ارکیده مینیاتوری بی همتا', price: '3863000 تومان', discount: '2897250 تومان', btn: 'خرید این گیاه' }
    ]

    $scope.imgArray2 = [
        { src: 'image/Redaforiba.png', alt: 'Redaforiba', name: 'افوربیا قرمز در گلدان بتن ', price: '3863000 تومان', btn: 'خرید این گیاه' },
        { src: 'image/melisaBox.png', alt: 'melisaBox', name: 'باکس گل ملیسا', price: '3863000 تومان', btn: 'خرید این گیاه' },
        { src: 'image/RedRoses.png', alt: 'RedRoses', name: 'دسته گل رز سوپر ممتاز', price: '3863000 تومان', btn: 'خرید این گیاه' },
        { src: 'image/Sansveria.png', alt: 'Sansveria', name: 'سانسوریا سبز کراواتی پر غلاف', price: '3863000 تومان', btn: 'خرید این گیاه' }
    ]

})

var Show;
function menu(ham){
    if (!ham.Show) {
        ham.Show = 'show'
        document.getElementById('menuList').style.display = 'block';
    }
    else {
        ham.Show = null;
        document.getElementById('menuList').style.display = 'none';
    }
    
}