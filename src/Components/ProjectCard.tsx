import '../CSS/ProjectCard.css'

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description?: string;
    Linkto: string;
}

const ProjectCard = ({ imageSrc, title, description, Linkto }: ProjectCardProps) => {
    return(
        <>
        <div className="PorjectCardContainer">
            <div className='ProjectCard'>
                <h1 className='CardHeader'>{title}</h1>
                <img src={imageSrc} alt={title} className='ImageSize' />
                <p className='Cardtxt'>{description}</p>
                <a href={Linkto} target="blank" rel="noopener noreferrer" className='ProjectLink'>
                    <button className='CardButton'>View My Project</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default ProjectCard