function calculateBMIPoint() {
   let MetallInput_Point = document.getElementById('Металл_точка');
   let Metall_Point = MetallInput_Point.options[MetallInput_Point.selectedIndex].value;   
   let ThickInput_Point = document.getElementById('Толщина_точка');
   let Thick_Point = ThickInput_Point.options[ThickInput_Point.selectedIndex].value;   

   let Iweld_Point = document.getElementById('Iweld_Point');
   let Tweld_Point = document.getElementById('Tweld_Point');
   let Tpauz_Point = document.getElementById('Tpauz_Point');
   let Fweld_Point = document.getElementById('Fweld_Point');
   let Melect_Point = document.getElementById('Melect_Point');
   let Delect_Point = document.getElementById('Delect_Point');
   let Picture_Point = document.getElementById('Picture_Point');
    
  
   if (Metall_Point == "1" && Thick_Point == "1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              7-8 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.02-0.04 с';
    Tpauz_Point.innerHTML = 'Время паузы:            0.04-0.06 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2-3 кН';
    Melect_Point.innerHTML = 'Металл электродов:      Э2';
    Delect_Point.innerHTML = 'Длина электродов:       4 мм';
    
 }   
 
      if (Metall_Point == "1" && Thick_Point == "2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              8.5-10 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.04-0.06 с';
    Tpauz_Point.innerHTML = 'Время паузы:            0.04-0.06 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3-4 кН';
    Melect_Point.innerHTML = 'Металл электродов:      Э2';
    Delect_Point.innerHTML = 'Длина электродов:       4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    
 }   

}

function calculateBMIShow() {
   let MetallInput_Show = document.getElementById('Металл_шов');
   let Metall_Show = MetallInput_Show.options[MetallInput_Show.selectedIndex].value;   
   let ThickInput_Show = document.getElementById('Толщина_шов');
   let Thick_Show = ThickInput_Show.options[ThickInput_Show.selectedIndex].value;   

   let Iweld_Show = document.getElementById('Iweld_Show');
   let Tweld_Show = document.getElementById('Tweld_Show');
   let Tpauz_Show = document.getElementById('Tpauz_Show');
   let Fweld_Show = document.getElementById('Fweld_Show');
   let Rroll_Show = document.getElementById('Rroll_Show');
   let Droll_Show = document.getElementById('Droll_Show');
   let Vweld_Show = document.getElementById('Vweld_Show');
   let Picture_Show = document.getElementById('Picture_Show');
   let URL = document.getElementById('URL');
    
  
   if (Metall_Show == "1" && Thick_Show == "1")
{    
    Iweld_Show.innerHTML = 'Сила тока:              7-8 kA';
    Tweld_Show.innerHTML = 'Время сварки:           0.02-0.04 с';
    Tpauz_Show.innerHTML = 'Время паузы:            0.04-0.06 с';
    Fweld_Show.innerHTML = 'Усилие сварки:          2-3 кН';
    Rroll_Show.innerHTML = 'Ширина роликов:         3 мм';
    Droll_Show.innerHTML = 'Ширина роликов:         1 мм';
    Vweld_Show.innerHTML = 'Скорость сварки:        4 м/мин';
    
 }   
 
      if (Metall_Show == "1" && Thick_Show == "2")
{    
    Iweld_Show.innerHTML = 'Сила тока:              8.5-10 kA';
    Tweld_Show.innerHTML = 'Время сварки:           0.04-0.06 с';
    Tpauz_Show.innerHTML = 'Время паузы:            0.04-0.06 с';
    Fweld_Show.innerHTML = 'Усилие сварки:          3-4 кН';
    Rroll_Show.innerHTML = 'Ширина роликов:         3 мм';
    Droll_Show.innerHTML = 'Ширина роликов:         4 мм';
    Vweld_Show.innerHTML = 'Скорость сварки:        4 м/мин';
    URL.innerHTML = '<a href="https://astpskov.ru/catalog/mashiny-kontaktnoj-svarki/69/">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    Picture_Show.innerHTML = '<img src="msh-3207.jpg" />';
    
 }   

}



