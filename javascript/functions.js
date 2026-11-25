function erdekesseg() {
    const most = new Date();
    const day = most.getDay();

    if (day === 1)
    {
        alcim.textContent = `Newtonból majdnem farmer lett!`;
    }
    else if (day === 2)
    {
        alcim.textContent = `Newton tűt szúrt a saját szemgolyója mögé!`;
    }
    else if (day === 3)
    {
        alcim.textContent = `Newton a pestisjárvány alatt találta fel a differenciál- és integrálszámítást!`;
    }
    else if (day === 4)
    {
        alcim.textContent = `Newton többet írt az alkímiáról, mint a fizikáról!`;
    }
    else if (day === 5)
    {
        alcim.textContent = `Newton kegyetlen pénzhamisító-vadász volt!`;
    }
    else if (day === 6)
    {
        alcim.textContent = `Newton a kutya-macska ajtó feltalálója!`;
    }
    else if (day === 7)
    {
        alcim.textContent = `Newton egyetlen mondatot szólalt meg a parlamentben!`;
    }
};

document.addEventListener("DOMContentLoaded",() =>{
    erdekesseg();
})

async function szovegbeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
}

szovegbeolvasas("./forras/forras1.txt", fejezet1);
szovegbeolvasas("./forras/forras2.txt", fejezet2);