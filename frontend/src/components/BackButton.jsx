import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackButton = ({destination = '/' }) => {
    return (
        <Link to={destination} className="bg-sky-800 text-white py-1 px-4 rounded-md hover:bg-sky-600">
            <BsArrowLeft classname = 'text-2xl'/>
        </Link>
    )
}
export default BackButton