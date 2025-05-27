import '../CSS/ProjectCard.css'

interface ProjectCardProps {
    imageSrc: string;
    title: string;
}

const ProjectCard = ({ imageSrc, title }: ProjectCardProps) => {
    return(
        <>
        <div className="PorjectCardContainer">
            <div className='ProjectCard'>
                <h1>{title}</h1>
                <img src={imageSrc} alt={title} />
                <p>Brief description of project</p>
                <button >Check out my Project</button>
            </div>
        </div>
        </>
    )
}

export default ProjectCard