# interaction-reports

## About the project

Early childhood educators need to keep a daily log of the interactions that they have with children. However for educators working part-time most of the day is spent in the classroom or preparing lesson materials that the time to adequately log child interactions is often lacking.

As a child's personality, emotional needs and their experience in the classroom are entirely unique and infinitely complex, it would be impossible to create a fully automated interaction report that accurately collected vital information about teacher-child interactions, and their personal achievements. 

However, when it comes to writing these daily interactions teachers need to also consider the structure of their report, and list information about where interactions took place and what they were doing. This information is crucial in understanding the context of conversations, as well as to showcase how teachers and children spend time together. 

Since part-time educators have limited time to dedicate to daily interaciton reports, I wanted to create a program that would automate some of the more repetitive aspects of this process to free up time for teachers to focus more on the unique aspects of their interactions.

Additionally, most teachers draw directly from these daily interaction reports in order to write their end-of-semester progress reports. Due to the rushed nature of these daily interaction logs, teachers are often forced to dedicate additional time to rewrite the daily interactions that they select for semester reports. This often leads to many teachers working overtime in order to finish.

Therefore my goal was to create a program that not only freed up time for educators to focus more on what matters, but to create a polished version of their daily interactions so that they could immediately add these to their semesterly reports without the need to rewrite them.




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
