
fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
.then((resp) => resp.json())
.then((data) => {
    const pokedexKanto = data.results.map(async (pokemon) => {
        const pokeData = await fetch(pokemon.url).then(res => res.json())
   
        return {
            
           
            name: pokeData.name,
            id: pokeData.id,
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${pokeData.id}.png`,
            type: pokeData.types[0].type.name,
            hp: pokeData.stats[0].base_stat,
            att: pokeData.stats[1].base_stat,
            def:pokeData.stats[2].base_stat,
            sa:pokeData.stats[3].base_stat,
            sd:pokeData.stats[4].base_stat,
            speed:pokeData.stats[5].base_stat
        }
    })
    Promise.all(pokedexKanto)
        .then(completePokedex => {
            crear_pokemon(completePokedex)
            MostrarPokedex(completePokedex)
            
        })
})





