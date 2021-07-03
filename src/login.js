import React from 'react';
var compared;
    export default class Login extends React.Component
    {  
        constructor(props)
        {
            super(props)
            this.state={
                usn:'',
                password:''
            }
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.compared = this.compared.bind(this);
        }
        compared = (usnin,passin) =>
        {
            var name1="1DS19CS164";
            var password1=987654;
            var name2="anithamam";
            var password2=123456;
            console.log({usnin},{passin});
            if((name1.localeCompare(usnin))>=0 && password1.localeCompare(passin)===0)
            {
                alert("Login Student");

            }
            else if ((name2.localeCompare(usnin))>=0 && password2.localeCompare(passin)===0)
            {
                alert("Login Madam");
            }
            else
            {
                alert("Id/Password is incorrect");
            }
        }
        handleSubmit = (event) => {
            event.preventDefault();
            compared(this.event.usn,this.event.password,this.event.check);
        }
        handleInputChange = (event) => {
            this.setState({
                [event.target.name]:event.target.value,
                
            })
        }
        
        render()
        {
            return(  <div class="card">
            <header className="headerLogin">
                Login Page
            </header>
            <form onSubmit={()=> this.compared(this.state.usn,this.state.password)}>
      
            <label class="items" for="fname">Identity Number/USN</label><br/>
            <input type="text" id="usn" name="usn" value={this.state.usn} 
            onChange={this.handleInputChange} required/>
            <br/>
            <label class="items" for="password">Password</label><br/>
            <input type="password" id="password" name ="password" value={this.state.password} 
            onChange={this.handleInputChange} required/>
            <br/>
            <input type="radio" id="check" name="check" value="tlogin"/>
            <label for="tlogin">Teacher's Login</label>
      
            <input type="radio" id="check" name="check" value="slogin"/>
            <label for="slogin">Student's Login</label><br/>
      
            <input type="submit" value="Submit"/>
          </form>
          </div>);

        }
    }
  

