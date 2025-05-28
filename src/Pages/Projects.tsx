import ProjectCard from "../Components/ProjectCard"
import HavenHub from '../Images/havenhub.png'
import MomentImg from '../Images/momentmanager.png'




const MyProjects = () => {
    return (
        <div>
            <h1>My Projects</h1>
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
            </div>
        </div>
    )
}

export default MyProjects