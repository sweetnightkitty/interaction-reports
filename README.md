# interaction-reports

## About the project

Early childhood educators need to keep a daily log of the interactions that they have with children in what is often referred to as Daily Interaction Report. These reports serve as a record of the teacher-child relationship and it's impact on the child's development within the classroom and their second language education, highlighting positive interactions, areas of growth, and any potential concerns that may need further attention. 


## Problem

Most English as a second language educators work part-time and the majority of their day is spent in the classroom or preparing lesson materials. The time available to write quality child interaction reports is often lacking. The downside of this is that, educators who feel rushed to get their reports done may be less motivated to write a detailed description of their interactions, in favor of working quickly in order to complete their work on time.

An additonal concern is that teachers draw directly from these daily interaction reports in order to write their end-of-semester progress reports. If teachers are rushing to complete their daily interaction reports then, surely their semeseterly reports will suffer too. Additonally, since the daily reports are written internally, and often rushed, teachers are often forced to dedicate additional time to rewrite the daily interactions that they select for semester reports. This often leads to many teachers working overtime in order to finish.

## Goal:
Since part-time educators have limited time to dedicate to daily interaciton reports, I wanted to create a program that would automate some of the more repetitive aspects of this process to free up time for teachers to focus more on the quality of information that they are logging and to create a polished version of their daily interactions so that they could immediately add these to their semesterly reports without the need to rewrite them.

As a child's personality, emotional needs and their experience in the classroom are entirely unique and infinitely complex, it would be impossible to create a fully automated interaction report that accurately collected vital information about teacher-child interactions, and their personal achievements. 

But when it comes to writing these daily interactions teachers constantly list information about where interactions took place and what they were doing. This information is crucial in understanding the context of conversations, as well as to showcase how teachers and children spend time together. But since there are largely a finite list of where interactions take place, as well as most common activities engaged in, this part of the process could stand to be automated.


## Usage

The Interaction Report Generator will be compiled of 3 seperate forms in sequence:

### Form 1: Child informaton & area of interaction
Teachers will be prompted for a child's name, gender, and the area of the classroom that the interaction took place. Field trip is also included as a catch-all category for any non-typical trips out of the classroom or holiday events, graduation etc. 

### Form 2: Specfic activity the child engaged in
After providing this information the user will be prompted to answer what type of activity they were engaging in that area from a pre-made list of the most common activities in that area.

While I did my best to imagine any possible activity that could take place in a given area, there is always possibility that something more unique or creative takes place and in that case users can select the "other" option and manually add in the activity.

### Form 3: Interaction with the child

Then the user will be prompted to write a couple sentences focusing specifically on the interaction, including any inmportant dialog and comments on the child's personal achievements and growth.

This is the part of the interaction report that matters most, and where teachers should focus the most of their efforts on. 

After concluding their interaction comments, the teacher will be prompted to provide a summary sentence that encapsulates the theme of the interaction. Whether the child made a noticeable break through that day, displayed a positive sign of emotional development, or formed a deeper connection with their teacher, etc. 


## Script Creation

Much of this program will be dependent upon the information provided by teachers. Name and gender are provided so that the program can automatically add a child's name where needed, and select for the correct pronouns i.e. he vs she in the final text.

The issue is that with a "fill in the blank" style script, scripted sentences contain variables that are not defined until after the sentence is accesed. Such as in this example object for the art area:


```JavaScript
{
    area: "art",
    folding: `I joined ${name} while ${pronouns.singular} was folding ${item} in the art area.`,
    drawing: `I sat with ${name} while ${pronouns.singular} was drawing item in the art area.`,
    book: `I sat in the art area with ${name} while ${pronouns.singular} made a book about topic.`,
    project: `I joined ${name} in the art area while ${pronouns.singular} was working on a project project-name.`,
    clay: `I talked with ${name} while they built item out of clay.`,
}
```

In order to circumvent this issue, I am converting from relying strictly on an array of objects and series of alerts, to instead using a series of step-wise forms. 
