


export default function CommentTalk({TalkId }) {

  
  const talkId = TalkId

  const commentTalk = (id, comment) => {

    console.log(comment)
  


    if(comment === ""){
      alert("comment is empty")
      return console.error("comment is empty")
    }
    if(comment.length < 10){
      alert("comment is too short")
      return console.error("comment is too short")
    }

    if(comment.length > 250){
      alert("comment is too long")
      return console.error("comment is too long")
    }

    alert("Adding Comment")

    fetch(`http://localhost:3001/talks/comment/${id}/${comment}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("Failed to comment the talk.")
          throw new Error("Failed to comment the talk.");
          
        }
        return response.json();
      })
      .then((data) => {
        
        alert("Comment has been added")
        console.info(data)
      })
      .catch((err) => {
        console.error("Error commenting talk:", err);
      });

  }; 


  return (
    <div class="border m-2 p-2">
      <h5>Provide a comment</h5>
      <textarea placeholder="Type in a comment between 10 & 250 characters" id="commentBox" name="commentbox" rows="4" cols="50">
      </textarea>
<br></br>
      <button
  className="button btn btn-primary m-1"
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
