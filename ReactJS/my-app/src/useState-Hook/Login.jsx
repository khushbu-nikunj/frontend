import React ,{useState} from 'react'

let Login = () => {
    let [user, setUser] = useState({ email: "", password: "" })
    let updateHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    let submitHandler = (event) => {
        event.preventDefault();
        console.log(user);}
  return (
    <div className='=container mt-5'>
        <div className="row">
            <div className="col-md-4">
                <form action='' onSubmit={submitHandler}>
                    <div className="form-group">
                        <input type="text"
                        className='form-control'
                        placeholder='Email'
                        name="email"
                        onChange={updateHandler}/>
                    </div>
                    <div className="form-group">
                    <input type="text"
                        className='form-control'
                        placeholder='Password'
                        name="password"
                        onChange={updateHandler}/>
                    </div>
                    <input type="submit" value="login" className="btn btn-success"/>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login