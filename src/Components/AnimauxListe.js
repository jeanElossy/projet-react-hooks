import React from 'react'
import { useState, useEffect } from "react";


const AnimauxListe = () =>{
  const [animalDisponible, setAnimalDisponible] = useState(
    [
      {
        id: 1,
        race: "Akita Inu",
        type: "Vertébrés",
        emplacement: "région d’Austin",
        disponible: true
      },
      {
        id: 2,
        race: "Berger australien",
        type: "Mollusques",
        emplacement: "niveau de Grizzlies East",
        disponible: true
      },
      {
        id: 3,
        race: "maillinoirs",
        type: "Arthropodes",
        emplacement: "du Fort Wallace",
        disponible: true
      },
      {
        id: 4,
        race: "Beauceron",
        type: "Annélide",
        emplacement: "Wapiti",
        disponible: true
      },
      {
        id: 5,
        race: "Bouvier bernois",
        type: "Cnidaire",
        emplacement: "l’ouest de la ville de Van Horn",
        disponible: true
      },
      {
        id: 6,
        race: "Chats hybrides",
        type: "Amphibiens",
        emplacement: "la zone du marais au sud-est de Van Horn", 
        disponible: true
      }
    ]
  )

  const [animalAdopter, setAnimalAdopter] = useState(
    [
      {
        id: 1,
        nom: "Terrier ",
        race: "American Pitbull",
        type: "Vertébrés",
        emplacement: "Région d’Austin",
        photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2018/10/american-pit-bull-terrier-im-grass-768x512.jpg",
        adopter: false
      },
      {
        id: 1,
        nom: "Beagle",
        race: "Berger australien",
        type: "Mollusques",
        emplacement: "niveau de Grizzlies East",
        photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2017/10/beagle.jpeg",
        adopter: false
      },
      {
        id: 1,
        nom: "belge",
        race: "Berger (Malinois)",
        type: "Arthropodes",
        emplacement: "Fort Wallace",
        photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2018/09/Belgischer-Sch%C3%A4ferhund-768x512.jpg",
        adopter: false
      },
      {
        id: 1,
        nom: "Bull",
        race: "Beauceron",
        type: "Annélide",
        emplacement: "Wapiti",
        photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2018/11/bull-terrier-noir-et-blanc-768x533.jpg",
        adopter: false
      },
      {
        id: 1,
        nom: "Fillax",
        race: "Bouvier bernois",
        type: "Cnidaire",
        emplacement: "l’ouest de la ville de Van Horn",
        photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/11/chaton-errant-768x512.jpeg",
        adopter: false
      },
      {
        id: 1,
        nom: "Railley",
        race: "Chats hybrides",
        type: "Amphibiens",
        emplacement: "la zone du marais au sud-est de Van Horn",
        photo: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/08/chat-bengal-768x512.jpeg",
        adopter: false
      }
    ]
  )


  return (
    <div>
      
    </div>
  )
}

export default AnimauxListe;
