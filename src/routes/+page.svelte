<section class="h-[90vh] grid place-content-center relative" id="top">
    <div class="px-20 py-80 radial-white">
        <h1 class="text-wrap text-7xl lg:text-9xl font-extrabold gradient z-10 drop-shadow-xl">Petplusplus</h1>
    </div>
    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</section>

    
<section class="bg-sky-500 h-[90vh] grid text-white relative">
    <div class="grid place-content-center gap-16 text-center z-10 radial-blue p-2">
        <h2 class="text-6xl font-bold">Wolltest du schon immer einmal <br> ein Haustier haben?</h2>
        <p class="text-xl lg:text-3xl w-3/5 mx-auto">
            Mit <b>Petplusplus</b> kannst du dir deinen Traum erfüllen! Wähle aus einer Vielzahl von niedlichen Tieren, 
            die du adoptieren und pflegen kannst.
        </p>
        <p class="text-xl lg:text-3xl w-3/5 mx-auto">
            Du kannst dein Haustier füttern, streicheln, trainieren und mit ihm reden.
            Du kannst ihm coole Accessoires kaufen und sein Zuhause dekorieren.
            Je mehr du dich um dein Haustier kümmerst, desto glücklicher und gesünder wird es sein.
        </p>
    </div>
    <img src="sideright.svg" alt="" class="absolute right-0 h-4/5 self-center mr-5">
    <img src="sideleft.svg" alt="" class="absolute left-0 h-4/5 self-center">
</section>








<style lang="postcss">
    #top{
        background: url(bgtile.svg);
        background-size: 50%;
        padding-bottom: 200px;
    }

    .gradient {
        background: linear-gradient(90deg, #e293ff 0%, #6486ff 60%, #64c6ff 70%, #e1ff36 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .radial-white {
        background: radial-gradient(#ffffff 60%, #ffffff00);
    }

    .radial-blue {
        background: radial-gradient(theme('colors.sky.500') 60%, #ffffff00);
    }

    .ocean { 
        height: 170px;
        width: 100%;
        position: absolute;
        overflow: hidden;
        bottom: 0;
        left: 0;
    }

    .wave {
        background: url(wave.svg) repeat-x; 
        position: absolute;
        bottom: -50px;
        width: 6400px;
        height: 198px;
        animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
        transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
        bottom: -45px;
        animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
        opacity: 1;
    }

    @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
    }

    @keyframes swell {
        0%, 100% {
            transform: translate3d(0,-25px,0);
        }
        50% {
            transform: translate3d(0,5px,0);
        }
    }
</style>