import "./Modal.css";

function Modal(children: any): JSX.Element {
    return (
        <div className="Modal">
            {children}
        </div>
    );
}

export default Modal;
