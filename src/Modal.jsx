const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    border: "2px solid #000",
                    borderRadius: "20px",
                    backgroundColor: "rgb(0,0,0,0.5)",
                    boxShadow: "2px solid black",
                    height: "auto",
                    width: 500,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;