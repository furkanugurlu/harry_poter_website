import { useRouter } from 'next/dist/client/router';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modal_show_hidden, recorded_add, user_delete, user_recorded_delete } from '../actions';

function ModalPage({ id, recorded, user }) {
    const delete_show = useSelector(state => state.modal.modal_delete_show_hidden)
    const recorded_show = useSelector(state => state.modal.modal_recorded_show_hidden)
    const dispatch = useDispatch();
    const router = useRouter()
    return (
        <>
            <Modal show={recorded ? recorded_show : delete_show} onHide={() => dispatch(modal_show_hidden(false, false))}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{recorded ? "Save User" : "Delete User"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{recorded ? "Do you want to register the user ?"
                    : "Caution , are you sure you want to delete a user?"}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(modal_show_hidden(false))} >
                        No
                    </Button>
                    <Button variant="primary" onClick={() => {
                        recorded ? dispatch(recorded_add(user)) :
                            // Recorded sayfasında olup-olmama durum kontrolu , hangi datadan veriyi silecegimizin verisi  
                            router.pathname === "/recorded" ? dispatch(user_recorded_delete(id)) : dispatch(user_delete(id))
                        dispatch(modal_show_hidden(false))
                    }} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPage;