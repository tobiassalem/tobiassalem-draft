############################################################

 Allm�nt om webtj�nsten.

 1) Dokument Root, /htdocs

   Katalogen '/htdocs' �r din dokumentroot p� webplatsen och
   alla filen som ska vara direkt �tkomliga fr�n Internet
   skall placeras d�r eller i dess underkataloger.

   Directory index �r i f�ljande ordning 
    - index.html
    - index.php
    - index.xhtml

   Detta inneb�r att om en f�rfr�gan av typen
   http://www.domain.com/ kommer till servern s�
   s�ks ovanst�ende filer automatisk i ordning innan
   man returnerar "404 Not Found" error.

 2) Andra kataloger.

   o /data/
     Katalogen �r reserverad f�r data som sparas eller modifieras direkt
     av t.ex. PHP script. Webserver har d� skrivr�ttigheter d�r.
     Ett exempel p� filer som skall lagras h�r �r textbaserade databaser,
     t.ex. anv�ndarlistor eller uppladdade filer.
     Katalogen /data �r inte direkt �tkomlig via webbl�sare men filerna
     kan g�ras tillg�ngligt via ett PHP skript som l�ser in filerna
     efter en eventuell kontroll av beh�righet.

   o /include/
     H�r kan du spara dina PHP includes. Genom att placera include filer
     i den h�r katalogen kan du vara s�ker att dessa INTE �r �tkomliga direkt
     via webbl�saren. Include_path �r satt till ".:/include" vilket inneb�r 
     att du INTE beh�ver anv�nda "full path" till dina includes.
     Ist�llet s�ks filen automatisk i "." (aktuell katalog) och d�refter i 
     katalogen "/include".

   o /tmp/
     En katalog som du inte ska/beh�ver anv�nda. Anv�nds bland
     annat som tempor�r katalog av PHP scripts samt f�r lagring
     av sk. session filer.


 3) Vad �r PHP?

  PHP �r ett sk. skriptspr�k som anv�nds f�r att servera dynamiskt
  inneh�ll, exempelvis fr�n databaser. PHP �r mycket kraftfullt
  samtidigt som det �r relativt enkelt att anv�nda och l�ra sig.
  Vi rekommenderar att du l�ser: http://www.php.net

############################################################
(c)2008 Stockholms Stadsn�t
