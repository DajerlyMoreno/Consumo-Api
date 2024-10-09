document.addEventListener('DOMContentLoaded', () => {
    const charactersList = document.getElementById('charactersList');
    const searchIdBtn = document.getElementById('searchIdBtn');
    const searchNameBtn = document.getElementById('searchNameBtn');
 

    const displayCharacters = (responseData) => {
        const characters = responseData.data;  
        const tbody = document.querySelector('#charactersTable tbody');
    
        tbody.innerHTML = '';
    
        characters.forEach(character => {
            const tr = document.createElement('tr');
            
            const nameCell = `<td>${character.name}</td>`;
            const heightCell = `<td>${character.height}</td>`;
            const hairColorCell = `<td>${character.hair_color}</td>`;
            const skinColorCell = `<td>${character.skin_color}</td>`;
            const eyeColorCell = `<td>${character.eye_color}</td>`;
            const birthYearCell = `<td>${character.birth_year}</td>`;
            const genderCell = `<td>${character.gender}</td>`;
            const speciesCell = `<td>${character.species}</td>`;
            const homeworldCell = `<td>${character.homeworld}</td>`;
            
            tr.innerHTML = nameCell + heightCell + hairColorCell + skinColorCell + eyeColorCell + birthYearCell + genderCell + speciesCell + homeworldCell;
            
            tbody.appendChild(tr);
        });
    };

    const displayCharacter = (responseData) => {
        const character = responseData.data;  
        const tbody = document.querySelector('#charactersTable tbody');
    
        tbody.innerHTML = '';
    
        const tr = document.createElement('tr');
            
        const nameCell = `<td>${character.name}</td>`;
        const heightCell = `<td>${character.height}</td>`;
        const hairColorCell = `<td>${character.hair_color}</td>`;
        const skinColorCell = `<td>${character.skin_color}</td>`;
        const eyeColorCell = `<td>${character.eye_color}</td>`;
        const birthYearCell = `<td>${character.birth_year}</td>`;
        const genderCell = `<td>${character.gender}</td>`;
        const speciesCell = `<td>${character.species}</td>`;
        const homeworldCell = `<td>${character.homeworld}</td>`;
        
        tr.innerHTML = nameCell + heightCell + hairColorCell + skinColorCell + eyeColorCell + birthYearCell + genderCell + speciesCell + homeworldCell;
        
        tbody.appendChild(tr);
        
    };
    
 
    const getAllCharacters = async () => {
        try {
            const response = await fetch('https://starwars-n5ec-developuptcs-projects.vercel.app/'); 
            const data = await response.json();  
            displayCharacters(data); 
        } catch (error) {
            console.error('Error al obtener los personajes:', error);
        }
    };
    
 
    searchIdBtn.addEventListener('click', async () => {
        const id = document.getElementById('searchId').value;
        if (id) {
            try {
                const response = await fetch(`https://starwars-n5ec-developuptcs-projects.vercel.app/${id}`);
                const character = await response.json();
                displayCharacter(character);
            } catch (error) {
                console.error('Error al buscar personaje:', error);
            }
        }
    });
 
    searchNameBtn.addEventListener('click', async () => {
        const name = document.getElementById('searchName').value;
        if (name) {
            try {
                const response = await fetch(`https://starwars-n5ec-developuptcs-projects.vercel.app/name/${name}`);
                const characters = await response.json();
                displayCharacters(characters);
            } catch (error) {
                console.error('Error al buscar personajes por nombre:', error);
            }
        }
    });

    viewAllBtn.addEventListener('click', async () => {
        await getAllCharacters();
    });
 
    getAllCharacters(); 
 });
 