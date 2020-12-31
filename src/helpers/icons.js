import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faTimesCircle, 
    faCompactDisc, 
    faPlusCircle,
    faMobileAlt,
    faEnvelope,
    faMapMarkedAlt,
    faLock
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faTimesCircle, 
        faCompactDisc, 
        faPlusCircle,
        faMobileAlt,
        faEnvelope,
        faMapMarkedAlt,
        faLock);
};

export default Icons;