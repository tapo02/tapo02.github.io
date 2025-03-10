const facts = [
    "I hate it when people try to pass you at the top of an escalator. Like are you trying to make getting off as hard as possible??",
    "I am a very messy person. Somehow, however, I cannot work if the space around me is not tidy. It's like I'm a completely different person when working.",
    "Whenever I discover new songs I like, I listen to them nonstop until I don't like them anymore. Self-sabotage at its finest.",
    "My great-grandfather was a composer.",
    "I once was left behind by my teacher during a school ski course. I had to join another teacher's group to not get lost completely.",
    "I've known 'Wicked' inside out years before the movie came out. Since then it's become my whole personality (again).",
    "I've completed a Dutch-language summer course in Hungary. Talk about random.",
    "I once wrote a love story about the two clock hands of Big Ben for school. And I reused this story for another text for a language course in University."
];

function select_random_fact() {
    const random_fact = facts[Math.floor(Math.random() * facts.length)]
    document.getElementById("fact").textContent = random_fact;
    document.getElementById("hide_button").style.display = "inline-block";
}

function hide_fact() {
    document.getElementById("fact").textContent = "";
    document.getElementById("hide_button").style.display = "none";
}

document.getElementById("fact_generator").addEventListener("click", select_random_fact);
document.getElementById("hide_button").addEventListener("click", hide_fact);