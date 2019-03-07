<?php

include '../Mobile-Detect/Mobile_Detect.php';
$detect = new Mobile_Detect();

if (!$detect->isMobile()  ) {
    header('Location: /');
    exit(0);
}

$version = 2;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900" rel="stylesheet">

    <link rel="stylesheet" href="../js/jquery.bxslider.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="icon-pplant/style.css">
    <link rel="stylesheet" href="css/threesixty.css" media="screen" type="text/css" />
    <link rel="stylesheet" href="css/spots-style.css" media="screen" type="text/css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <link rel="stylesheet" href="css/main.css">
    <title>Plug & Plant!</title>
</head>
<body>


    <div class="video-modal">


        <a href="#" class="btn btn-close"><i class="fa fa-times"></i></a>
        <iframe width="70%" height="480" src="https://www.youtube.com/embed/lmOVa5Mq9Z8" frameborder="0" allowfullscreen></iframe>
    </div>


    <div class="loading-wrapper loading-wrapper-intro">
        <div class="loading-container">
            <!-- <div class="pulse"></div> -->
            <svg id="loader-plant" width="87.75px" height="87.75px">
                <g id="grupo1">
                    <path id="circulo" fill="none" stroke="#69AE4C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                        M43.25,83.917c22.183,0,40.167-17.983,40.167-40.167c0-22.183-17.984-40.166-40.167-40.166c-22.183,0-40.167,17.983-40.167,40.166
                        c0,11.698,4.764,21.461,12.895,29.228C28.432,84.874,43.25,79.207,43.25,60.541v-27.5"/>
                    
                    <line id="lineaI" fill="none" stroke="#69AE4C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="35.999" y1="44.498" x2="43.25" y2="50.75"/>
                    
                    <line id="lineaD" fill="none" stroke="#69AE4C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.374" y1="40.704" x2="43.25" y2="44.828"/>
                </g>
                <path id="hoja" fill="none" stroke="#69AE4C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                        M51.798,57.997c4.721,0,8.547-3.827,8.547-8.548c0-10.225-10.043-28.997-17.095-28.997S26.155,39.225,26.155,49.449
                        c0,4.721,3.827,8.548,8.547,8.548"/>
            </svg>
        </div>
    </div>
    
    <!-- MENU -->
    <div class="menu">
        <!-- franjas background -->
        <div class="franja"></div>
        <div class="franja"></div>
        <div class="franja"></div>
        <div class="franja"></div>
        <div class="franja"></div>
        <div class="franja"></div>
        <div class="franja"></div>
        <div class="franja"></div>
        
        <div class="menuContent" id="menuContent">
            <nav class="menuList">
                <ul>
                    <li class="menuItem">
                        <a href="#" class="btnVideo">Play Video</a>
                    </li>
                    <li class="menuItem">
                        <a id="goSection01">Plug & Plant</a>
                    </li>
                    <li class="menuItem">
                        <a id="goSection02">Module Outside</a>
                    </li>
                    <li class="menuItem">
                        <a id="goSection03">Module Inside</a>
                    </li>
                    <li class="menuItem">
                        <a id="goSection04">Plugs Gallery</a>
                    </li>
                    <li class="menuItem">
                        <a id="goSection05" class="about">About</a>
                    </li>
                    <li class="menuItem">
                        <a id="goSection06">Contact</a>
                    </li>
                    <li class="menuItem">
                        <a href="#" class="pPrivacy">Privacy Policy</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <!-- MENU -->
    
    <div id="contentWrapper" class="contWrapper">
        
        <!-- TopWrapper TopWrapper-->
        <div class="TopWrapper content" data-autocenter="2">
            <div class="TopWrapperContainer">
                <div class="logo"><img src="img/plug_logo.png" alt=""></div>
                <!-- BOTONES MENU -->
                <div class="containerBurger">
                    <svg class="burger translate" width="100" height="100" >
                        <path id="first" d="M 25 40 L 60 40 C 90 50, 55 100, 20 65 A 51 36 0 0 1 25 25 L 85 80"></path>
                        
                        <path id="second" d="M 75 60 L 40 60 C 10 60, 15 15, 60 25 A 40 30, 0, 1, 1, 20 80 L 80 25"></path> 
                    </svg>

                    <div id="open" class="abrir"></div>
                </div>
                <!-- BOTONES MENU -->
                <div class="descriptions"></div>
                <div class="btnContent">
                    
                </div>
                <div class="socialShare">
                    <a href="https://www.facebook.com/PLUG-PLANT-1421521361489870/" target="_blank"><i class="icon-fb"></i></a>
                    <a href="https://www.youtube.com/channel/UCVfA5wF2NJGrAXSZyFWpCrQ" target="_blank"><i class="icon-youtube"></i></a>
                </div>
            </div>
        </div>
        <!-- TopWrapper -->

        <!-- Imagenes --> 
        <!-- section01 control de iluminación y crecimiento -->
        <div id="section01content" class="slidesContent ">
            <div class="bgGradient layer2"></div>

            <ul class="bxslider layer1">
              <li>
                <div class="images" style="background-image:url(img/sala_noche.jpg);"></div>
                <div class="images apagar" style="background-image:url(img/sala_dia.jpg);"></div>
              </li>
              <li>
                <div class="images" style="background-image:url(img/cocina_noche.jpg);"></div>
                <div class="images apagar" style="background-image:url(img/cocina_dia.jpg);"></div>
              </li>
              <li>
                <div class="images" style="background-image:url(img/estudio_noche.jpg);"></div>
                <div class="images apagar" style="background-image:url(img/estudio_dia.jpg);"></div>
              </li>
            </ul>

            <div class="instrucciones layer3">
                <div class="instrucContent">
                    <h2 class="titleBlack">This is Plug & Plant</h2>
                    <p class="txtBlack">Press the buttons to</p>
                    <p class="txtBlack">change the lighting</p>
                    <p class="txtBlack">and the growth of plants.</p>
                </div>
            </div>

            <!-- SECUENCIA CRECIMIENTO PLANTA -->
            <div id="secuencia" class="layer3">
                <img id="planta" src="secuencia/1.png" alt="">
            </div>

            <!-- CONTROLADORES -->
            <div id="controladores" class="layer3">

                <!-- ILUMINACION -->
                <div class="slidewrap">
                    <div class="handleContainer">
                        <div id="handle" class="handle active">
                            <i class="icons icon-sol"></i>
                        </div>
                        <div id="handle2" class="handle">
                            <i class="icons icon-luna"></i>
                        </div>
                    </div>
                </div>

                <!-- CRECIMIENTO PLANTA -->
                <div class="slidewrap">
                    <div class="handleContainer">
                        <div id="handle3" class="handle">
                            <i class="icons icon-arbol"></i>
                        </div>
                        <div id="handle4" class="handle active">
                            <i class="icons icon-hoja"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BOTON MORE INFO -->
            <div class="btnContentNegro layer3">
                <a id="btnMoreSection01" class="btnNegroTxt">More Info</a>
            </div>

            <div id="moreInfoSection01" class="moreInfo layer4">
                <div class="bgGradient"></div>
                <div class="descriptions">
                    <div id="section01txt" class="sectionActive">
                        <div class="headPlanta">
                            <img src="img/moreInfoPlanta.png" alt="">
                        </div>
                        <h2 class="title">Meet Plug and Plant!</h2>
                        <p>It all started as an international workshop specialized in VERTICAL GARDENS to give city dwellers the opportunity of being in touch with nature and to enjoy its benefits.</p>

                        <p>You will only need 10 minutes to install it on a plain wall, add the plugs to the base, download the Plug & Plant app to your phone and water your vertical garden only once every 15 days.</p>

                        <p>Enjoy the benefits of having your plants within reach at your workspace and house, harvesting your own dinner, increase productivity, reduce stress level and purify the air. 
                        </p>
                    </div>
                </div>
                <div class="btnContentNegro">
                    <a id="btnCloseSection01" class="btnNegroTxt">Close</a>
                </div>
            </div>

            <!-- BOTON VERDE GET YOURS -->
            <div class="btnContentGreen layer3">
                <a class="btnGetYours" href="https://shop.trycelery.com/page/58aca650df2a671200e45e26" >Get <br> yours</a>
            </div>
        </div>

        <!-- section02 360 outside -->
        <div id="section02content" class="slidesContent sectionHide">
            <img src="../img/rotation-img.png" class="rotation-img" alt="">
            <div id="threesixty">
                <div id="spinner">
                    <span>0%</span>
                </div>
                <ol id="threesixty_images"></ol>
            </div>
            <div id="spot_01" class="spots">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                        <img src="iconos/icono6_wifi1.png">
                    </div>
                    <h3 class="greenTitle">WIFI connectivity</h3>
                    <a id="btnMoreSection02" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection02" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                <img src="iconos/icono6_wifi1.png">
                            </div>
                            <h3 class="greenTitle">WIFI connectivity</h3>
                            <p class="iconBlackTxt">Just by downloading the app you will be able to know, in real time, what your Plug & Plant needs anytime and anywhere you are.</p>
                        </div>
                    </div>
                    <div class="btnContentNegro">
                        <a id="btnCloseSection02" class="btnNegroTxt btnsCloseIcons">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

               <!--  <div id="ojito_01" class="btnOjito layer3"></div> -->
            </div>
            
            <div id="spot_02">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                        <img src="iconos/icono1_easy2.png">
                    </div>
                    <h3 class="greenTitle">EASY TO USE & INSTALL</h3>
                    <a id="btnMoreSection03" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection03" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                 <img src="iconos/icono1_easy2.png">
                            </div>
                            <h3 class="greenTitle">EASY TO USE & INSTALL</h3>
                            <p class="iconBlackTxt">Just install it directly on the wall, download the PLUG & PLANT app, insert the plugs, and your Plug & Plant will be ready to grow.</p>
                        </div>
                    </div>
                    <div class="btnContentNegro">
                        <a id="btnCloseSection03" class="btnNegroTxt btnsCloseIcons">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div id="spot_03">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                         <img src="iconos/icono4_interlockable3.png">
                    </div>
                    <h3 class="greenTitle">INTERLOCKABLE</h3>
                    <a id="btnMoreSection04" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection04" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                               <img src="iconos/icono4_interlockable3.png">
                            </div>
                            <h3 class="greenTitle">INTERLOCKABLE</h3>
                            <p class="iconBlackTxt">Its modular system will allow you to easily display the panels horizontally and vertically, obtaining infinite design possibilities that will transform any type of space into an incredible natural ecosystem.</p>
                        </div>
                    </div>
                    <div class="btnContentNegro">
                        <a id="btnCloseSection04" class="btnNegroTxt btnsCloseIcons">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div id="spot_04">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                        <img src="iconos/icono5_smart4.png">
                    </div>
                     <h3 class="greenTitle">SMART</h3>
                    <a id="btnMoreSection05" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection05" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                              <img src="iconos/icono5_smart4.png">
                            </div>
                             <h3 class="greenTitle">SMART</h3>
                             <p class="iconBlackTxt">It senses moisture, temperature, light, and sends notifications to the PLUG & PLANT App on your smartphone, so you can stay in touch with your plants all the time, and even receive tips to keep them healthy and growing.</p>
                        </div>
                    </div>
                    <div class="btnContentNegro">
                        <a id="btnCloseSection05" class="btnNegroTxt btnsCloseIcons">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>


            <div id="spot_05">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                        <img src="iconos/icono7_aesthetic5.png">
                    </div>
                    <h3 class="greenTitle">AESTHETIC DESIGN</h3>
                    <a id="btnMoreSection06" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection06" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                <img src="iconos/icono7_aesthetic5.png">
                            </div>
                            <h3 class="greenTitle">AESTHETIC DESIGN</h3>
                             <p class="iconBlackTxt">This vertical garden is designed with a clean and neutral aesthetic that allows any user to easily incorporate it in all kinds of spaces. The friendly design gives any space a decorative touch while also enjoying a vertical garden in those indoor walls, corners or spots you never thought before.</p>
                        </div>
                    </div>
                    <div class="btnContentNegro">
                        <a id="btnCloseSection06" class="btnNegroTxt btnsCloseIcons">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div id="spot_06">
                 <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                         <img src="iconos/icono2_versatil6.png">
                    </div>
                    <h3 class="greenTitle">VERSATILE</h3>
                    <a id="btnMoreSection07" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection07" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                 <img src="iconos/icono2_versatil6.png">
                            </div>
                            <h3 class="greenTitle">VERSATILE</h3>
                              <p class="iconBlackTxt">You can interlock as many modules as you want, and choose from more than 30 varieDes of species of PLUGS to make a culinary or ornamental smart verDcal garden. Changing plants has never been so easy; you simply remove the old plugs and insert the new ones.</p>
                         </div>
                        <div class="btnContentNegro">
                            <a id="btnCloseSection07" class="btnNegroTxt btnsCloseIcons">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

          <div id="spot_07">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                         <img src="iconos/icono9_social.png">
                    </div>
                    <h3 class="greenTitle">SOCIAL</h3>
                    <a id="btnMoreSection08" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection08" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                 <img src="iconos/icono9_social.png">
                            </div>
                            <h3 class="greenTitle">SOCIAL</h3>
                              <p class="iconBlackTxt">PLUG & PLANT APP gives you the possibility to share the status of your plants on social media and keep in touch with other PLUG & PLANTERS near you; share Dps or download recipes. You can also gain exchangeable points at the PLUG & PLANT STORE.</p>
                         </div>
                        <div class="btnContentNegro">
                            <a id="btnCloseSection08" class="btnNegroTxt btnsCloseIcons">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="legales">
                <p>*Disclaimer: there may be some changes on the features of this product at time of delivery.</p>
                <p>**Module must be connected to an alectric power to work properly.</p>
            </div>
        </div>

        <div id="section03content" class="slidesContent sectionHide">
            <img src="../img/rotation-img.png" class="rotation-img" alt="">
            <div id="threesixty_in">
                <div id="spinner_in">
                    <span>0%</span>
                </div>
                <ol id="threesixty_images_in"></ol>
            </div>

            <div id="spot_01_in">

                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                          <img src="iconos/icono3_hydroponic.png">
                    </div>
                     <h3 class="greenTitle">HYDROPONIC TECHNOLOGY</h3>
                    <a id="btnMoreSection10" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection10" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                  <img src="iconos/icono3_hydroponic.png">
                            </div>
                             <h3 class="greenTitle">HYDROPONIC TECHNOLOGY</h3>
                               <p class="iconBlackTxt">This technology has a smart capillary watering system that keeps the foam moist with the required nutrients up to 15 days.
                                </p>
                         </div>
                        <div class="btnContentNegro">
                            <a id="btnCloseSection10" class="btnNegroTxt btnsCloseIcons">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="legales">
                <p>*Disclaimer: there may be some changes on the features of this product at time of delivery.</p>
                <p>**Module must be connected to an alectric power to work properly.</p>
            </div>
            </div>

            <div id="spot_02_in">
                
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                          <img src="iconos/icono10_soilfree.png">
                    </div>
                     <h3 class="greenTitle">SOIL FREE</h3>
                    <a id="btnMoreSection11" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection11" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                  <img src="iconos/icono10_soilfree.png">
                            </div>
                             <h3 class="greenTitle">SOIL FREE</h3>
                               <p class="iconBlackTxt">The 100% biodegradable SMART-BIO-FOAM will allow the roots to have the same development as they would have if planted in soil.
</p>
                         </div>
                        <div class="btnContentNegro">
                            <a id="btnCloseSection11" class="btnNegroTxt btnsCloseIcons">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="spot_03_in">
                <div class="btnContentNegro layer3">
                    <div class="imgIcons">
                          <img src="iconos/icono11_nogmo.png">
                    </div>
                     <h3 class="greenTitle">No-GMO</h3>
                    <a id="btnMoreSection12" class="btnNegroTxt">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>
                </div>
                    
                <!-- BOTON MORE INFO ICONOS -->
                <div id="moreInfoSection12" class="moreInfo layer4 moreInfoIcons">
                    <div class="descriptions">
                        <div id="section02txt" class="sectionActive">
                            <div class="imgIcons">
                                  <img src="iconos/icono11_nogmo.png">
                            </div>
                             <h3 class="greenTitle">No-GMO</h3>
                               <p class="iconBlackTxt">No GeneDcally Modified Organism</p>
                         </div>
                        <div class="btnContentNegro">
                            <a id="btnCloseSection12" class="btnNegroTxt btnsCloseIcons">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <!-- SECCION 04 PLANTAS CRECIENDO -->
        <div id="section04content" class="slidesContent sectionHide">
            <ul class="bxslider">
                <!-- <li data-json="cosa.json" data-name="GENOVESE &#60;br&#62; BASIL 1" data-prefix="genovesebasil-grow_000" data-title="GENOVESE BASIL 1" data-txt="Aromatic, fresh and ideal as a condiment, also perfect for dressings."></li>
                <li data-json="cosa.json" data-name="GENOVESE &#60;br&#62; BASIL 2" data-prefix="genovesebasil-grow_000" data-title="GENOVESE BASIL 2" data-txt="Aromatic, fresh and ideal as a condiment, also perfect for dressings."></li>
                <li data-json="cosa.json" data-name="GENOVESE &#60;br&#62; BASIL 3" data-prefix="genovesebasil-grow_000" data-title="GENOVESE BASIL 3" data-txt="Aromatic, fresh and ideal as a condiment, also perfect for dressings."></li> -->

                <li data-json="genovesebasil.json" data-name="GENOVESE &#60;br&#62; BASIL" data-prefix="genovesebasilgrow8_000" data-title="GENOVESE BASIL" data-txt="Aromatic, fresh and ideal as a condiment, also perfect for dressings."></li>
                <li data-json="arugula.json" data-name="ARUGULA" data-prefix="arugulagrow8_000" data-title="ARUGULA" data-txt="Arugula is a dark green salad leaf with a slightly bitter mustardy and peppery flavor. Its freshness makes it pefect to toss in saladas and shakes."></li>
                <li data-json="cherrytomato.json" data-name="HEIRLOOM &#60;br&#62; CHERRY TOMATOES" data-prefix="cherrytomatogrow8_000" data-title="HEIRLOOM CHERRY TOMATOES" data-txt="Shakes, juices, dressings, soups and salads, these tomatoes can give the perfect flavor to cook anything you want."></li>
                <li data-json="cilantro.json" data-name="CILANTRO" data-prefix="cilantrogrow8_000" data-title="CILANTRO" data-txt="Eat it fresh! A perfect complement for soups and dishes or use it as a base for sauces like guacamole."></li>
                <li data-json="curlyparsley.json" data-name="CURLY PARSLEY" data-prefix="curlyparsleygrow8_000" data-title="CURLY PARSLEY" data-txt="Considered as a herb, a spice and a vegetable. This plant has a culinary use and it’s ideal for garnish or seasoning."></li>
                <li data-json="jalapeno.json" data-name="JALAPEÑO PEPPERS" data-prefix="jalapenogrow8_000" data-title="JALAPEÑO PEPPERS" data-txt="Ideal for dressings and sauces, it will also spice up your food."></li>
                <li data-json="mint.json" data-name="MINT" data-prefix="mintgrow8_000" data-title="MINT" data-txt="The freshness of this plant makes it a key ingredient for drinks or to decorate dishes."></li>
                <li data-json="oregano.json" data-name="OREGANO" data-prefix="oreganogrow8_000" data-title="OREGANO" data-txt="The aromatic presence of this herb makes it a must-have in the kitchen."></li>
                <li data-json="sage.json" data-name="SAGE" data-prefix="sagegrow8_000" data-title="SAGE" data-txt="Aromatic herb that looks amazing as decoration but it’s also used with culinary purpose. Because of its strong flavor is commonly used with pork, beef, chicken and duck."></li>
                <li data-json="tatsoi.json" data-name="TATSOI" data-prefix="tatsoigrow8_000" data-title="TATSOI" data-txt="This delicious plant has a sweet fragrance and a spicy taste similar to mustard."></li>
                 <li data-json="thaipeppers.json" data-name="THAI PEPPERS" data-prefix="thaipeppersgrow8_000" data-title="THAI PEPPERS" data-txt="Will add the perfect flavor and color to all your dishes. Try them in dressings, pasta and salads."></li>
            </ul>
            <div id="planta_01" class="plantas">
                <h2 class="nombrePlanta">GENOVESE <br> BASIL</h2>
                 <div id="plantaTxt_1" class="plantasTxt">
                    <p id="txtPlanta_01" class="blackTxt"></p>
                </div>
            </div>
        </div>


        <div id="section05content" class=" sectionHide">

            <div class="block-about">

                <a href="#" class="close-extra"></a>

                <img src="../secuencia/5.png"/>

                <p class="ipad-fix-margin">It all started as an international workshop specialized in VERTICAL GARDENS to give city dwellers the opportunity of being in touch with nature and to enjoy its benefits.</p>
                <p>You will only need 10 minutes to install it on a plain wall, add the plugs to the base, download the Plug & Plant app to your phone and water your vertical garden only once every 15 days.</p>
                <p>Enjoy the benefits of having your plants within reach at your workspace and house, harvesting your own dinner, increase productivity, reduce stress level and purify the air. </p>
            </div>
        </div>

        <div id="section06content" class=" sectionHide">
             <div class="block-contact">
                <a href="#" class="close-extra"></a>
                <div class="contact-txt">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:info@plugandplant.com">info@plugandplant.com</a> 
                    <br>
                    <i class="fa fa-mobile" aria-hidden="true"></i><span>+1 (646) 457 4014</span>
                </div>
                
            </div>
        </div>
    </div>

    <!-- <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script> -->
    <!-- LIBRERIAS -->
    <script src="../js/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
    <script src="../js/jquery.bxslider.min.js" type="text/javascript"></script>
    <script src="js/threesixty-plug-out.js"></script>
    <script src="js/threesixty-plug-in.js"></script>
    <script src="https://d157l7jdn8e5sf.cloudfront.net/release/pixi.js"></script>
    <script src="js/CSSPlugin.js"></script>
    <script src="js/CSSRulePlugin.js"></script>
    <script src="js/TweenLite.js"></script>
    <script src="js/TweenMax.js"></script>
    <script src="js/TimelineMax.js"></script>
    <script src="js/DrawSVGPlugin.js"></script>

    <script src="../js/jquery.queryloader.js"></script>
    <script src="../js/jquery.mb.browser.min.js"></script>
    

    <!-- PLUGS -->
    <script src="js/hamburguesvg.js?version=<?= $version ?>"></script>
    <script src="js/mainbx.js?version=<?= $version ?>"></script>
    <script src="js/plug.js?version=<?= $version ?>"></script>
    <script src="js/plug2.js?version=<?= $version ?>"></script>

    <script src="js/heartcode-canvasloader-min.js?version=<?= $version ?>"></script>
    <script src="js/hotspot.js?version=<?= $version ?>"></script>
    <script src="js/hotspot_in.js?version=<?= $version ?>"></script>
    <script type="text/javascript" src="js/planta.js?version=<?= $version ?>"></script>
    <script type="text/javascript" src="js/icon.js?version=<?= $version ?>"></script>
    
    <script>
        var dia = 1;
        var spot_01;
        var spot_02;
        var spot_03;
        var spot_04;
        var spot_05;
        var spot_06;
        var spot_07;
        var spot_08;
        var spot_01_in;
        var spot_02_in;
        var spot_03_in;
        
        //SECUENCIA DÍA Y NOCHE
        $(function(){
            var secuencia = $('#secuencia').crecer();
            $('#bg').luz({plug2: secuencia});
        });

        $(function(){

            var circleItem = '.circleItem';

            $(circleItem).on('click', function(){
                $(circleItem).removeClass('active');
                $(this).addClass('active');
            });
        });

        // //SPOTS OJITOS EN 360
        $(function(){

            //INSIDE
            spot_01 = $('#spot_01').hotspot({btn: '#ojito_01', iconContainer: $('#icon_01')});
            spot_02 = $('#spot_02').hotspot({btn: '#ojito_02', iconContainer: $('#icon_02')});
            spot_03 = $('#spot_03').hotspot({btn: '#ojito_03', iconContainer: $('#icon_03')});
            spot_04 = $('#spot_04').hotspot({btn: '#ojito_04', iconContainer: $('#icon_04')});
            spot_05 = $('#spot_05').hotspot({btn: '#ojito_05', iconContainer: $('#icon_05')});
            spot_06 = $('#spot_06').hotspot({btn: '#ojito_06', iconContainer: $('#icon_06')});
            spot_07 = $('#spot_07').hotspot({btn: '#ojito_07', iconContainer: $('#icon_07')});
            spot_08 = $('#spot_08').hotspot({btn: '#ojito_08', iconContainer: $('#icon_08')});

            $('#threesixty').threesixty({container: $('#threesixty'), images: $('#threesixty_images'), spinner: $("#spinner"), spinnerSpan: $("#spinner span"), pathImages: "../img/360outside/maquina_", spot1: spot_01, spot2: spot_02, spot3: spot_03, spot4: spot_04, spot5: spot_05, spot6: spot_06, spot7: spot_07, spot8: spot_08});

            //OUTSIDE
            spot_01_in = $('#spot_01_in').hotspot_in({btn: '#ojito_01_in', iconContainer: $('#icon_01_in')});
            spot_02_in = $('#spot_02_in').hotspot_in({btn: '#ojito_02_in', iconContainer: $('#icon_02_in')});
            spot_03_in = $('#spot_03_in').hotspot_in({btn: '#ojito_03_in', iconContainer: $('#icon_03_in')});

            $('#threesixty_in').threesixty_in({container: $('#threesixty_in'), images: $('#threesixty_images_in'), spinner: $("#spinner_in"), spinnerSpan: $("#spinner_in span"), pathImages: "../img/360inside/plug_", spot1: spot_01_in, spot2: spot_02_in, spot3: spot_03_in});

       
            //planta loader
            var circulo = $('#circulo');
            var lineaIzq = $('#lineaI');
            var lineaDer = $('#lineaD');
            var hoja = $('#hoja');
            var tl;

            tl = new TimelineMax({repeatDelay:.3, repeat:-1});

            //set circuo en 0
            tl.set(circulo, {drawSVG:"0%"});
            tl.set(lineaIzq, {drawSVG:"0%"});
            tl.set(lineaDer, {drawSVG:"0%"});
            tl.set(hoja, {drawSVG:"0%"});

            tl.to(circulo, 1, {drawSVG:"100%", ease: Sine.easeOut})
                .fromTo(lineaIzq, .3, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"})
                .fromTo(lineaDer, .3, {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"})
                .to(hoja, 1, {drawSVG:"100%", ease: Sine.easeOut})
            });
        //LOADER
            $('body').queryLoader({
                barColor: '#000',
                backgroundColor: '#fff',
                percentage: true,
                barHeight: $(window).height(),
                completeAnimation: 'fade',
                minimumTime: 100,
                onLoadComplete: function() { 
                    $('#loader-plant').fadeOut(800);
                    $('.loading-wrapper-intro').delay(500).animate({width: '0', 'z-index': '5'}, 800, function() {
                        $(this).remove();

                        $('.video-modal iframe').attr('src', 'https://www.youtube.com/embed/lmOVa5Mq9Z8?autoplay=1');

                        $('.video-modal').show();
                    });

                }
            });
    </script>
</body>
</html>
