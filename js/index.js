window.onload = function () {
    let home = document.getElementById('home');
    //onmouseenter,onmouseleave  onmouseover,onmouseout
    home.onmouseenter = function () {
        home.style.color = 'red';
    };
    home.onmouseleave = function () {
        home.style.color = '#fff';
    };
    let activeColor = '#00c1de', inactiveColor = '#e4e3e3';
    let Btm = document.getElementsByClassName('Btm');
    let BtmBotton = Btm[0].getElementsByTagName('li');
    console.log(Btm);
    //点击小圆按钮会亮！
    /*for (let i = 0; i < BtmBotton.length; i++) {
        BtmBotton[i].onmouseenter = function () {
            this.style.backgroundColor = activeColor;
        };
        BtmBotton[i].onmouseleave = function () {
            this.style.backgroundColor = inactiveColor;
        }
    }*/
    //点击小圆按钮移动图片
    for(let i = 0;i < BtmBotton.length;i++){
        BtmBotton[i].onclick = function () {
            if(current === i){
                return;
            }
            next = i;
            if(next > current){
                bannerImg[next].style.left = w + 'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left:-0});
            }else{
                bannerImg[next].style.left = -w +'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left:-0});
            }
            BtmBotton[current].classList.remove('hot');
            BtmBotton[next].classList.add('hot');

            current = next;
        }
    }


    let diaryList = document.getElementsByClassName('dairyList')[0];
    let listLi = diaryList.getElementsByTagName('li');
    for (let i = 0; i < listLi.length; i++) {
        listLi[i].onclick = function () {
            for (let j = 0; j < listLi.length; j++) {
                listLi[j].style.borderBottom = 'none';
            }
            this.style.borderBottom = '1px solid #000';
        }
    }
    /*let tabList = document.querySelectorAll('.tabList p');
    tabList.forEach(function (elem,index){
        elem.onmouseenter = function () {
            for(let i = 0;i < tabList.length;i++){
                tabList[i].classList.remove('hot');
            }
           this.classList.add('hot');
        }
    })*/
    //第一个轮播效果
   /* let index = 0;
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerImg = document.querySelectorAll('.bannerImg li');
    BtmBotton[0].style.backgroundColor = activeColor;
    rightBtn.onclick = function () {
        index++;
        if (index == bannerImg.length) {
            index = 0;
        }
        console.log(index);
        bannerImg.forEach(function (ele) {
            // console.log(ele);
            ele.style.zIndex = 1;
        });
        bannerImg[index].style.zIndex = 998;
        for (let j = 0; j < BtmBotton.length; j++) {
            BtmBotton[j].style.backgroundColor = inactiveColor;
        }
            BtmBotton[index].style.backgroundColor = activeColor;

    };
    leftBtn.onclick = function () {
        index--;
        if (index < 0) {
            index = bannerImg.length - 1;
        }
        console.log(index);
        bannerImg.forEach(function (ele) {
            // console.log(ele);
            ele.style.zIndex = 1;
        });
        bannerImg[index].style.zIndex = 998;
        Array.prototype.forEach.call(BtmBotton,function (ele) {
            ele.style.backgroundColor = inactiveColor;
        });
        BtmBotton[index].style.backgroundColor = activeColor;
    };*/
   //第二个轮播图
        let current = 0 , next = 0;
        let rightBrn = document.querySelector('.rightBtn');
        let leftBrn = document.querySelector('.leftBtn');
        let bannerImg = document.querySelectorAll('.bannerImg > li');
        let w = bannerImg[0].offsetWidth;
        let flag = true;
        BtmBotton[0].classList.add('hot');
        rightBrn.onclick = function () {
            if (!flag){
                return;
            } else{
                flag = false;
            }
            next++;
            if (next === bannerImg.length){
                next = 0;
            }
            bannerImg[next].style.left = w + 'px';
            animate(bannerImg[current],{left:-w});
            animate(bannerImg[next],{left:0},function () {
                flag = true;
            });
            BtmBotton[current].classList.remove('hot');
            BtmBotton[next].classList.add('hot');
            current = next;
        };
        leftBrn.onclick = function () {
            next--;
            if (next < 0){
                next = bannerImg.length - 1;
            }
            bannerImg[next].style.left =  -w + 'px';
            animate(bannerImg[current],{left:w});
            animate(bannerImg[next],{left:0});
            BtmBotton[current].classList.remove('hot');
            BtmBotton[next].classList.add('hot');
            current = next;
        };
       /* for (var i =0;i < BtmBotton.length;i++){
            BtmBotton[i].Chris = i;
            BtmBotton[i].onclick = function () {
                Array.prototype.forEach.call(BtmBotton,function (elem) {
                    elem.style.backgroundColor = inactiveColor;
                });
                bannerImg.forEach(function (ele) {
                    ele.style.zIndex = 1;
                });
                this.style.backgroundColor = activeColor;
                bannerImg[this.Chris].style.zIndex = 999;
            }
        }*/
        let bannerLeft = document.querySelector('.bannerLeft');
        let t = setInterval(rightBrn.onclick, 3000);
        bannerLeft.onmouseenter = function () {
            clearInterval(t)
        };
        bannerLeft.onmouseleave = function () {
            t = setInterval(rightBrn.onclick, 3000)
        };
        let ViewH = window.innerHeight;
        let imgs = document.querySelectorAll('.delayLoad');
        let positionArr = [];
        imgs.forEach(function (ele) {
            parent =  ele.offsetParent;
            positionArr.push(parent.offsetTop + ele.offsetTop)
        });
        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop;
            for (let i=0;i<positionArr.length;i++){
                if (ViewH + scrollTop >= positionArr[i] + 60){
                    if (!imgs[i].src){
                        imgs[i].src = imgs[i].getAttribute('aa')
                    }
                }
            }

        }
};

