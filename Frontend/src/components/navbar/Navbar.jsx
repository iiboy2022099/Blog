import { useNavigate } from "react-router-dom";

const ButtonNav = ({text, onClickHandler}) => {
    return (
        <span className="button-nav" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const navigate = useNavigate()
  
    const handleNavigateToHome = () => {
        navigate('/home')
    }
    const handleNavigateToTecnologia = () => {
        navigate('/tecnologia')
    }
    const handleNavigateToTaller = () => {
        navigate('/taller')
    }
    const handleNavigateToPractica = () => {
        navigate('/practica-supervisada')
    }
    return (
    <div className="nav-container">
        <div className="nav-buttons-container">
            <img className="img-fix" src="../../../images/icon.png" alt="" />
            <h1 className="title-nav">El Blog de un programador</h1>
            <ButtonNav className='button-nav' text='Home' onClickHandler={handleNavigateToHome}/>
            <ButtonNav className='button-nav' text='Taller' onClickHandler={handleNavigateToTaller}/>
            <ButtonNav className='button-nav' text='Tecnología' onClickHandler={handleNavigateToTecnologia}/>
            <ButtonNav className='button-nav' text='Práctica Supervisada' onClickHandler={handleNavigateToPractica}/>
        </div>
    </div>
  )
}