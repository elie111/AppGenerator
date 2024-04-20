

function ImageButton({ params, className, onClick }) {
    return (
        <>
            <img className={className} onClick={onClick} src={params.source} />
        </>
    );
}

export default ImageButton;
