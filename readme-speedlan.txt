############################################################

 Allmänt om webtjänsten.

 1) Dokument Root, /htdocs

   Katalogen '/htdocs' är din dokumentroot på webplatsen och
   alla filen som ska vara direkt åtkomliga från Internet
   skall placeras där eller i dess underkataloger.

   Directory index är i följande ordning 
    - index.html
    - index.php
    - index.xhtml

   Detta innebär att om en förfrågan av typen
   http://www.domain.com/ kommer till servern så
   söks ovanstående filer automatisk i ordning innan
   man returnerar "404 Not Found" error.

 2) Andra kataloger.

   o /data/
     Katalogen är reserverad för data som sparas eller modifieras direkt
     av t.ex. PHP script. Webserver har då skrivrättigheter där.
     Ett exempel på filer som skall lagras här är textbaserade databaser,
     t.ex. användarlistor eller uppladdade filer.
     Katalogen /data är inte direkt åtkomlig via webbläsare men filerna
     kan göras tillgängligt via ett PHP skript som läser in filerna
     efter en eventuell kontroll av behörighet.

   o /include/
     Här kan du spara dina PHP includes. Genom att placera include filer
     i den här katalogen kan du vara säker att dessa INTE är åtkomliga direkt
     via webbläsaren. Include_path är satt till ".:/include" vilket innebär 
     att du INTE behöver använda "full path" till dina includes.
     Istället söks filen automatisk i "." (aktuell katalog) och därefter i 
     katalogen "/include".

   o /tmp/
     En katalog som du inte ska/behöver använda. Används bland
     annat som temporär katalog av PHP scripts samt för lagring
     av sk. session filer.


 3) Vad är PHP?

  PHP är ett sk. skriptspråk som används för att servera dynamiskt
  innehåll, exempelvis från databaser. PHP är mycket kraftfullt
  samtidigt som det är relativt enkelt att använda och lära sig.
  Vi rekommenderar att du läser: http://www.php.net

############################################################
(c)2008 Stockholms Stadsnät
