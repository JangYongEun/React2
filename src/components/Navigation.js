import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faUber } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Navigation = ({userObj}) => {
    return (
        <nav>
            <ul style={{ display: "flex", justifyContent: "center", marginTopL: 50}}>
                <li>
                    <Link to="/" style={{ marginRight: 10}}>
                        <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x"/>
                    </Link>
                </li>
                
                <li>
                    <Link to="/profile"
                    style={{
                        marginLeft:10,
                        display:"flex",
                        FlexDirection: "column",
                        alignItems: "center",
                        fontSize:12,
                    }}
                    >
                     <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
                     <span style={{ marginTop: 10}}>
                         {userObj.displayName ? `${userObj.displayName}의 Profile`
                         : "Profile"}
                     </span>
                     </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;