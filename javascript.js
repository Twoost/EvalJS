
const champsmdp = document.getElementById('genererPassword'); //On fait une variable champsmdp
et on va chercher le bouton qui est "censé" générer le mdp

champsmdp.addEventListener("click", () => { //On fait un evenement au clic sur le bouton il
//     // execute la fonction ppasword et il renvoie un console log ok
    ppassword();
    console.log('ok');
});

let affichmdp () => {
    let password = ppassword();
    document.getElementById("genererPassword").innerHTML = password;

function ppassword() { // la fonction password
    let password = ""; // on fait un champs vide
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    //  on dit tout ce qui est possible dans le champs
    for (var i = 0; i < length; i++) { // la boucle qu'on incremente jusqu'a la longeur max
        password += possible.charAt(Math.floor);
    } // on tire aléatoirement ce qui est possible
    return password; // on retourne le mdp trouvé
}
}


const p2 = document.getElementById("password2");
const plo = document.getElementById("password-login");
const email = document.getElementById("email");
const emaill = document.getElementById("email-login");

let obli = [p2,plo,email,emaill];

function end_form()
{
    for (var h=0; h<5; h++)
{
    
    if (!obli[h].value == "")
    {
        document.querySelector('submit').disabled = false;
    }
    else 
    {
        document.querySelector('submit').disabled = true;
    }

}

}


// LA CORRECTION SERA RAPIDE UwU ^^





// const mail = document.querySelector('#email');
// let ppassword = {
//      _pattern : /[a-zA-Z0-9_\-\+\.]/,
    
//     _getRandomByte : function()
//     {
//       // http://caniuse.com/#feat=getrandomvalues
//       if(window.crypto && window.crypto.getRandomValues) 
//       {
//         var result = new Uint8Array(1);
//         window.crypto.getRandomValues(result);
//         return result[0];
//       }
//       else if(window.msCrypto && window.msCrypto.getRandomValues) 
//       {
//         var result = new Uint8Array(1);
//         window.msCrypto.getRandomValues(result);
//         return result[0];
//       }
//       else
//       {
//         return Math.floor(Math.random() * 256);
//       }
//     },
    
//     generate : function(length)
//     {
//       return Array.apply(null, {'length': length})
//         .map(function()
//         {
//           var result;
//           while(true) 
//           {
//             result = String.fromCharCode(this._getRandomByte());
//             if(this._pattern.test(result))
//             {
//               return result;
//             }
//           }        
//         }, this)
//         .join('');  
//     }    
      
//   };    



// $("#login").keyup(function() {
//     var $t = $(this);
//     var $e = $("#erreur_php");
//     if (!$t.val()) {
//         $mail.text("le champ login est vide").show();
//     } else {
//         $e.hide();
//     }
// }).keyup();