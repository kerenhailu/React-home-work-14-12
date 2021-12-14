import { render } from "@testing-library/react";
import react from "react";

function Item(props) {
    return <div>
        {props.name}
    </div>
}
export default Item;