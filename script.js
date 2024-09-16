function calculateBMI() {
   let MetallInput = document.getElementById('Металл');
   let Metall = MetallInput.options[MetallInput.selectedIndex].value;   
   let ThickInput = document.getElementById('Толщина');
   let Thick = ThickInput.options[ThickInput.selectedIndex].value;   

   let Iweld = document.getElementById('Iweld');
   let Tweld = document.getElementById('Tweld');
   let Tpauz = document.getElementById('Tpauz');
   let Fweld = document.getElementById('Fweld');
   let Uweld = document.getElementById('Uweld');
   let Picture = document.getElementById('Picture');
    
  
   if (Metall == "1" && Thick == "1")
{    
    Iweld.innerHTML = 'Сила тока:    7-8 kA';
    Tweld.innerHTML = 'Время сварки: 0.02-0.04 с';
    Tpauz.innerHTML = 'Время паузы:  0.04-0.06 с';
    Fweld.innerHTML = 'Сила сварки:  2-3 кН';
    Uweld.innerHTML = 'U сварки:     1.2-1.4 м/мин';
    
 }   
 
      if (Metall == "1" && Thick == "2")
{    
    Iweld.innerHTML = 'Сила тока:    8.5-10 kA';
    Tweld.innerHTML = 'Время сварки: 0.04-0.06 с';
    Tpauz.innerHTML = 'Время паузы:  0.04-0.06 с';
    Fweld.innerHTML = 'Сила сварки:  3-4 кН';
    Uweld.innerHTML = 'U сварки:     1.5-1.7 м/мин';
    Picture.innerHTML = '<img src="4019.jpg" />';
    
 }   

}


