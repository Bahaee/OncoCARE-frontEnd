// Exemple de code TypeScript pour effectuer une requête GET à l'API REST Countries

export async function getCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countriesData = await response.json();
  

  
      // Extraire les noms des pays
      const countryNames = countriesData.map((country: any) => country.name.common);
  
      // Afficher les noms des pays (à des fins de démonstration)
  
      return countryNames;
    } catch (error) {
      console.error('Erreur lors de la récupération des pays :', error);
      return [];
    }
  };

