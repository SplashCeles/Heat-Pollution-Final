const images = ['images/Heat_Pollution_p1.png','images/Heat_Pollution_p2.png','images/Heat_Pollution_p3.png','images/Heat_Pollution_p4.png',
                'images/Heat_Pollution_p5.png','images/Heat_Pollution_p6.png','images/Heat_Pollution_p7.png','images/Heat_Pollution_p8.png',
                'images/Heat_Pollution_p9.png',];
let index = 0;

window.addEventListener('load', () => {
    document.addEventListener('click', () => {
        next_img();
    }); 
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            next_img();
        }
    });
    images.forEach(preload_img);
});

function next_img(){
    if (index < images.length-1) index++;
    else index = 0;
    document.getElementById('img').src = images[index];
}

function preload_img(img_path){
    console.log(img_path);
    let img = new Image();
    img.src = img_path;
}
