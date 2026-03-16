const quotes = [
    {
        id: 1,
        characters: ["Tony Soprano", "Jennifer Melfi"],
        quote: "Dr. Jennifer Melfi: What line of work are you in? | Tony Soprano: Waste management consultant.",
    },
    {
        id: 2,
        characters: ["AJ Soprano"],
        quote: "AJ: So what? No fuckin' ziti now?",
    },
    {
        id: 3,
        characters: ["Christopher Moltisanti"],
        quote: "Christopher Moltisanti: It's not like I'm gettin' somewhere's playin' by the rules!",
    },
    {
        id: 4,
        characters: ["Christopher Moltisanti"],
        quote: "Christopher Moltisanti: Fuckin' chaos! Nobody knows whose runnin' things anymore. Guys, they don't even know who to make payments up the ladder to in some cases. I'm talkin' about the year two thousand. The millenium. Where do we go from here?",
    },
    {
        id: 5,
        characters: ["Tony Soprano, Mikey Palmice"],
        quote: "Tony Soprano: Hey, mikey, how's the boy? Mikey Palmice: What boy is that, ton'? | Tony Soprano: The one you sleep with.",
    },
    {
        id: 6,
        characters: ["Mikey Palmice, Uncle Junior"],
        quote: "Mikey Palmice: I think you should've taken care of this Christopher Moltisanti thing the minute it first happened. You should've sent a clear-cut signal... You fuck with Junior Soprano- | Uncle Junior: Take it easy. We're not making a western here.",
    },
    {
        id: 7,
        characters: ["Christopher Moltisanti, Silvio Dante"],
        quote: "Christopher Moltisanti: This ain't negotiation time. This is Scarface, final scene, fuckin' bazookas under each arm, 'say hello to my little friend!' | Silvio Dante: Always with the scenarios.",
    },
    {
        id: 8,
        characters: ["Uncle Junior"],
        quote: "Uncle Junior: Hear about the Chinese godfather? He made them an offer they couldn't understand.",
    },
    {
        id: 9,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: I'm in the waste management business. Everybody immediately assumes you're mobbed up. It's a stereotype, and it's offensive.",
    },
    {
        id: 10,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Well you know about us wiseguys? The hustle never ends",
    },
    {
        id: 11,
        characters: ["Tony Soprano, Jennifer Melfi"],
        quote: "Dr. Jennifer Melfi: What's the one thing, every woman, your mother, your wife, your daughter, have in common? | Tony Soprano: They all break my balls.",
    },
    {
        id: 12,
        characters: ["Tony Soprano, Johnny Sack"],
        quote: "Tony Soprano: All due respect to New York, I don't think you should be tellin' my uncle how ta run things. | Johnny Sack: You think I got the balls ta drive in from New York and tell your uncle how he should run his family? I shouldn't expect to see the Statue of Liberty again if I did that, huh?",
    },
    {
        id: 13,
        characters: ["Livia Soprano"],
        quote: "Livia Soprano: He goes to talk about his mother. That's what he's doing. He talks about me, he complains. 'She didn't do this, she did that.' Oh, I gave my life to my children on a silver platter, and this is how he repays me.",
    },
    {
        id: 14,
        characters: ["Bakery Clerk, Christopher Moltisanti"],
        quote: "Bakery Clerk: You motherfucker! You shot my foot! | Christopher Moltisanti: It happens.",
    },
    {
        id: 15,
        characters: ["Uncle Junior, Mikey Palmice"],
        quote: "Uncle Junior: 'Cause he's a fucking mental weakling. | Mikey Palmice: I know. | Uncle Junior: You don't know shit Mikey. He's seeing a psychiatrist fer chrissake. How about that huh? My nephew is seeing a psychiatrist. It makes me wanna cry.",
    },
    {
        id: 16,
        characters: ["Massive Genius"],
        quote: "Massive Genius: You people are alright. Godfather? I've seen that movie 200 times. Godfather II was definitely the shit. The third one, a lot of people didn't like it, but I think it was just misunderstood.",
    },
    {
        id: 17,
        characters: ["Carmela Soprano"],
        quote: "Carmela Soprano: You know, Tony, it's a multiple choice thing with you. 'Cause I can't tell if you're old-fashioned, you're paranoid, or just a fucking asshole.",
    },
    {
        id: 18,
        characters: ["Tony Soprano, Vin Makazian"],
        quote: "Tony Soprano: I'm not gonna hurt a man that I love because of some cop gossip from a degenerate fuckin' gambler with a badge. You understand me? | Vin Makazian: You know... You got an amazing ability to sum up a man's whole life in a single sentence. \"Degenerate gambler with a badge.\" You're a pisser, you're a real pisser. | Tony Soprano: Well I'm sorry, I'm under a little bit of pressure here. I don't have time to suck your dick.",
    },
    {
        id: 19,
        characters: ["Tony Soprano, Jennifer Melfi"],
        quote: "Dr. Jennifer Melfi: I have patients who are suicidal! | Tony Soprano: Well they're not gonna feel any better about their life if you get clipped.",
    },
    {
        id: 20,
        characters: ["Tony Soprano, Jennifer Melfi"],
        quote: 'Dr. Jennifer Melfi: I watch the news like everyone else. I know who you are, and I saw "Analyze This". I don\'t need the ramifications that could arise from treating someone like yourself. | Tony Soprano: "Analyze This"? Come on, it\'s a fucking comedy.',
    },
    {
        id: 21,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: I find I have to be the sad clown: laughing on the outside, crying on the inside.",
    },
    {
        id: 22,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Those who want respect, give respect.",
    },
    {
        id: 23,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Everything we see and experience is not all there is.",
    },
    {
        id: 24,
        characters: ["Little Carmine"],
        quote: "Little Carmine: He's an old-fashioned kind of guy - very allegorical.",
    },
    {
        id: 25,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Someday soon, you're gonna have families of your own and, if you're lucky, you'll remember the little moments like this that were good.",
    },
    {
        id: 26,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: In the end, your friends are gonna let you down. Family. They're the ones you can depend on.",
    },
    {
        id: 27,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Sometimes it’s important to give people the illusion of being in control.",
    },
    {
        id: 28,
        characters: ["Tony Soprano"],
        quote: 'Tony Soprano: Remember "when" is the lowest form of conversation.',
    },
    {
        id: 29,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: There's no geographical solution to an emotional problem.",
    },
    {
        id: 30,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Is this a woman thing? You ask me how I’m feeling. I tell you how I’m feeling, and now you’re going to torture me with it.",
    },
    {
        id: 31,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: If you can quote the rules, then you can obey them.",
    },
    {
        id: 32,
        characters: ["Uncle Junior"],
        quote: "Uncle Junior: You steer the ship the best way you know. Sometimes it’s smooth. Sometimes you hit the rocks. In the meantime, you find your pleasures where you can.",
    },
    {
        id: 33,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: It’s not a nursing home! It’s a retirement community.",
    },
    {
        id: 34,
        characters: ["Uncle Junior"],
        quote: "Uncle Junior: Teddy Roosevelt once gave an entire speech with a bullet lodged in his chest. Some things are just a matter of duty.",
    },
    {
        id: 35,
        characters: ["Jennifer Melfi"],
        quote: "Dr. Jennifer Melfi: Some people take pleasure in the simple doing of things.",
    },
    {
        id: 36,
        characters: ["Christopher Moltisanti"],
        quote: "Christopher Moltisanti: Other people’s definitions of you, sometimes they’re more about making themselves feel better. You gotta define yourself.",
    },
    {
        id: 37,
        characters: ["Christopher Moltisanti"],
        quote: "Christopher Moltisanti: Pours you a drink with one hand. Judges you with the other if you take it.",
    },
    {
        id: 38,
        characters: ["Jennifer Melfi"],
        quote: "Dr. Jennifer Melfi: People only see what you allow them to see.",
    },
    {
        id: 39,
        characters: ["Christopher Moltisanti"],
        quote: "Christopher Moltisanti: In my thoughts, I used a technique of positive visualization. How come I always feel undermined?",
    },
    {
        id: 40,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: A grown man made a wager. He lost. He made another one—he lost again. End of story.",
    },
    {
        id: 41,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: You know when I was depressed I said I didn’t want to live? Well, I’ll tell you something—I didn’t want to die.",
    },
    {
        id: 42,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: A wrong decision is better than indecision.",
    },
    {
        id: 43,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: I’m like King Midas in reverse here. Everything I touch turns to shit.",
    },
    {
        id: 44,
        characters: ["Livia Soprano"],
        quote: "Livia Soprano: I wish the Lord would take me now.",
    },
    {
        id: 45,
        characters: ["Livia Soprano"],
        quote: "Livia Soprano: Depressed? My father came to this country with 17 cents in his pocket and never made a peep. What’s he got to be depressed about? Nobody threw him into the glue factory, and sold his house out from underneath him!",
    },
    {
        id: 46,
        characters: ["Carmela Soprano"],
        quote: "Carmela Soprano: Getting my wine in position to throw in your damn face.",
    },
    {
        id: 47,
        characters: ["Carmela Soprano"],
        quote: "Carmela Soprano: What’s different between you and me is you’re going to Hell when you die!",
    },
    {
        id: 48,
        characters: ["Carmela Soprano"],
        quote: "Carmela Soprano: I appreciate everything that you’ve done for me, Father Phil. The religious counseling, the book on Buddhism, the wonderful chats…But I think you need to look at yourself. Call this an intervention. I think you have this M.O. where you manipulate spiritually thirsty women. And I think a lot of it is tied up with food somehow, as well as the sexual tension game.",
    },
    {
        id: 49,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: That’s why dinosaurs don’t exist no more.",
    },
    {
        id: 50,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: You add up all your mortal sins and multiply that number by 50. Then you add up all your venial sins and multiply that by 25. You add that together and that’s your sentence. I figure I’m gonna have to do 6,000 years before I get accepted into heaven and 6,000 years is nothin’ in eternity terms. I can do that standing on my head. It’s like a couple of days here.",
    },
    {
        id: 51,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: Your mother was working the bonbon concession at the Eiffel Tower.",
    },
    {
        id: 52,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: She’s so fat, she goes campin’, the bears have to hide their food.",
    },
    {
        id: 53,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: Earnings before interest, taxes, depreciation, and amortization. It gives a true picture of a company’s profitability.",
    },
    {
        id: 54,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: When I was a kid, you two were old ladies. Now I’m old, and you two are still old.",
    },
    {
        id: 55,
        characters: ["Meadow Soprano"],
        quote: "Meadow Soprano: Sometimes we’re all hypocrites.",
    },
    {
        id: 56,
        characters: ["Little Carmine"],
        quote: "Little Carmine: A total debacle.",
    },
    {
        id: 57,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: They’re the vehicle that gets us here. They drop us off and go on their way. They continue on their journey. And the problem is that we keep trying to get back on the bus, instead of just letting it go.",
    },
    {
        id: 58,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Buy land, cause God ain’t making any more of it.",
    },
    {
        id: 59,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: All due respect, you got no fucking idea what it’s like to be number one. Every decision you make affects every facet of every other thing. It’s too much to deal with, almost. And in the end, you’re completely alone with it all.",
    },
    {
        id: 60,
        characters: ["Tony Soprano"],
        quote: "Tony Soprano: Focus on the good times.",
    },
    {
        id: 61,
        characters: ["Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri: Oh, it's like an ad for weight loss, before and WAY before",
    },
    {
        id: 62,
        characters: ["Paulie “Walnuts” Gualtieri, Ralph Cifaretto"],
        quote: "Paulie “Walnuts” Gualtieri: You're late! | Ralph Cifaretto: Tommorow I can be on time, but you'll be stupld forever.",
    },
    {
        id: 63,
        characters: ["Christopher Moltisanti, Paulie “Walnuts” Gualtieri"],
        quote: "Christopher Moltisanti: All Russians aren't bad | Paulie “Walnuts” Gualtieri: What about the Cuban Missile Crisis, when they pointed those rockets at us? | Christopher Moltisanti: Damn, I saw that movie...I thought it was bullsh*t",
    },
    {
        id: 64,
        characters: ["Tony Soprano, Jennifer Melfi"],
        quote: "Dr. Jennifer Melfi: Sounds like to me Anthony Jr. stumbled onto existentialism. | Tony Soprano: Fuckin intanet",
    },
    {
        id: 65,
        characters: ["Ralph Cifaretto"],
        quote: "Ralph Cifaretto: Gentleman, what we do in life echoes in eternity.",
    },
    {
        id: 66,
        characters: ["Christopher Moltisanti, Paulie “Walnuts” Gualtieri"],
        quote: "Paulie “Walnuts” Gualtieri:  You're not gonna believe this. He killed sixteen Czechoslovakians. The guy was an interior decorator. | Christopher Moltisanti: His house looked like shit.",
    },
    {
        id: 67,
        characters: ["Carmela Soprano"],
        quote: "Carmela Soprano: We worry so much. Sometimes it feels like that’s all we do. But in the end, it just gets washed away. All of it just…just gets washed away.",
    },
];

export default quotes;
