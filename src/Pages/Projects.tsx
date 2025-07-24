import ProjectCard from "../Components/ProjectCard"
import HavenHub from '../Images/havenhub.png'
import MomentImg from '../Images/momentmanager.png'
import FlavorFight from '../Images/flavorfight.netlify.app_.png'
import '../CSS/Project.css'




const MyProjects = () => {
    return (
        <div>
            <h1 className="ProjectsHeader">My Projects</h1>
            <div className="ProjectContainer">
            <ProjectCard  
                title="Moment Manager" 
                imageSrc={MomentImg}
                description="A web application for managing and sharing moments with friends and family. Users can create, edit, and delete moments, as well as share them with others."
                Linkto="https://momentmanager.netlify.app/"
                />

            <ProjectCard  
                title="HavenHub Hotel" 
                imageSrc={HavenHub}
                description="A hotel management system that allows users to book rooms, manage reservations, and view hotel information. It includes features for both customers and hotel staff."
                Linkto="https://havenhubhotel.netlify.app/"
                />

            <ProjectCard  
                title="Flavor Fight" 
                imageSrc={FlavorFight}
                description="FlavorFight is an interactive web application designed to help users discover their next meal in a fun and engaging way. Through a three-round elimination game, users select their preferred food options from a series of randomized choices. After narrowing down their selection, the app uses the user’s location to recommend nearby restaurants that serve the winning dish. FlavorFight combines playful decision-making with practical restaurant suggestions, making it easy and enjoyable to solve the classic “What should I eat?” dilemma."
                Linkto="https://flavorfight.netlify.app/"
                />
            </div>
        </div>
    )
}

export default MyProjects