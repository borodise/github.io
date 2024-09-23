function calculateBMIPoint() { 
   let ThickInput_Point = document.getElementById('Толщина_точка');
   let Thick_Point = ThickInput_Point.options[ThickInput_Point.selectedIndex].value;   
   let MetallInput_Point = document.getElementById('Металл_точка');
   let Metall_Point = MetallInput_Point.options[MetallInput_Point.selectedIndex].value;  

   let TypeMetall_Point = document.getElementById('TypeMetall_Point');	
   let Iweld_Point = document.getElementById('Iweld_Point');
   let Tweld_Point = document.getElementById('Tweld_Point');
   let Fweld_Point = document.getElementById('Fweld_Point');
   let Relect_Point = document.getElementById('Relect_Point');
   let Delect_Point = document.getElementById('Delect_Point');
   let Tpauz_Point = document.getElementById('Tpauz_Point');   
   let Idop_Point = document.getElementById('Idop_Point');
   let Tdop_Point = document.getElementById('Tdop_Point');
   let Picture_Point = document.getElementById('Picture_Point');
   let URL_Point = document.getElementById('URL_Point');
   
   let Tkovk_Point = document.getElementById('Tkovk_Point');  
   let Fkovk_Point = document.getElementById('Fkovk_Point');
   let Tnarast_Point = document.getElementById('Tnarast_Point');
   let Tspad_Point = document.getElementById('Tspad_Point');
   let I2weld_Point = document.getElementById('I2weld_Point');
   let F2weld_Point = document.getElementById('F2weld_Point');
   let T2weld_Point = document.getElementById('T2weld_Point');
   let Text_Point = document.getElementById('Text_Point');
   
    
    Tpauz_Point.innerHTML = '';
    Idop_Point.innerHTML = '';
    Tdop_Point.innerHTML = '';
    TypeMetall_Point.innerHTML = '';
    Tkovk_Point.innerHTML = '';
    Fkovk_Point.innerHTML = '';
    Tnarast_Point.innerHTML = '';
    Tspad_Point.innerHTML = '';
    Text_Point.innerHTML = '';
    F2weld_Point.innerHTML = '';
    I2weld_Point.innerHTML = '';
    T2weld_Point.innerHTML = '';
    
    
   if (Metall_Point == "HEAT")
   {
   TypeMetall_Point.innerHTML = 'ЭИ602,ЭИ652,ВЖ85,ВЖ100,ЭИ835,</br>ЭИ703,ЭИ696а,ЭИ826,ЭИ437Б,ВЖ98,ЭП99';
   }
      if (Metall_Point == "LOWC")
   {
   TypeMetall_Point.innerHTML = 'СТ10,СТ20';
   }
         if (Metall_Point == "LOWLEG")
   {
   TypeMetall_Point.innerHTML = '30XГСА,12Г2А,40ХНМА,25ХСНВФА,ЭИ659,СТ45';
   }
            if (Metall_Point == "NOCOR")
   {
   TypeMetall_Point.innerHTML = 'X18H9T,CH2,CH3,BHC2,BHC5,ЭИ654,</br>ЭИ811,ЭИ435,ЭИ101,ЭИ400,ЭИ402,ЭИ628';
   }
            if (Metall_Point == "TITAN")
   {
   TypeMetall_Point.innerHTML = 'OT4,BT6C,BT20';
   }
   
if (Thick_Point == "D16ATAC0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              17 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.08 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.2 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
    Text_Point.innerHTML = '	Второй вариант';
    I2weld_Point.innerHTML = 'Сила тока:              16 kA';
    T2weld_Point.innerHTML = 'Время сварки:           0.08 с';
    F2weld_Point.innerHTML = 'Усилие сварки:          2 кН';
    Tnarast_Point.innerHTML = 'Время нарастания:       0.04 с';
    Tspad_Point.innerHTML = 'Время спада:            0.12 с';
    
    
    
 }   
    if (Thick_Point == "D16ATAC0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              19 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.1 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
    Text_Point.innerHTML = '	Второй вариант';
    I2weld_Point.innerHTML = 'Сила тока:              18 kA';
    T2weld_Point.innerHTML = 'Время сварки:           0.1 с';
    F2weld_Point.innerHTML = 'Усилие сварки:          3 кН';
    Tnarast_Point.innerHTML = 'Время нарастания:       0.04 с';
    Tspad_Point.innerHTML = 'Время спада:            0.14 с';
    
 } 
     if (Thick_Point == "D16ATAC1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              24 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.12 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          4.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
        Text_Point.innerHTML = '	Второй вариант';
    I2weld_Point.innerHTML = 'Сила тока:              23 kA';
    T2weld_Point.innerHTML = 'Время сварки:           0.12 с';
    F2weld_Point.innerHTML = 'Усилие сварки:          3.5 кН';
    Tnarast_Point.innerHTML = 'Время нарастания:       0.04 с';
    Tspad_Point.innerHTML = 'Время спада:            0.14 с';
    
 } 
     if (Thick_Point == "D16ATAC1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              30 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.16 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          6.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
            Text_Point.innerHTML = '	С ковкой';
    I2weld_Point.innerHTML = 'Сила тока:              27 kA';
    T2weld_Point.innerHTML = 'Время сварки:           0.16 с';
    F2weld_Point.innerHTML = 'Усилие сварки:          4.5 кН';
    Tnarast_Point.innerHTML = 'Время нарастания:       0.06 с';
    Tspad_Point.innerHTML = 'Время спада:            0.16 с';
    Tkovk_Point.innerHTML = 'Время ковки:            0.24 с';
    Fkovk_Point.innerHTML = 'Усилие ковки:           10 кН';

    
 } 
      if (Thick_Point == "D16ATAC2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              35 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.2 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          8 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
                Text_Point.innerHTML = '	С ковкой';
    I2weld_Point.innerHTML = 'Сила тока:              31 kA';
    T2weld_Point.innerHTML = 'Время сварки:           0.2 с';
    F2weld_Point.innerHTML = 'Усилие сварки:          6.5 кН';
    Tnarast_Point.innerHTML = 'Время нарастания:       0.08 с';
    Tspad_Point.innerHTML = 'Время спада:            0.18 с';
    Tkovk_Point.innerHTML = 'Время ковки:            0.32 с';
    Fkovk_Point.innerHTML = 'Усилие ковки:           12 кН';
    
 } 
      if (Thick_Point == "AMGAMAC0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              16 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.08 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1.3 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
    
    
 } 
       if (Thick_Point == "AMGAMAC0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              18 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.1 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1.9 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
        if (Thick_Point == "AMGAMAC1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              22 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.12 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
         if (Thick_Point == "AMGAMAC1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              27 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.14 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
         if (Thick_Point == "AMGAMAC2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              32 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.18 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
 if (Thick_Point == "AMGAMDC0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              25 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.04 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1.2 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
       if (Thick_Point == "AMGAMDC0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              28 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.04 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
        if (Thick_Point == "AMGAMDC1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              34 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.06 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
         if (Thick_Point == "AMGAMDC1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              38 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.08 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
         if (Thick_Point == "AMGAMDC2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              50 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.1 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          5 кН';
    Tkovk_Point.innerHTML = 'Время ковки:            0.14 с';
    Fkovk_Point.innerHTML = 'Усилие ковки:           10 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
          if (Thick_Point == "AMGAMDC2.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              57 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.12 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          6.5 кН';
    Tkovk_Point.innerHTML = 'Время ковки:            0.18 с';
    Fkovk_Point.innerHTML = 'Усилие ковки:           14 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     9 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
           if (Thick_Point == "AMGAMDC3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              62 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.16 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          8 кН';
    Tkovk_Point.innerHTML = 'Время ковки:            0.2 с';
    Fkovk_Point.innerHTML = 'Усилие ковки:           20 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
            if (Thick_Point == "AMGAMDC4")
{    
    Iweld_Point.innerHTML = 'Сила тока:              72 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.2 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          9 кН';
    Tkovk_Point.innerHTML = 'Время ковки:            0.28 с';
    Fkovk_Point.innerHTML = 'Усилие ковки:           26 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      200 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     12 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
          if (Thick_Point == "HEAT0.3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4-4.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.14-0.2 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          4-5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     3 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
          if (Thick_Point == "HEAT0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4.5-5.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.18-0.24 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          5-6 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
           if (Thick_Point == "HEAT0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5-6 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.22-0.34 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          6.5-8 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
            if (Thick_Point == "HEAT1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6-6.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.32-0.4 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          8-10 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
             if (Thick_Point == "HEAT1.2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6.2-6.8 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.38-0.48 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          10-12 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     6 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
              if (Thick_Point == "HEAT1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6.5-7 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.5-0.62 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          12.5-15 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
               if (Thick_Point == "HEAT2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              7-7.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.58-0.76 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          15.5-17.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                if (Thick_Point == "HEAT2.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              7.5-8.2 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.78-0.96 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          18.5-19.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     9 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                 if (Thick_Point == "HEAT3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              8-8.8 kA';
    Tweld_Point.innerHTML = 'Время сварки:           1-1.3 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          20-21.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
 
                  if (Thick_Point == "LOWC0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6-6.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.08-0.1 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1.2-1.8 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                   if (Thick_Point == "LOWC0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6.5-7 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.1-0.14 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2-2.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                    if (Thick_Point == "LOWC1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              7-8 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.12-0.16 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.5-3 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                     if (Thick_Point == "LOWC1.2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              8-9 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.14-0.18 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3-4 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     6 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                      if (Thick_Point == "LOWC1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              9-10 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.16-0.22 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          4-5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                       if (Thick_Point == "LOWC2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              10-11.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.18-0.22 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          6-7 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                        if (Thick_Point == "LOWC3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              11.5-14 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.24-0.3 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          9-10 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                         if (Thick_Point == "LOWC3.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              15-16.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.3-0.4 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          11-12 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      200 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                          if (Thick_Point == "LOWC4")
{    
    Iweld_Point.innerHTML = 'Сила тока:              17-19 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.4-0.56 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          13-15 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      200 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     12 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                           if (Thick_Point == "LOWLEG0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5-6 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.32-0.4 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2-3 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            0.3-0.5 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          4-5 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         0.5-0.6 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>'    
 } 
                            if (Thick_Point == "LOWLEG0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5.5-6.2 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.36-0.44 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.5-3.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            0.4-0.6 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          4.5-5.2 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         0.6-0.74 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';   
 } 
                             if (Thick_Point == "LOWLEG1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6.2-6.7 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.42-0.5 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          4-5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            0.6-0.7 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          4.8-5.5 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         0.68-0.78 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';    
 } 
                              if (Thick_Point == "LOWLEG1.2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              7.2-7.7 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.46-0.54 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          5-6 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     6 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            0.7-0.9 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          5-6 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         0.72-0.86 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';  
 } 
                               if (Thick_Point == "LOWLEG1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              8.7-9.2 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.56-0.64 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          6-8 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            0.8-1.1 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          6.2-7.4 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         0.86-0.96 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
 } 
                                if (Thick_Point == "LOWLEG2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              10-11 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.74-0.84 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          8-10 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            1-1.4 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          7-8 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         1.1-1.3 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
 } 
                                 if (Thick_Point == "LOWLEG2.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              11.5-12.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           1-1.1 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          10-12 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     9 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            1.1-1.5 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          8-9 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         1.3-1.9 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
 } 
                                  if (Thick_Point == "LOWLEG3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              13-14 kA';
    Tweld_Point.innerHTML = 'Время сварки:           1.2-1.4 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          11-14 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Tpauz_Point.innerHTML = 'Время паузы:            1.3-1.6 с';
    Idop_Point.innerHTML = 'Сила доп.тока:          8-10 kA';
    Tdop_Point.innerHTML = 'Время доп.тока:         1.8-2.2 c';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
 } 
                           if (Thick_Point == "NOCOR0.3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5-5.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.06-0.08 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1.5-2 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     3 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
 
                            if (Thick_Point == "NOCOR0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4.5-5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.08-0.12 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.5-3 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                             if (Thick_Point == "NOCOR0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4.5-5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.12-0.16 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3-4 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                              if (Thick_Point == "NOCOR1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5-5.7 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.16-0.18 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3.5-4.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                               if (Thick_Point == "NOCOR1.2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5.5-6 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.18-0.2 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          4.5-5.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     6 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                if (Thick_Point == "NOCOR1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6-7.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.2-0.24 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          5-6.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                 if (Thick_Point == "NOCOR2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              7.5-8.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.24-0.3 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          8-9 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                  if (Thick_Point == "NOCOR2.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              9-10 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.3-0.34 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          10-11 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     9 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                   if (Thick_Point == "NOCOR3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              10-11 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.34-0.38 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          12-14 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
 
                                    if (Thick_Point == "TITAN0.3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4.5-5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.4-0.08 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          0.75-1 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     3 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                     if (Thick_Point == "TITAN0.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4-5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.08-0.1 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1-1.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      25 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     4 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                      if (Thick_Point == "TITAN0.8")
{    
    Iweld_Point.innerHTML = 'Сила тока:              4.5-5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.12-0.14 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          1.5-2 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      50 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 } 
                                       if (Thick_Point == "TITAN1")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5-5.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.14-0.16 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2-2.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     5 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 }
                                        if (Thick_Point == "TITAN1.2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              5.5-6 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.16-0.18 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          2.5-3 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      75 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     6 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 }
                                         if (Thick_Point == "TITAN1.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              6.5-7.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.18-0.22 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          3-3.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     7 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 }
                                          if (Thick_Point == "TITAN2")
{    
    Iweld_Point.innerHTML = 'Сила тока:              8-9 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.24-0.26 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          4-5.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      100 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     8 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 }
                                           if (Thick_Point == "TITAN2.5")
{    
    Iweld_Point.innerHTML = 'Сила тока:              8.5-9.5 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.28-0.3 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          6-7.5 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     9 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 }
                                            if (Thick_Point == "TITAN3")
{    
    Iweld_Point.innerHTML = 'Сила тока:              10-11 kA';
    Tweld_Point.innerHTML = 'Время сварки:           0.32-0.34 с';
    Fweld_Point.innerHTML = 'Усилие сварки:          8-10 кН';
    Relect_Point.innerHTML = 'Радиус электродов:      150 мм';
    Delect_Point.innerHTML = 'Диаметр электродов:     10 мм';
    Picture_Point.innerHTML = '<img src="4019.jpg" />';
    URL_Point.innerHTML = '<a href="ССЫЛКА">Посмотреть характеристики машины на сайте КБ АСТ</a>';
    
 }
 }
