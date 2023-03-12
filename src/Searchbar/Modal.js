import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./SearchBar.css"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 90,
            stiffness: 500,
        },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 50,
            stiffness: 500,
        },
    },
};


const Modal = ({ handleClose, text }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                
                    <button className="closeButton" onClick={handleClose}>X</button>
                    <div className="inputTextArea">
                    <div className="second-input">
                        {/* <img src={pass} alt="pass" className="email" /> */}
                        <input type="text" placeholder="........." className="inputText" />
                    </div>
                    <div className="send-button">
                        <button className="sendButton">Send</button>
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    );
};


export default Modal;