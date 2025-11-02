(function () {
    const style = document.createElement('style');
    style.textContent = `
 .loader-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.8s ease-out;
    }
.main{
    opacity: 0;
    transition: opacity 0.8s ease-in;
    visibility: hidden;
    padding: 20px;
}
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.8s ease-out;
}
.loader {
    display: flex;
    position: relative;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    height: 55px;
    width: 200px;
    overflow: hidden;
}
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
    position: relative;
    align-items: center;
}
.carousel {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    position: absolute;
    width: 100%;
    transform-origin: center;
    animation-delay: 2s;
}
.loader .container:nth-child(3) {
    justify-content: flex-start;
    justify-items: flex-start;
    animation: scroll-up 4s infinite ease-in-out;
    animation-delay: 3s;
}
.loader .container:nth-child(2) {
    justify-content: flex-end;
    justify-items: flex-end;
    animation: scroll-down 4s infinite ease-in-out;
    animation-delay: 3s;
}
.loader .container:nth-child(1) {
    justify-content: flex-end;
    justify-items: flex-end;
    animation: scroll-down 3s infinite ease-in-out;
    animation-delay: 3s;
}
.love {
    background: red;
    display: flex;
    width: 30px;
    height: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    left: 8px;
    margin: 0.8rem 4px;
    transform: rotate(45deg);
    animation-delay: 2s;
}
.love::before, .love::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: red;
}
.love::before {
    left: -16px;
}
.love::after {
    top: -16px;
}
.death {
    display: flex;
    width: 100%;
    height: 55px;
    position: relative;
    align-items: center;
    justify-content: center;
    animation: rotation 3s infinite ease-in-out;
    animation-delay: 1s;
}
.death:after {
    content: '';
    height: 63px;
    position: absolute;
    border-left: 12px solid red;
    transform: rotate(45deg);
    border-radius: 8px;
    top: -4px;
}
.death:before {
    content: '';
    height: 60px;
    position: absolute;
    border-left: 12px solid red;
    transform: rotate(-45deg);
}
.loader:hover {
    animation: none;
}
.robots {
    display: flex;
    width: 100%;
    height: 55px;
    justify-content: space-between;
    background-color: #ff0000;
    border-radius: 0 8px 8px;
    padding: 8px;
    animation-delay: 5s;
}
.robots::after {
    content: '';
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-radius: 50%;
    animation-delay: 2s;
    animation: blink 0.5s 2 forwards;
}
.robots::before {
    content: '';
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-radius: 50%;
    animation-delay: 2s;
    animation: blink 0.5s 2 forwards;
}
@keyframes scroll-up {
    0% {
        transform: translateY(0);
        filter: blur(0);
    }
    30% {
        transform: translateY(-150%);
        filter: blur(10px);
    }
    60% {
        transform: translateY(0);
        filter: blur(0px);
    }
}
@keyframes scroll-down {
    0% {
        transform: translateY(0);
        filter: blur(0);
    }
    30% {
        transform: translateY(150%);
        filter: blur(10px);
    }
    60% {
        transform: translateY(0);
        filter: blur(0px);
    }
}
@keyframes rotation {
    20%, 100% {
        transform: rotate(180deg);
    }
}
@keyframes blink {
    0% {
        height: 0;
    }
    20% {
        height: 12px;
    }
    100% {
        height: 12px;
    }
}
#ghost {
    position: relative;
    scale: 0.8;
}
#red {
    animation: upNDown infinite 0.5s;
    position: relative;
    width: 140px;
    height: 140px;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-areas:
    "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
    "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
    "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
    "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
    "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
    "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
    "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
    "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
    "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
    "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
    "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
    "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
    "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
    "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
}
@keyframes upNDown {
    0%,
    49% {
        transform: translateY(0px);
    }
    50%,
    100% {
        transform: translateY(-10px);
    }
}
#top0,
#top1,
#top2,
#top3,
#top4,
#st0,
#st1,
#st2,
#st3,
#st4,
#st5 {
    background-color: red;
}
#top0 {
    grid-area: top0;
}
#top1 {
    grid-area: top1;
}
#top2 {
    grid-area: top2;
}
#top3 {
    grid-area: top3;
}
#top4 {
    grid-area: top4;
}
#st0 {
    grid-area: st0;
}
#st1 {
    grid-area: st1;
}
#st2 {
    grid-area: st2;
}
#st3 {
    grid-area: st3;
}
#st4 {
    grid-area: st4;
}
#st5 {
    grid-area: st5;
}
#an1 {
    grid-area: an1;
    animation: flicker0 infinite 0.5s;
}
#an18 {
    grid-area: an18;
    animation: flicker0 infinite 0.5s;
}
#an2 {
    grid-area: an2;
    animation: flicker1 infinite 0.5s;
}
#an17 {
    grid-area: an17;
    animation: flicker1 infinite 0.5s;
}
#an3 {
    grid-area: an3;
    animation: flicker1 infinite 0.5s;
}
#an16 {
    grid-area: an16;
    animation: flicker1 infinite 0.5s;
}
#an4 {
    grid-area: an4;
    animation: flicker1 infinite 0.5s;
}
#an15 {
    grid-area: an15;
    animation: flicker1 infinite 0.5s;
}
#an6 {
    grid-area: an6;
    animation: flicker0 infinite 0.5s;
}
#an12 {
    grid-area: an12;
    animation: flicker0 infinite 0.5s;
}
#an7 {
    grid-area: an7;
    animation: flicker0 infinite 0.5s;
}
#an13 {
    grid-area: an13;
    animation: flicker0 infinite 0.5s;
}
#an9 {
    grid-area: an9;
    animation: flicker1 infinite 0.5s;
}
#an10 {
    grid-area: an10;
    animation: flicker1 infinite 0.5s;
}
#an8 {
    grid-area: an8;
    animation: flicker0 infinite 0.5s;
}
#an11 {
    grid-area: an11;
    animation: flicker0 infinite 0.5s;
}
@keyframes flicker0 {
    0%,
    49% {
        background-color: red;
    }
    50%,
    100% {
        background-color: transparent;
    }
}
@keyframes flicker1 {
    0%,
    49% {
        background-color: transparent;
    }
    50%,
    100% {
        background-color: red;
    }
}
#eye {
    width: 40px;
    height: 50px;
    position: absolute;
    top: 30px;
    left: 10px;
}
#eye::before {
    content: "";
    background-color: white;
    width: 20px;
    height: 50px;
    transform: translateX(10px);
    display: block;
    position: absolute;
}
#eye::after {
    content: "";
    background-color: white;
    width: 40px;
    height: 30px;
    transform: translateY(10px);
    display: block;
    position: absolute;
}
#eye1 {
    width: 40px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: 30px;
}
#eye1::before {
    content: "";
    background-color: white;
    width: 20px;
    height: 50px;
    transform: translateX(10px);
    display: block;
    position: absolute;
}
#eye1::after {
    content: "";
    background-color: white;
    width: 40px;
    height: 30px;
    transform: translateY(10px);
    display: block;
    position: absolute;
}
#pupil {
    width: 20px;
    height: 20px;
    background-color: blue;
    position: absolute;
    top: 50px;
    left: 10px;
    z-index: 1;
    animation: eyesMovement infinite 3s;
}
#pupil1 {
    width: 20px;
    height: 20px;
    background-color: blue;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1;
    animation: eyesMovement infinite 3s;
}
@keyframes eyesMovement {
    0%,
    49% {
        transform: translateX(0px);
    }
    50%,
    99% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0px);
    }
}
#shadow {
    background-color: black;
    width: 140px;
    height: 140px;
    position: absolute;
    border-radius: 50%;
    transform: rotateX(80deg);
    filter: blur(20px);
    top: 80%;
    animation: shadowMovement infinite 0.5s;
}
@keyframes shadowMovement {
    0%,
    49% {
        opacity: 0.5;
    }
    50%,
    100% {
        opacity: 0.2;
    }
}
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading-wide {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.color {
    background-color: #3395ff;
}
.l1 {
    width: 15px;
    height: 65px;
    position: absolute;
    animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
.l2 {
    width: 15px;
    height: 60px;
    position: absolute;
    transform: rotate(90deg);
    animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
@keyframes move-h {
    0% {
        top: 0;
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    50% {
        top: 30%;
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    100% {
        top: 100%;
        opacity: 0;
    }
}
@keyframes move-v {
    0% {
        left: 0;
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    50% {
        left: 45%;
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    100% {
        left: 100%;
        opacity: 0;
    }
}
.animation-effect-light {
    animation: effect 0.2s 0.1s infinite linear;
}
.animation-effect-light-d {
    animation: effect 0.3s 0.2s infinite linear;
}
.animation-effect-rot {
    animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
.animation-effect-scale {
    animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
@keyframes effect {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes scale {
    0% {
        scale: 1;
    }
    50% {
        scale: 1.9;
    }
    100% {
        scale: 1;
    }
}
.e1 {
    width: 1px;
    height: 40px;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 8%;
}
.e2 {
    width: 60px;
    height: 1px;
    opacity: 0.8;
    position: absolute;
    top: 8%;
    left: 0;
}
.e3 {
    position: absolute;
    top: 10%;
    left: 12%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 18px;
    color: #3395ff;
}
.e4 {
    width: 1px;
    height: 40px;
    opacity: 0.3;
    position: absolute;
    top: 90%;
    right: 10%;
}
.e5 {
    width: 40px;
    height: 1px;
    opacity: 0.3;
    position: absolute;
    top: 100%;
    right: 0;
}
.e6 {
    position: absolute;
    top: 100%;
    right: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 32px;
    color: #3395ff;
}
.e7 {
    width: 1px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(45deg);
    animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
@keyframes height {
    0% {
        bottom: 0%;
        left: 0%;
        height: 0px;
    }
    25% {
        height: 90px;
    }
    50% {
        bottom: 100%;
        left: 100%;
        height: 90px;
    }
    75% {
        height: 0px;
    }
    100% {
        bottom: 0%;
        left: 0%;
        height: 0px;
    }
}
.e8 {
    width: 20px;
    height: 1px;
    position: absolute;
    bottom: 50%;
    left: 0;
    animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
@keyframes width {
    0% {
        left: 0%;
        width: 0px;
    }
    50% {
        left: 100%;
        width: 90px;
    }
    100% {
        left: 0%;
        width: 0px;
    }
}
    `;
    document.head.appendChild(style);
    const loaderDOM = `
        <div class="loader-container" style="flex-direction: column; gap: 30px;">
            <div id="ghost">
                <div id="red">
                    <div id="pupil"></div>
                    <div id="pupil1"></div>
                    <div id="eye"></div>
                    <div id="eye1"></div>
                    <div id="top0"></div>
                    <div id="top1"></div>
                    <div id="top2"></div>
                    <div id="top3"></div>
                    <div id="top4"></div>
                    <div id="st0"></div>
                    <div id="st1"></div>
                    <div id="st2"></div>
                    <div id="st3"></div>
                    <div id="st4"></div>
                    <div id="st5"></div>
                    <div id="an1"></div>
                    <div id="an2"></div>
                    <div id="an3"></div>
                    <div id="an4"></div>
                    <div id="an5"></div>
                    <div id="an6"></div>
                    <div id="an7"></div>
                    <div id="an8"></div>
                    <div id="an9"></div>
                    <div id="an10"></div>
                    <div id="an11"></div>
                    <div id="an12"></div>
                    <div id="an13"></div>
                    <div id="an14"></div>
                    <div id="an15"></div>
                    <div id="an16"></div>
                    <div id="an17"></div>
                    <div id="an18"></div>
                </div>
                <div id="shadow"></div>
            </div>
            <div class="loader">
                <div class="container">
                    <div class="carousel">
                        <div class="love"></div>
                        <div class="love"></div>
                        <div class="love"></div>
                        <div class="love"></div>
                        <div class="love"></div>
                        <div class="love"></div>
                        <div class="love"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="carousel">
                        <div class="death"></div>
                        <div class="death"></div>
                        <div class="death"></div>
                        <div class="death"></div>
                        <div class="death"></div>
                        <div class="death"></div>
                        <div class="death"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="carousel">
                        <div class="robots"></div>
                        <div class="robots"></div>
                        <div class="robots"></div>
                        <div class="robots"></div>
                        <div class="robots"></div>
                        <div class="robots"></div>
                        <div class="robots"></div>
                    </div>
                </div>
            </div>
            <div class="loading" style="
                position: absolute;
                top: 10px;
                left: 10px;
                z-index: -1;
                transform: scale(3);
                transform-origin: top left;
            ">
                <div class="loading-wide">
                    <div class="l1 color"></div>
                    <div class="l2 color"></div>
                    <div class="e1 color animation-effect-light"></div>
                    <div class="e2 color animation-effect-light-d"></div>
                    <div class="e3 animation-effect-rot">X</div>
                    <div class="e4 color animation-effect-light"></div>
                    <div class="e5 color animation-effect-light-d"></div>
                    <div class="e6 animation-effect-scale">*</div>
                    <div class="e7 color"></div>
                    <div class="e8 color"></div>
                </div>
            </div>
        </div>
    `;
    function loadLoaderImmediately() {
        let loaderContainer = document.getElementById('loaderContainer');
        if (!loaderContainer) {
            loaderContainer = document.createElement('div');
            loaderContainer.id = 'loaderContainer';
            document.body.appendChild(loaderContainer);
        }
        loaderContainer.innerHTML = loaderDOM;
    }
    window.onload = function () {
        setTimeout(() => {
            const loader = document.querySelector('.loader-container');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.visibility = 'hidden';
                    const mainContent = document.querySelector('.main');
                    if (mainContent) {
                        mainContent.style.visibility = 'visible';
                        mainContent.style.opacity = '1';
                    }
                }, 800);
            }
        }, 3000);
    };
    loadLoaderImmediately();
})();