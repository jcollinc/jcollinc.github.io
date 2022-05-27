import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import tone from '../assets/png/tone.png'
import crave from '../assets/png/crave.png'
import dot from '../assets/png/dot.png'
import study from '../assets/png/study.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'ToneBook',
        projectDesc: 'This project seeks to provide musicians with an easy-to-use layout for organizing practice routines, with the ability to easily track progress, and create lesson plans all in one place. It is my first full stack application developed solo from start to finish, and third full stack app overall.',
        tags: ['React', 'HTML' ,'CSS', 'Javascript', 'Ruby on Rails'],
        code: 'https://github.com/jcollinc/capstone',
        demo: 'https://www.youtube.com/watch?v=lY9g-pIvGqk',
        image: tone
    },
    {
        id: 2,
        projectName: 'CraveLocal',
        projectDesc: 'This is a clone for a meal ordering service. For our second fullstack application, my partner and I set out to expand our understanding of backend technologies; this was our first time using Rails, which allowed us to learn and implement authentication methods to increase the overall seurity of our app. (Live demo in the works)',
        tags: ['React', 'HTML' ,'CSS', 'Javascript', 'Ruby on Rails'],
        code: 'https://github.com/jcollinc/crave-local',
        demo: '',
        image: crave
    },
    {
        id: 3,
        projectName: 'Dotify',
        projectDesc: 'This project is a Spotify clone, and is my first full stack aplication. It was built with React and Sinatra. My partner and I learned a lot about how the front and back ends coordinate, as well as the considerations to be made when approaching the development of each.',
        tags: ['React', 'HTML' ,'CSS', 'Javascript', 'Ruby', 'Sinatra'],
        code: 'https://github.com/jcollinc/Dotify',
        demo: 'https://www.youtube.com/watch?v=PeQ3-VH7qQ4',
        image: dot
    },
    {
        id: 4,
        projectName: 'Study Room',
        projectDesc: 'A message board created for classmates to collaborate on work, with a coffee ordering component; built using React. My partner and I learned about RESTful conventions and used json-server to create a REST API for out React front end.',
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