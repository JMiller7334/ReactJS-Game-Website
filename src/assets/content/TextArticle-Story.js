import { ModelContentArticle } from "../../models/ModelContentArticle"

//text content for the topic description for the Story tab.
const kana = new ModelContentArticle(
    "Kana",

    "",

    `She's a temp-hire working at The Theme Park, known for her quick-wit, intelligence, and love for coffee. As a roller coaster engineer, she's considered to be very good her job.
    \n\n
    Despite her professionalism, there seems to be something more that she's searching for at the park.
    Perhaps it's the excitement of uncovering something new and unexpected, or maybe she's on a personal mission to discover a hidden truth about the park.
    `,

    "img/photo_kana.jpg",

    "photoL",

    "In-game character Kana, she has purple hair in a long pony tail, bangs framing her face, and blue eyes."
);

const tim = new ModelContentArticle(
    "Tim",

    "",

    `Tim is the laid-back manager of the ride management team at the park. Known for his easy-going nature and approachable demeanor, he always puts his employees first.
    \n\n
    He can often be found in the meeting room, handling paperwork and ensuring everything runs smoothly. He possesses a wealth of knowledge about the park's history and inner workings, but he doesn't always let on about what he knows.`,

    "img/photo_tim.jpg",

    "photoR",
    
);

const paul = new ModelContentArticle(
    "Paul",

    "",

    `Paul is a tired-looking park-goer who was once known for telling tall tales. Though his stories were often dismissed as mere fabrications, rumors persist that he carries a dark secret.
    \n\n
    These days, Paul spends his time quietly at the local cafe. His once-energetic demeanor has been replaced by a sense of weariness, and he often seems lost in thought.`,

    "img/photo_paul.jpg",

    "photoL"
);

const william = new ModelContentArticle(
    "William",

    "",

    `William was a ride operator who went missing from the park 10 years ago. Despite an extensive investigation, he was never found.
    \n\n
    The circumstances surrounding William's disappearance remain a mystery. Some say that he simply wandered off and got lost in the dense forest that surrounds the park, while others believe that it was something more sinister.
    \n\n
    Whatever the truth may be, William's disappearance has left a lasting impression on the park and those who knew him.`,

    "img/photo_William.jpg",

    "photoR"
);

const copyright = new ModelContentArticle(
    "",
    "copyright-statement",
    `© 2023 Jacob Miller. All Rights Reserved.`,
    "",
    ""
)

const storyArticleInstances = [kana, tim, paul, william, copyright];
export { storyArticleInstances };