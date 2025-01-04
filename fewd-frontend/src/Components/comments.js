


export default function CommentTalk({TalkId }) {

  
  const talkId = TalkId

  const commentTalk = (id, comment) => {

    console.log(comment)

    fetch(`http://localhost:3001/talks/comment/${id}/${comment}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to comment the talk.");
        }
        return response.json();
      })
      .then((data) => {
        

        console.info(data)
      })
      .catch((err) => {
        console.error("Error commenting talk:", err);
      });
  }; 


  return (
    <div>
      <textarea id="commentBox" name="commentbox" rows="4" cols="50">
     Test test
      </textarea>

      <button
  className="button btn btn-primary"
  onClick={() => {
    
    const commentBoxValue = document.getElementById("commentBox").value;

    console.log(commentBoxValue)

    commentTalk(talkId, commentBoxValue)}}
>
  Submit comment
</button>
    </div>
  );
}
