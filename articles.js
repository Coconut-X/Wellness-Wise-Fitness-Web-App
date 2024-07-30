

// function searchArticles() {
   
//     let input = document.getElementById('search-bar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('article');

//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].getElementsByTagName('h2')[0].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";				 
//         }
//     }



// }

function searchArticles() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    if (input == "") {
       //alert("Please enter a search term");
       document.getElementById('list').style.display="none";
      
    }
    else {
        document.getElementById('list').style.display="block";
    }
    let x = document.querySelectorAll('#list .article');
    x.forEach(function(article) {
        if (article.textContent.toLowerCase().includes(input)) {
            article.style.display = "list-item";
        } else {
            article.style.display = "none";
        }
    });
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}