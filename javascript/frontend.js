const cimkontener = document.createElement("div");
cimkontener.className = "container-fluid text-center"
cimkontener.id = "cimkontener";

const cimsor = document.createElement("div");
cimsor.classname = "row";

const cimoszlop = document.createElement("div");
cimoszlop.classname = "col-12";

const focim = document.createElement("h1");
focim.textContent = "Sir Isaac Newton";

const alcim = document.createElement("h4");
alcim.id = "alcim";
alcim.textContent = "ide kerül majd a szöveg";

const fokontener = document.createElement("div");
fokontener.id = "fokontener";
fokontener.classname = "container text-left";

const sor = document.createElement("div");
sor.classname = "row";

const oszlop = document.createElement("div");
oszlop.className = "col-12";

const kivalasztas = document.createElement("select")
kivalasztas.id = "kivalasztas";

const opcio1 = document.createElement("option");
opcio1.textContent = "Válassz!";

const opcio2 = document.createElement("option");
opcio2.textContent = "Első fejezet";

const opcio3 = document.createElement("option");
opcio3.textContent = "Második fejezet"

const fejezet1cim = document.createElement("h2");
fejezet1cim.textContent = "Bevezetés";

const fejezet1 = document.createElement("p");
fejezet1.id = fejezet1;
fejezet1.textContent = "placeholder";

const fejezet2cim = document.createElement("h2");
fejezet2cim.textContent = "Newton élete";

const fejezet2 = document.createElement("p");
fejezet2.id = "fejezet2";
fejezet2.textContent = "placeholder";

const fejezet3cim = document.createElement("h2");
fejezet3cim.textContent = "Elméletek eredete";

const fejezet3 = document.createElement("p");
fejezet3.id = "fejezet3";
fejezet3.textContent = "placeholder";

const lablec = document.createElement("div");
lablec.classname = "container-fluid, text-center";
lablec.id = "lablec";

const lablecsor = document.createElement("div");
lablecsor.classname = "row";

const lablecoszlop = document.createElement("div");
lablecoszlop.classname = "col-6"

const lablecszoveg = document.createElement("p")
lablecszoveg.id = "lablecszoveg";
lablecszoveg.textcontent = "Köszönöm hogy megnézted"

kivalasztas.append(opcio1, opcio2, opcio3)
cimkontener.append(cimsor, cimoszlop, focim, alcim,kivalasztas);
fokontener.append(sor, oszlop,fejezet1cim, fejezet1,fejezet2cim, fejezet2);
lablec.append(lablecsor, lablecoszlop)
document.body.append(cimkontener, fokontener);