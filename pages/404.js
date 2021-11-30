import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { home_background_off_on } from "../actions";

const NotFound = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(home_background_off_on(false))
    })
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <h1 style={{ marginTop: '40px', color: 'tomato' }}>Page Not Found </h1>
        </div>
    )
}
export default NotFound;