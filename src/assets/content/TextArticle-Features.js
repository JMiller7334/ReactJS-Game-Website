import { ModelContentArticle } from "../../models/ModelContentArticle"

//text and image content for the Features tab

const explore = new ModelContentArticle(
    "Explore",

    "featureItem",

    `Embark on an epic journey through the world of Theme Park Project, filled with zones and locations just waiting to be explored. Whether you're searching for hidden secrets or simply seeking to relax, this adventure-packed game has something for everyone.`,

    "img/vectors/vectorExplore.svg",

    "vectorImg",

    "White map icon."
);

const playerHome = new ModelContentArticle(
    "Your Own Home",

    "featureItem",

    `Create your dream living space in the game! Customize everything from the walls to the floors and furniture, you can truly make it your own. 
    \n\n
    Earn upgrades by paying off your debts and transform your humble abode into a coveted mansion. Let your creativity run wild and design the perfect home for your virtual adventures!`,

    "img/vectors/vectorHome.svg",

    "vectorImg",

    "White gear acon with house in the middle."
);

const customize = new ModelContentArticle(
    "Customize",

    "featureItem",

    `Choose from a wide range of unique titles to customize your character and stand out from the crowd. Not only that, but you can also switch up your in-game deployable rest chair to relax in style and comfort. 
    \n\n
    With unlimited customization options available, Theme Park Project offers endless possibilities to express yourself and play the game your way.`,

    "img/vectors/vectorCustomize.svg",

    "vectorImg",

    "White gear icon with wand in the middle."
);

const deliver = new ModelContentArticle(
    "Deliver",

    "featureItem",

    `Deliver important letters to the park's visitors while exploring the vast surroundings.
    \n\n
    Whether you're a casual player or a dedicated completionist, the postman job is a unique and exciting way to earn in-game currency and become a part of the park's community.`,

    "img/vectors/vectorLetter.svg",

    "vectorImg",

    "White letter icon."
);

const repair = new ModelContentArticle(
    "Repair",

    "featureItem",

    `Ascend to new heights as you scale towering attractions to keep them in top condition. Traverse catwalks and ladders to repair and maintain roller coasters, ferris wheels, and other thrilling rides. 
    \n\n
    Earning in-game currency with each successful repair, you'll ensure the park remains a safe and exciting destination for all visitors.`,

    "img/vectors/vectorWrench.svg",

    "vectorImg",

    "White wrench icon."
);

const restore = new ModelContentArticle(
    "Restore",

    "featureItem",

    `Theme Park Project is under attack by a mysterious vandal known only as 'The Painter.' Take matters into your own hands and fight back against their graffiti by cleaning up the park and restoring it to its glory. 
    \n\n
    Not only will you be saving the park, but you'll also earn valuable in-game currency for your efforts`,

    "img/vectors/vectorGraffiti.svg",

    "vectorImg",

    "White text that says 'paint the park'."
);

const copyright = new ModelContentArticle(
    "",
    "copyright-statement",
    `© 2023 Jacob Miller. All Rights Reserved.`,
    "",
    ""
)

const featuresArticleInstances = [explore, playerHome, customize, deliver, repair, restore ,copyright];
export { featuresArticleInstances };