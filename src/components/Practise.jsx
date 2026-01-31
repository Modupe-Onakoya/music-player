import { useState } from "react";
import { useForm } from "react-hook-form";

function Practise() {

    // const [username, setUsername] = useState("")

    // function user(e) {
    //     setUsername(e.target.value)
    // }

    const { register, handleSubmit } = useForm()

    const onsubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="pt-100">
            <form action="" onSubmit={handleSubmit(onsubmit)}>
                <input {...register("email")} type="email" className="border" />
                <input {...register("password")} type="password" className="border" />

                <button >Submit</button></form>

        </div>
    )
}
export default Practise;