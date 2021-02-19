(() => {
//fetch the cocktail data when click search
    document.getElementById('search-send').addEventListener('click', () =>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mart')
            .then(data =>{
                if(data.ok){
                    console.log('ok')
                    //console.log(data);
                    return data.json();
                }else{
                    console.log('error');
                }

            })
            .then(data =>{
                let drinks = data.drinks;
                console.log(drinks);
                drinks.forEach(drink =>{
                    //console.log(drink);
                    let template = document.getElementById('drink-template').content.cloneNode(true);
                    let target = document.getElementById('target');

                    template.querySelector('span.drink-name-full').innerText = drink.strDrink;


                    template.appendChild(target);
                })
            })
document.getElementById('number-drinks-found').innerHTML = '14';

           /* .then(data=>{
                let drinks = data.drinks;

            })*/










    })

})();