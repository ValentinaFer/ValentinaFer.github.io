
var imgh;
var cont = 0;
var imgs = [];

function load(){
    imgs[0] = "Css-images/cookies.png";
    imgs[1] = "Css-images/gal.jfif";
    imgs[2] = "Css-images/raspb.jfif";
    imgh = document.getElementById("img-slide");
    nextImg();  
}

function nextImg(){

    imgh.src = imgs[cont];
    if (cont < imgs.length-1) {
        cont++;
    } else {
        cont = 0;
    }
}

function prevImg(){

    imgh.src = imgs[cont];
    if (cont > 0){
        cont--;
    } else {
        cont = imgs.length-1;
    }

}

function ingredientText(){
    let ingchecked = 0;
    let ings = document.getElementsByName("in");
    let text = document.getElementById("text");

    for (let i = 0; i < ings.length; i++){
        if (ings[i].checked){
            ingchecked++;
        }
    }

    if (ingchecked == ings.length){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

/*
function imgRandom(){
    var img_num = 3;
    var random_n = Math.random();
    var rand1 = Math.round((img_num-1)*random_n)+1;
    img = new Array;
    img[1] = "Css-images/cookies.png";
    img[2] = "Css-images/gal.jfif";
    img[3] = "Css-images/raspb.jfif";
    document.miimagen.src = img[rand1];

}
*/

function submitOrNat(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var submit = [];
    var expresion = /^\w+@\w+(\.\w{3})$/;

    if (!name){
        document.getElementById("name").classList.add('error');
        submit[0] = false;
    } else {
        document.getElementById("name").classList.remove('error');
        submit[0] = true;
    }
    if (!expresion.test(email)){
        document.getElementById("email").classList.add('error');
        submit[1] = false;
    } else {
        document.getElementById("email").classList.remove('error');
        submit[1] = true;
    }
    if (!comment){
        document.getElementById("comment").classList.add('error');
        submit[2] = false;
    } else {
        document.getElementById("comment").classList.remove('error');
        submit[2] = true;
    }

    let notify = document.getElementById("answer");
    if (notify.checked){
        alert("You will be notified when someone answers your comment!");
    }

    let aux = 0;
    for (let index = 0; index < submit.length; index++) {(submit[index] ? aux++: aux)};

    if (aux === submit.length){
        alert("correct");
        var father = document.getElementById("cs");
        var div = document.createElement('div');
        div.className = 'comment';
        var user = document.createElement('p');
        user.className = 'userName';
        var c = document.createElement('p');
        father.appendChild(div);
        user.innerHTML = name;
        c.innerHTML = comment;
        div.appendChild(user);
        div.appendChild(c);
        return false;
    }

    return false;
}
