export default function frogs(id){
    id = parseInt(id);
    if(id === 1){
        return {
            "id": 1,
            "name":"Orange and Red Poison Dart Frog",
            "imageSrc": "Photo by Thierry Fillieul: https://www.pexels.com/photo/orange-and-black-poison-darth-frog-638689/",
            "image": require("../assets/images/pexels-thierry-fillieul-638689.jpg"),
            "keys":["habitat", "diet"],
            "keysSource": 'https://www.rainforest-alliance.org/species/poison-dart-frog/',
            "habitat": "Poison dart frogs can be found in the tropical rainforests of Central and South America. Unlike many other amphibians, poison dart frogs are diurnal. Most species are terrestrial but a few are arboreal.",
            "diet": "Poison dart frogs are insectivores, preferring to eat ants and other small insects that they can hunt among the leaf litter of the forest floor. It is believed that the toxins in the frogs’ bodies may be related to the type and amount of insects that they consume."
        }
    }
    else if(id === 2){
        return {
            "id": 2,
            "name": "Red-Eyed Tree Frog",
            "imageSrc": "https://images.unsplash.com/photo-1586769203114-cf7f0f37297a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80",
            "image" : require("../assets/images/zdenek-machacek-WTr9TVVxZlQ-unsplash.jpg"),
            "keys": ['habitat',"diet"],
            "keysSource": 'https://www.rainforest-alliance.org/species/tree-frog/',
            "habitat": "First identified by herpetologist Edward Cope in the 1860s, the red-eyed tree frog is found in the lowlands and on slopes of Central America and as far north as Mexico. As with other amphibians, red-eyed tree frogs start life as tadpoles in temporary or permanent ponds. As adult frogs, they remain dependent on water to keep their skin moist, staying close to water sources such as rivers found in humid lowland rainforests. Red-eyed tree frogs can be found clinging to branches, tree trunks and even underneath tree leaves. Adults live in the canopy layer of the rainforest, sometimes hiding inside bromeliads.",
            "diet": "Red-eyed tree frogs are carnivores, feeding mostly on insects. They prefer crickets, flies, grasshoppers and moths. Sometimes, they will eat smaller frogs. For tadpoles, fruit flies and pinhead crickets are the meals of choice."
        }
    }
    else if(id === 3){
        return{
            "id": 3,
            "name": "Tree Frog",
            "imageSrc": "https://unsplash.com/photos/DCelW4ytxfM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
            "image": require("../assets/images/david-clode-DCelW4ytxfM-unsplash.jpg"),
            "keys":['hylidae'],
            "keysSource": 'https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/hylidae',
            "hylidae": "The family Hylidae comprises 692 species with almost cosmopolitan distribution, although it is absent from a large part of Africa. Most hilids are scansorial species, with slender built bodies and expanded fingers, although there are also semiaquatic, raniform species. The hilids share claw-shaped terminal phalanges that support the digital discs and intercalary cartilages between the last two phalanges of each digit, eight holochordal, procoelous presacral vertebrae, the absence of ribs, and presence of teeth in maxillae and premaxillae (Duellman and Trueb, 1986; Ford and Cannatella, 1993). Hyla meridionalis and Hyla savignyi are the only African hylids, showing the typical scansorial morphology."
        }
    }
    else if(id === 4){
        return{
            "id": 4,
            "name": "Blue Poison Dart Frog",
            "imageSrc": "https://unsplash.com/photos/IniemNK2HtE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
            "image": require("../assets/images/zachary-spears-IniemNK2HtE-unsplash.jpg"),
            "keys":["habitat", "diet"],
            "keysSource": 'https://www.rainforest-alliance.org/species/poison-dart-frog/',
            "habitat": "Poison dart frogs can be found in the tropical rainforests of Central and South America. Unlike many other amphibians, poison dart frogs are diurnal. Most species are terrestrial but a few are arboreal.",
            "diet": "Poison dart frogs are insectivores, preferring to eat ants and other small insects that they can hunt among the leaf litter of the forest floor. It is believed that the toxins in the frogs’ bodies may be related to the type and amount of insects that they consume."
        }
    }
    else if(id === 5){
        return {
            "id": 5,
            "name": "Common Frog",
            "imageSrc": "https://all-free-download.com/free-photos/download/common_frog_frog_amphibian_272760.html#google_vignette",
            "image": require("../assets/images/common_frog_frog_amphibian.jpg"),
            "keys": ['about'],
            "keysSource": "https://www.wildlifetrusts.org/wildlife-explorer/amphibians/common-frog",
            "about": 'Common frogs are amphibians, breeding in ponds during the spring and spending much of the rest of the year feeding in woodland, gardens, hedgerows and tussocky grassland. They are familiar inhabitants of garden ponds, where they lay their eggs in big \'rafts\' of spawn. They feed on a variety of invertebrates and even smaller amphibians.'
        }
    }
    else if(id === 6){
        return {
            "id": 6,
            "name": "Finger-Coral Tree Frog",
            "imageSrc": "https://all-free-download.com/free-photos/download/fingercoral_tree_frog_running_frog_frog_220163.html",
            "image": require("../assets/images/fingercoral_tree_frog_running_frog_frog.jpg"),
        }
    } 
        
}