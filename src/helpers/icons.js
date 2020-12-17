import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faTimesCircle, 
    faCompactDisc, 
    faPlusCircle 
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faTimesCircle, 
        faCompactDisc, 
        faPlusCircle);
};

export default Icons;