import { tab } from "@testing-library/user-event/dist/tab"
import { ModelContentArticle } from "../../models/ModelContentArticle"
import { toBeEnabled } from "@testing-library/jest-dom/matchers"

//text and image content for the Features tab

const cliffDiver = new ModelContentArticle(
    "Cliff Diver",

    "",

    `Perched atop a towering canyon, Cliff Diver reigns as the park's tallest roller coaster, boasting a vertigo-inducing steep drop. Riders will experience an adrenaline-fueled rush as they hurtle down the coaster's first drop, descending a waterfall and into two consecutive inversions`,

    "img/coaster_cliffHanger.jpg",

    "photoL",

    "Yellow dive roller coaster that sits atop a canyon."
)

const hurricane = new ModelContentArticle(
    "Hurricane",

    "",

    `Hurricane is an exceedingly rare prototype coaster that provides a smooth and safe ride. What sets Hurricane apart from other coasters is its intensity. The sudden transitions and quick pacing create an adrenaline-fueled ride that will leave even the most experienced coaster enthusiasts breathless.`,

    "img/coaster_hurricane.jpg",

    "photoR",

    "Light blue hybrid roller coaster that resides over a beach."
)

const taboo = new ModelContentArticle(
    "Taboo",

    "",

    `Taboo is a launch roller coaster that surrounds the resort's parking lot and spans the Central Area and Beachside District. The coaster launches riders up and over the resort building before plummeting them down into the jungle below, providing a thrilling ride experience with stunning views.
    `,

    "img/coaster_taboo.jpg",

    "photoL",

    "Purple roller coaster track winding throughout a jungle-like location."
)

const wyvern = new ModelContentArticle(
    "Wyvern",

    "",

    `Wyvern is an inverted coaster that takes riders on a thrilling journey through a castle on the outskirts of the park. The coaster is well-known for its nine inversions, which provide a heart-pumping ride experience.
    \n\n
    Rumor has it that the coaster was built exceedingly fast due to the sudden disappearance of another ride. Despite the mysterious circumstances surrounding its construction, Wyvern has become a fan favorite among coaster enthusiasts.`,

    "img/coaster_wyvern.jpg",

    "photoR",

    "Large red inverted roller coaster, lots of loops. Winds through a forest and castle."
)

const endBringer = new ModelContentArticle(
    "End Bringer",

    "",

    `The Theme Park's classic roller coaster and the oldest standing ride at the park. End Bringer spans almost the entire length of the park. The coaster
    takes riders from the Central Square to the Beachside District where riders are taken high above the sea below.
    \n\n
    Featuring 6 inversions End bringer is known for it's iconic interlocking loops and winding corkscrews. Over the years the roller coaster has 
    become a fan favorite among coaster enthusiasts and casual park-goers alike.`,

    "img/coaster_endBringer.jpg",

    "photoR",

    "Blue roller coaster butterfly element with tree house in the background."
)

const unlockable = new ModelContentArticle(
    "Unlockable Rides",

    "",

    `Some of the most exciting roller coasters aren't accessible right from the start. As players progress through the story and increase their ride score, they'll unlock new areas and gain access to even more exciting coasters.`,

    "img/coaster_unlock.jpg",

    "photoL",

    "Blue looping roller coaster double loops with cobra roll in the background and coaster lift in the foreground."
)

const copyright = new ModelContentArticle(
    "",
    "copyright-statement",
    `© 2023 Jacob Miller. All Rights Reserved.`,
    "",
    ""
)

const ridesArticleInstances = [cliffDiver, hurricane, taboo, endBringer, wyvern, unlockable ,copyright];
export { ridesArticleInstances };