import tone from '../assets/png/tone.png'
import bubble from '../assets/png/bubble.png'
import dot from '../assets/png/dot.png'
import study from '../assets/png/study.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'ToneBook',
        projectDesc: "This project seeks to provide musicians with an easy-to-use layout for organizing practice routines, with the ability to easily track progress, and create lesson plans all in one place. It is my first full stack application developed solo from start to finish, and I use it regularly. I have plans to get it hosted again, following the unfortunate demise of Heroku's free tier.",
        tags: ['React', 'HTML' ,'CSS', 'Javascript', 'Ruby on Rails'],
        code: 'https://github.com/jcollinc/capstone',
        demo: 'https://www.youtube.com/watch?v=lY9g-pIvGqk',
        image: tone
    },
    {
        id: 2,
        projectName: 'Bubblegram',
        projectDesc: 'Bubblegram is a web application created using ReactJS and AWS Amplify, and submmited for my very first hackathon. Users can create bubbles, which are interactive photo uploads that added friends and family can see through their own individual feeds.',
        tags: ['AWS Amplify', 'React', 'HTML' ,'CSS', 'Javascript'],
        code: 'https://github.com/jcollinc/Bubblegram',
        demo: 'https://www.youtube.com/watch?v=X2OwRFLXRzY',
        image: bubble
    },
    {
        id: 3,
        projectName: 'Dotify',
        projectDesc: 'This project is a Spotify clone, and is my first full stack aplication. It was built with React and Sinatra. I learned a lot about how the front and back ends coordinate, as well as the considerations to be made when approaching the development of each.',
        tags: ['React', 'HTML' ,'CSS', 'Javascript', 'Ruby', 'Sinatra'],
        code: 'https://github.com/jcollinc/Dotify',
        demo: 'https://www.youtube.com/watch?v=PeQ3-VH7qQ4',
        image: dot
    },
    {
        id: 4,
        projectName: 'Study Room',
        projectDesc: 'A message board created for classmates to collaborate on work, with a coffee ordering component; built using React. I learned about RESTful conventions and used json-server to create a REST API for out React front end.',
        tags: ['React', 'HTML' ,'CSS', 'Javascript'],
        code: 'https://github.com/jcollinc/Study-Room',
        demo: 'https://www.youtube.com/watch?v=Xx0XEUWkUIY',
        image: study
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/