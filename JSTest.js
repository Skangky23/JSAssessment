/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NonFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNonFT (_character, _type, _haircolor, _weapon, _bling) {
    const NonFT = {
        "Name": _character,
        "AnimalType": _type,
        "Haircolor": _haircolor,
        "Bling": _weapon,
        "Design": _bling,
    }
    NonFTs.push(NonFT);
    console.log("Minted: " + _character);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNonFTs () {
    for (let i = 0; i < NonFTs.length; i++){
        console.log("\nID: \t\t\t\t\t" + (i + 1));
        console.log("\nName: \t\t\t\t" + NonFTs[i].Name);
        console.log("Animal Type: \t\t" + NonFTs[i].AnimalType);
        console.log("Haircolor: \t\t\t" + NonFTs[i].Haircolor);
        console.log("Bling: \t\t\t\t" + NonFTs[i].Bling);
        console.log("Design: \t\t\t" + NonFTs[i].Design);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFT: \t" + NonFTs.length);
}

// call your functions below this line
mintNonFT("Goku", "Monkey", "Blue", "Kamehamewave", "Jumpsuit Aura");
mintNonFT("Luffy", "Snake", "Black", "Gomu-Gomu", "Haki Armlet");
mintNonFT("Inuyasha", "Wolf", "White", "Sword", "Blood Earrings");
mintNonFT("Pakkun", "Dog", "Brown", "Kunai", "Bandana");
mintNonFT("Buntot", "Fox", "Yellow", "Rapid Tail", "Gold Ring");
mintNonFT("Chopper", "Raindeer", "Brown", "Big Horn", "Black Necklace");
listNonFTs();
getTotalSupply();