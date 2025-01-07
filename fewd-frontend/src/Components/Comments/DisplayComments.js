const CommentDisplay = ({comments}) => {
    return (
        <>

            <div className="container">
                <br></br>
                <h4>Comments</h4>
                <div className="row">
                    {/* ? === if else */}
                    {comments && comments.length > 0 ? (
                        // True
                        comments.map((comment, index) => {return comment !== null ? (
                            <div className="mb-3" key={index}>
                                <div className="card">
                                    {/* comment[1] is the time and date */}
                                    <h5 class="card-header bs-linebreak">{comment[1]}</h5>
                                    <div className="card-body">
                                        {/* comment[0] is the comments text */}
                                        <p className="card-text">{comment[0]}</p>
                                    </div>
                                </div>
                            </div>
                            ) : null; // If comment is null, return nothing
                        })
                    ) : (
                        // False
                        <p>No comments available</p>
                    )}
                </div>
            </div>

        </>
    );
};

export default CommentDisplay;