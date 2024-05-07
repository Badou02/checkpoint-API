// Import de useState et useEffect depuis React pour gérer les états et les effets
import React, { useState, useEffect } from 'react';
// Import d'axios pour effectuer des requêtes HTTP
import axios from 'axios';

function UserList() {
  // Déclaration d'un état pour stocker la liste des utilisateurs
  const [listOfUsers, setListOfUsers] = useState([]);

  // Utilisation de useEffect pour exécuter une action lors du rendu initial du composant
  useEffect(() => {
    // Définition d'une fonction asynchrone pour récupérer les données depuis l'API
    const fetchData = async () => {
      try {
        // Effectuer une requête GET à l'API jsonplaceholder pour obtenir la liste des utilisateurs
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Mettre à jour l'état avec les données reçues de la réponse
        setListOfUsers(response.data);
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la requête
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };

    // Appeler la fonction fetchData pour récupérer les données lors du rendu initial du composant
    fetchData();
  }, []); // Les crochets vides indiquent que cette fonction doit être exécutée une seule fois après le montage du composant

  // Rendu du composant avec la liste des utilisateurs
  return (
    <div className='user'>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {/* Parcours de la liste des utilisateurs et affichage de chaque utilisateur dans un élément de liste */}
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Export du composant UserList pour l'utiliser ailleurs dans l'application
export default UserList;
