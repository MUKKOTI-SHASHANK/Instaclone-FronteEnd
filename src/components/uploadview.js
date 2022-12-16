import { Link } from "react-router-dom";
import "../components/uploadview.css";
import Header from "./header";

export default function UploadView({Indicator}){
    async function FormHandler(e){
        //e.preventDefault();

        console.log(e.target);
        let formData = new FormData(e.target);
        // let dataFromForm = Object.fromEntries(formData.entries());



       await fetch("https://instaclonenode.onrender.com/posts",{
        method:"post",
        body: formData,
        redirect :"follow"
        })
        .then(res=>{
            return res.text();

        })
        .then(text=>{
            console.log(text);
        })
        .catch(err=>{
            console.log(err);
        })


        Indicator(pre=>{
            return !pre
        })

        navigate("/posts");
    }
    return <div>
    <Header/>
     <form onClick={FormHandler} id="container">
        <input type={"file"} name="file" id= "input_file" accept=".jpg, .jpeg, .png, .pdf" required={true}></input>
        <input type={"text"} name="author" id="input_author" placeholder="Author" required={true}></input>
        <input type={"text"} name="location" id="input_location" placeholder="Location" required={true}></input>
        <input type={"text"} name="description" id="input_description" placeholder="Descirption" required={true}></input>
        <Link to={"/postview"}><button>Post</button></Link>
    </form>
    </div>
}