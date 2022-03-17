async function fetchRec(url, id){
    const response = await fetch(url)
    const data = await response.json()
    if (id < 6) {
    id++
    fetchRec(`https://pokeapi.co/api/v2/pokemon/${id}`, id)
    displayPoke(data.name, data.sprites.other.dream_world.front_default)
}
}
  
    fetchRec('https://pokeapi.co/api/v2/pokemon/1', 1)
    
    function displayPoke(name, URL) {
        document.querySelector(".container").innerHTML += 
            `<ul>
            <li>${capitalizeFirstLetter(name)}<li>
            <li><img src="${URL}" alt="pokemon"><li>
            </ul>`
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      