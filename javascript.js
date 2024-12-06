
const champsmdp = document.getElementById('genererPassword'); //On fait une variable champsmdp
// et on va chercher le bouton qui est "censé" générer le mdp

champsmdp.addEventListener("click", () => { //On fait un evenement au clic sur le bouton il
    // execute la fonction ppasword et il renvoie un console log ok
    ppassword();
    console.log('ok');
});

function ppassword(length) { // la fonction password
    let password = ""; // on fait un champs vide
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    //  on dit tout ce qui est possible dans le champs
    for (var i = 0; i < length; i++) { // la boucle qu'on incremente jusqu'a la longeur max
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    } // on tire aléatoirement ce qui est possible
    return password; // on retourne le mdp trouvé
}








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

// $('input[type="button"]').attr('disabled', false);

// $('input[type="button"], input[type="number"], input[type="submit"]').on('keyup',() => 
// {
//     $('input[type="submit"]').attr('disabled' , !($(this).val() != ''));
// 4.});


// button.addEventListener("click", (event) => {
//     let ppassword = 
//              _pattern : /[a-zA-Z0-9_\-\+\.]/,
            
//             _getRandomByte : function()
//             {
//               // http://caniuse.com/#feat=getrandomvalues
//               if(window.crypto && window.crypto.getRandomValues) 
//               {
//                 var result = new Uint8Array(1);
//                 window.crypto.getRandomValues(result);
//                 return result[0];
//               }
//               else if(window.msCrypto && window.msCrypto.getRandomValues) 
//               {
//                 var result = new Uint8Array(1);
//                 window.msCrypto.getRandomValues(result);
//                 return result[0];
//               }
//               else
//               {
//                 return Math.floor(Math.random() * 256);
//               }
//             },
            
//             generate : function(length)
//             {
//               return Array.apply(null, {'length': length})
//                 .map(function()
//                 {
//                   var result;
//                   while(true) 
//                   {
//                     result = String.fromCharCode(this._getRandomByte());
//                     if(this._pattern.test(result))
//                     {
//                       return result;
//                     }
//                   }        
//                 }, this)
//                 .join('');  
//             }    
              
//           });
// 
        
        
        