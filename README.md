

****************************************
# server 
  Firebase

*****************************************
# webBackSide
  admin dashboard

# webFrontSide
  client side
******************************************
# STYLE
Design :
Sample Wireframe Figma and Comied MainFile

Font:
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
font-family: 'Montserrat', sans-serif;

Background color:
background: #FFFFFF;
background: #060b26;
background: #F9F1E7;

Background hero: #9B8F64;

Font colors:
background: #000000;
background: #CB995A;
background: #333333;

Button colors: 
background: #CB995A;
background: #FFFFFF;
background: #000000;

Logo:
CarPlogo.png

*******************************************

# Pataisymas nuo Ernesto:
* Bus viena duomenu baze, ir bus daug lenteliu.
* Vietoj newUser_DB labiau tiktu toks lenteles pavadinimas: Company arba Organization. Nes čia bus autolaužynai o ne patys vartotojai
* Vietoj acccountUsers_DB gali buti tiesgio Users, nes čia jau sėdės konkretūs vartotojai priklausantys laužynams
* accountUserGroup_DB tiesiog UserGroup arba tiesiog Roles. Kuris nusako kas per useris
* su cars geriausia turėti Cars lentelę, kurioje yra automobiliai jų markės, pagaminimo metai ir t.t
* galima tureti Parts kuris turės CarId, kad žinoti kokiai mašinai priklauso, bei PartCategoryId, kad žinoti kokiai dalių kategorijai priklauso
* ir galiausiai Part_Categories lentelė



1.firebase - vartotoju lentelės:

newUser_DB (kas platformoje sukuria paskyra ir ją valdys : pvz direktorius. Skirtingi laužynai skirtingos paskyros, tai manau kad reiktų atskiros lentelės)
        (Authentication: vardas, slaptazodis, email ) (paskui viduje bus : Vartotojo pavadinimas kuris bus matomas viešai, vieta,)
        newUser tures savi ID  ir prie to id galės kabinti accountUsers .
	newUser ištrina savo paskyrą ir viskas dingsta.
             
accountUsers_DB (darbuotoju pvz: vardas, ar  pavarde , ar pravardė)
             (vardai gali kartotis! tad reikia ,kad taip nenutiktų)

accountUserGroup_DB (pareigos: sandelininkas, vadybininkas, vairuotojas, buhaltere , pardavėjas ir tt..)
  	accUsers bus priskirtos accUserGroup , ir pagal pareigas bus atitinkamai rodomas turinys)
    


2.firebase content lentelės:

dismantleCars_DB ( carName,carModel,carYear, carGearBox, carColor, carFoto )
             (carName : Audi + submenu (carModel: A4, A6 ,Q7)




/* cia gal geriau i componenta sudeti..
carPartsMenu_DB (varikliai,dežes,salonas, skardos. ir tt)
carPartsSubMenu_DB (pvz: varikliai= dyzelinis,benzininis,dujos,hibridas.. / subkategorija: generatorius,starteris,forsunkes..ir tt).
*/






# Naudotų auto detalių sandėliavimas ir pardavimas


## Projekto tikslas
  1. Sukurti automobilių laužynams naudotų detalių sandėliavimo platforma

## Kas naudosis platforma..
  1. Įmonės vadovai (Super admin : valdo visus platformos duomenis)
  2. Įmonės buhalterai (buhalterine paskyra : detaliu kiekiai, sandeliavimo skaičiai, pirkimai ,pardavimai )
  3. Įmonės vadybininkai, filialų vadovai (vadybinė paskyra : matoma buhalterine paskyra, ir rezervuoti užsakytas detales)
  4. Įmonės darbuotojai : šaltkalviai, pakuotojai, sandelininkai, pardavėjai .. (skirtingos paskyros pagal darbą)
  5. Klientai iš gatvės (pavieniai ,kurie ieško reikiamos detales)
  6. Klientai - nuolatiniai pvz : autoservisai..( nuolatiniu klientu paskyros: rezervuoti reikiamas detales)

## Kas matoma klientams iš gatvės
  1. Responsive šablonas
  2. Auto detalių kategorijos meniu
  3. Auto detalių paieškos filtras
  4. Rodomos auto detalės turimos sandėlyje

## Kas matoma nuolatiniams - klientams
  1. Responsive šablonas
  2. Detalių kategorijos meniu
  3. Detalių paieškos filtras
  4. Rodomos detalės turimos sandėlyje
  5. Galimybė rezervuoti detale

## Registracijos forma
  1. Naujas auto laužynas
  2. Pavadinimas
  3. Svarbi nurodymo vieta registruojantis
  4. email
  5. password
  6. Naujas nuolatinis klientas
  7. Vartotojo vardas ( galimybė prisijungti su google)
  8. email
  9. password

## Login forma
  1. Kiekvienas Auto laužynas turi savo ID
  2. Kas registruotas,tas gali sukurti ,prisijungimus savo darbuotojams.
  3. Iš login formos patenkama į valdymo panelę,
  4. Atsijungus,patenkama į Login formos puslapį.
  5. Po 18.00 jei paskyroje neatliekama veiksmų per 15 min, tai atsijungti.(kitą dieną matysis kas, kada prisijungė)
  6. Įšsaugoti prisijungimus ( data ,kiek laiko , ir kartų paskyroje prisijungta)

## Valdymo panelės puslapiai
   1. Ardomų automobilių sąrašas
    * Puslapių numeravimas
    * Paieškos forma
    * Mygtukas papildyti sąrašą
    * "Check laukelis" prie kiekvieno sąrašo id,kad norint greičiau ištrinti ,ar rezervuoti užtektu pažymėti.
    * "Redagavimo mygtukas "prie kiekvieno sąrašo id
    * "Ištrinti mygtukas" prie kiekvieno sąrašo id
    * "Daryti detalių sąrašą" mygtukas prie kiekvieno sąrašo id
    * "Paruoštas detalių sąrašas" mygtukas prie kiekvieno sąrašo id
    * Automobilio 1 nuotrauka prie ID
    * Prie Id įkėlimo data
    * Prie Id kuris darbuotojas įkėlė
    
   2. Paieškos forma
    * Įrašant paieška pagal kodą, markę, modelį, detalės pavadinimą
    * Paieška pagal Markę
    * Paieška pagal Modelį
    * Paieška pagal Detalę
    * Paieška pagal metus nuo - iki
    * Paieška pagal spalvą

   3. Papildyti sąrašą
    * Pasirinkti kategoriją(automobilis ar detalės)
    * Sub kategorija (Jei automobils tai: aukciono, privačių , jei detalė tai: pvz. variklis ..)
    * Markė
    * Modelis
    * Metai
    * Valstybinis numeris
    * Chasi numeris
    * Kuro tipas
    * Variklio kodas
    * KW
    * Pavarų dėžės tipas
    * Pavarų dėžės kodas
    * Spalva
    * Spalvos kodas
    * Nupirkimo vieta
    * Įkėlė informoaciją darbuotojas
    * Kaina
    * Užsakymai
    * Užsakovo Vardas
    * Komentarai
    * Nuotraukos nuo 1 iki 12
    * Video
    
   4. Pasirinkto automobilio puslapis pagal ID.
    * Rodoma visa informacija
    * "Redagavimo mygtukas "
    * "Rezervuoti mygtukas "
    * "Parduotas mygtukas "
    * "Ištrinti mygtukas"
    * "Daryti detalių sąrašą" mygtukas
    * "Paruoštas detalių sąrašas" mygtukas
    * Automobilio nuotraukos
    * Automobilio video
    * Kuris darbuotojas įkėlė
    * Įkėlimo data
    * Redagavimo data

   5. Ištrinimo puslapis
    * Rodoma visa informacija
    * Patvirtinimas dėl ištrynimo

   6. Daryti detalių sąrašą puslapis
    * Rodoma visa auto informacija(accordeon button tipo)
    * Detalių papildymo forma
    * Prie detalės Id mygtukai: QR , edit, delete


   7. Paruoštas detalių sąrašo puslapis(tinka transportavimui)
    * Rodoma visa auto informacija(accordeon button tipo)
    * Siuntėjas - Gavėjas Info
    * Detalių sąrašas


   7. Detalės puslapis
    * Iš kokios auto - info
    * Nuotraukų įkėlimas

   8. Detalių sąrašas
    * Parduotų detalių sąrašas
    * Detalės info - id
    * Pardavėjo vardas
    * Pardavimo data
    * Pardavimo kaina (su PVM , be PVM)


   9. Super Admin paskyra
    * Gali sukurti vartotoją, priskirti galimybes
    * Gali valdyti visus procesus ,edit ,delete...
    * Pirkimų - Pardavimų ataskaita
    * Sandėlyje detalių kiekis
    * Kasdieninė statistika (išimtų detalių, ikeltų į svetainę,parduotų detalių, paskaičiuoti kiek žmonių dirbo ir jų kiek algoms per dieną... )
    * Rezervuotos detalės ir jos vieta pagal QR skanavimą


  10. Darbuotojai: šaltkalviu paskyra
    * Prisijungimas
    * Mato automobilių sąrašą, ir auto id priskirtą detalių sąrašą
    * Galimybė pridėti detale prie automobilio detalių sąrašo


  11. Darbuotojai: pakuotoju paskyra
    * Prisijungimas
    * Mato automobilių sąrašą, ir auto id priskirtą detalių sąrašą
    * Galimybė patvirtinti su skaneriu kokios detalės keliaus į sandėlį(QR fiksuoja laiką,vietą)


  12. Darbuotojai: sandėlininko paskyra
    * Prisijungimas
    * Mato automobilių sąrašą, ir auto id priskirtą detalių sąrašą
    * Su QR darosi lentynas, sandeliuoja detales
    * Veiksmas: nuskanuoja detalę ,nuskanuoja lentyną(vietą) iš kur keliauja detalė. Skaičiuojamas laikas kiek detalė keliauja iki kitos lentynos. Kai "vietoje" , skanuojama     detalė ir lentyna kur paliekama detalė.
    * Sistema turi detalę su auto info, skanavimas parodo kurioje vietoje ji db yra.
    * Skanavimo laikas parodo kiek laiko, kurioje vietoje detalė užsibūna.Jei pasimeta detalė ,galima atsekti kur ji buvo fiksuota paskutinį kartą.
    * Pagal laiką matosi darbuotojų darbas.


   13. Sandėliavimo paskyra
    * Su QR(kitokio formato) sukuriama lentyna - vieta (kurioje bus detalės)
    * QR turės detalės
    * QR turės "Packing list "- transportavimui
    * Pagal nuskanavimą atsidaro detalės
    * Rezervuotos detalės ir jos vieta pagal QR skanavimą


   14. Buchalterijos paskyra
    * Su QR(kitokio formato) sukuriama lentyna - vieta (kurioje bus detalės)
    * QR turės detalės
    * QR turės "Packing list "- transportavimui
    * Pagal nuskanavimą atsidaro detalės
    * Rezervuotos detalės ir jos vieta pagal QR skanavimą


   15. Vadybininku paskyra
    * Prisijungimas
    * Mato automobilių sąrašą, ir auto id priskirtą detalių sąrašą
    * Galimybė rezervuoti detales


   16. Pardavėjų paskyra
    * Prisijungimas
    * * Mato automobilių sąrašą, ir auto id priskirtą detalių sąrašą
    * Galimybė rezervuoti detales,ir perkelti į parduotų detalių sąrašą
    * Atsijungus,patenkama į Login formos puslapį.

## QR kodo panaudojimas
   1. QR aprašymas
    * Su QR(kitokio formato) sukuriama lentyna - vieta (kurioje bus detalės)
    * QR turės detalės
    * QR turės "Packing list "- transportavimui
    * Pagal nuskanavimą atsidaro detalės id puslapis
    * Rezervuotos detalės ir jos vieta pagal QR skanavimą


## Duomenys
   1. Skirtingi laužynai - skirtingi api
    * Klientams paieškoje sujungiami visų laužynų siūlomų detalių api į vieną.
    * Ardomų automobilių api (įkeliami info apie ardomą automobilį)
    * Išimtų auto detalių api (formuojamas ardomo automobilių detalių sąrašas)
    * Vartotojų prisijungimų api (saugomi vartotojų prisijungimai)
    * Automobilių markės ir modeliai api (naudojamas formoje)
    * Bendras automobilių detalių sąrašas (naudojamas formoje)

## Klientų iš gatvės puslapiai
   1. Detalės paieška
    * Responsive šablonas
    * Rodomos detalės kurios atitinka paieškos rezultatus
    * Rodomas sąrašas,kurie laužynai turi tokias detales
    * Puslapis - Pagrindinis
    * Puslapis - Apie
    * Puslapis - Kontaktai
    * Puslapis - Paieška
    * Puslapis - Laužynų sąrašas
    * Puslapis - Pažymėtų detalių sąrašas

## Projekto tęsinys...
   1. Idėjos ką galima pridėti
    * Detalių pardavimai internete.
    * Papildomos kalbos : anglų, švedų ,rusų...
    * Prijungimas prie paysera sistemos
    * Prijungimas prie kurjerių sistemos
    * Prijungimas prie Ebay
    * Prijungimas prie Bildelsbasen.se
    * Švedijos laužynų paskyros, per kurią švedai siūlytų pirkimui savo nurašytus automobilius ..
    * Draudiminių automobilių aukcionas
    * Autoservisų paskyra per kurią skelbtų kokių ieško detalių .. , ir kiekvienas laužynas gali siųsti savo detalių pasiūlymus
   
