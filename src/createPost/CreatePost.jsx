import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import './CreatePost.css'

function Form() {
  const { register, handleSubmit } = useForm();
  const submitData = async(data) => {
    axios.post("https://localhost:3000", data)
    .then((result) => {
      alert(result.data.message);
    });
    
  };
  return (
    <div className="create">
      <h1>Form Registration</h1>
      <form className="form" action="" onSubmit={handleSubmit(submitData)}>
        <input placeholder="enter title" {...register("title", {required: true})} type="text" />
        <br /><br />
        <input placeholder="enter body" {...register("body", {required: true})} type="text" />
        <br /><br />
        <input className="id" {...register("userId")} type="text" hidden value={"11"} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;