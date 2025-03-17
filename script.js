// const report = document.querySelector(".report");

// const name = getName();
// const pronouns = getPronouns();
// const area = getArea();

// let item = "didn't specify";
// let sentenceOne;


// const template = [
//     {
//         area: "art",
//         folding: `I joined ${name} while ${pronouns.singular} was folding ${item} in the art area.`,
//         drawing: `I sat with ${name} while ${pronouns.singular} was drawing item in the art area.`,
//         book: `I sat in the art area with ${name} while ${pronouns.singular} made a book about topic.`,
//         project: `I joined ${name} in the art area while ${pronouns.singular} was working on a project project-name.`,
//         clay: `I talked with ${name} while they built item out of clay.`,
//     },
// ];

// const areaIndex = template.findIndex(x => x.area == area);
// const activityOptions = getActivityOptions(template[areaIndex]);
// selectActivity();
// report.textContent = sentenceOne;


// function getName() {
//     return prompt("Write the child's name:");
// };

// function getPronouns() {
//     const input = prompt("What is the child's gender? Type b for boy and g for girl. (Case sensitive)");

//     if(input == "b") {
//         return {
//             singular: "he",
//         }
//     };
//     if(input == "g") {
//         return {
//             singular: "she",
//         }
//     }
//     return pronouns;
// }

// function getArea() {
//     const input = prompt("What area did you interact in?");
//     if(input == "art") {
//         return input;
//     } else {
//         alert("Must provide an existing area, press okay and try again");
//         getArea();
//     }
// }

// function getActivityOptions(obj){
//     const keys = [];
//     for(const key in obj){
//         keys.push(key);
//     }
//     keys.shift(); //to remove the area itself
//     return keys;
// };

// function selectActivity() {
//     const input = prompt(`Choose from one of the following: ${activityOptions.join(" ")}, must be an exact match`);
//     if(input == "folding") {
//         item = prompt("What did you fold?");
//         sentenceOne = template[areaIndex].folding;
//         console.log(sentenceOne);
//     }

// };


const toggleScreens = ()=> {
    const formOne = document.querySelector(".form-one");
    const formTwo = document.querySelector(".form-two");

    return {
        fromFormOneToFormTwo() {
            formOne.style.display = "none";
            formTwo.style.display = "inline-flex";
        },
    }
}

const toggle = toggleScreens();

const formOneBtn = document.querySelector(".form-one-btn");

formOneBtn.addEventListener("click", ()=> {
    const name = document.getElementById("child-name").value;
    const gender = document.getElementById("gender").value;
    const area = document.getElementById("area").value;

    toggle.fromFormOneToFormTwo();


});







