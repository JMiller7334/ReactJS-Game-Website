import { ModelContentArticle } from "../../models/ModelContentArticle"

//text and image content for the Features tab

const explore = new ModelContentArticle(
    "Explore",

    "featureItem",

    `Set out to explore the game, filled with locations and roller coasters to discover. Whether you're searching for hidden secrets or simply looking to relax, there is plenty to find and explore.`,

    "img/vectors/vectorExplore.svg",

    "vectorImg",

    "White map icon."
);

const playerHome = new ModelContentArticle(
    "Your Own Home",

    "featureItem",

    `Create your dream living space in the game! Customize everything from the walls to the floors and furniture to make it your own. 
    \n\n
    Earn upgrades by paying off your debts and transform your humble abode into a mansion. Let your creativity run wild and design the perfect home for your virtual adventures!`,

    "img/vectors/vectorHome.svg",

    "vectorImg",

    "White gear acon with house in the middle."
);

const customize = new ModelContentArticle(
    "Customize",

    "featureItem",

    `Choose from a wide range of unique titles and more to customize your character and stand out from the crowd. 
    \n\n
    With plenty customization options available, there are tons of possibilities to play the game your way.`,

    "img/vectors/vectorCustomize.svg",

    "vectorImg",

    "White gear icon with wand in the middle."
);



const copyright = new ModelContentArticle(
    "",
    "copyright-statement",
    `© 2023 Jacob Miller. All Rights Reserved.`,
    "",
    ""
)

const featuresArticleInstances = [explore, playerHome, customize ,copyright];
export { featuresArticleInstances };