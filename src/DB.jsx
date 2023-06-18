import { v4 as uuid } from 'uuid';
export const data=[
    {
        id: uuid(),
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFYInWssUbRGKViId6dyiU9OzhqV2FKuc4Q&usqp=CAU",
        title: "Exercise",
        start: "2023-06-01",
        repeat: "Daily",
        isArchived: false,
        isInTrash: false,
        goal: "Stay fit and healthy"
    },
    {
        id: uuid(),
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9S8sRAuv356o_jcecfPCJ7V3NGnGQeM2pyg&usqp=CAU",
        title: "Meditation",
        start: "2023-06-02",
        repeat: "Daily",
        isArchived: false,
        isInTrash: false,
        goal: "Find inner peace"
    },
    {
        id: uuid(),
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWjOnZsz6rSJBxIKweXOohF4428p8d3XpyA&usqp=CAU",
        title: "Reading",
        start: "2023-06-03",
        repeat: "Weekly",
        isArchived: false,
        isInTrash: false,
        goal: "Read 2 books per month"
    }
]

// https://images.healthshots.com/healthshots/en/uploads/2022/05/14195152/meditation.jpg