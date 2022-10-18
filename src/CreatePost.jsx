import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Form() {
  const { register, handleSubmit } = useForm();
  const submitData = (e) => {
    axios.post("https://jsonplaceholder.typicode.com/post", e).then((result) => {
      alert(result.data.message);
    });
  };
  return (
    <div>
      <h1>Frontend Contact</h1>
      <form action="" onSubmit={handleSubmit(submitData)}>
        <input {...register("title", {required: true})} type="text" />
        <br /><br />
        <input {...register("body", {required: true})} type="text" />
        <br /><br />
        <input {...register("id", {required: true},)} type="text" hidden value={11} />
        <br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;