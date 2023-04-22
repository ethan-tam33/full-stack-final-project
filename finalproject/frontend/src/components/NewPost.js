const NewPost = () => {
    return (
        <div>
            <label for="semester">Choose the class you want to review: </label>
            <select name="class" id="class">
                <option value="CS61A">CS61A</option>
                <option value="CS61B">CS61B</option>
                <option value="CS70">CS70</option>
                <option value="EECS16A">EECS16A</option>
                <option value="EECS16b">EECS16b</option>
                <option value="CS198-99">CS198-99</option>
            </select>       
        </div>
)}

export default NewPost;