class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    let choice = document.getElementById("CountryList").value;
    let country;

    if (choice === "USA") {
        //set country to usa 
        country = usa;
        
    }
    else if (choice === "Mexico") {
        country = mexico;
       
    }
    else if (choice === "Algeria") {
        country = algeria;
        
    }
    document.getElementById("CountryName").innerText= country.name;
    document.getElementById("OfficialLanguage").innerText= country.lang;
    document.getElementById("Color1").style.backgroundColor= country.colors[0];
    document.getElementById("Color2").style.backgroundColor= country.colors[1];
    if(country.colors.length> 2){
        document.getElementById("Color3").style.backgroundColor= country.colors[2];
    }
    else{
        document.getElementById("Color2").style.backgroundColor= country.colors[1];
    }
    

}



