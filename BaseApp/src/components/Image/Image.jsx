

function Button({ params, className }) {
    return (
        <>
            <img className={className} src={params.source} />
        </>
    );
}

export default Button;
