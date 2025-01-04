const CommentDisplay = ({comments}) => {
    return (
        <>

            <div className="container">
                <br></br>
                <h4>Comments</h4>
                <div className="row">
                    {comments && comments.length > 0 ? (
                        comments.map((comment, index) => {return comment !== null ? (
                            <div className="mb-3" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title bs-linebreak">{comment[1]}</h5>
                                        <p className="card-text">{comment[0]}</p>
                                    </div>
                                </div>
                            </div>
                            ) : null; // If comment is null, return nothing
                        })
                    ) : (
                        <p>No comments available</p>
                    )}
                </div>
            </div>

        </>
    );
};

export default CommentDisplay;