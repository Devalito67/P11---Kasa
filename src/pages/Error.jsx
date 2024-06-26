import { Link } from "react-router-dom"
import "../styles/Error.scss"

function Error() {
    return <div className="error-container">
        <div className="error-404">404</div>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
}

export default Error