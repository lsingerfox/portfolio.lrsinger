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
    faMapMarkedAlt 
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
        faMapMarkedAlt);
};

export default Icons;