
function Text({ className, params }) {
    return (
        <div className={className}>
            {params["content"]}
        </div>
    );
}

export default Text;
