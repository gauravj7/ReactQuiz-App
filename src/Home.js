import React, { Component } from 'react';
import fire from './config/fire';
import Questions from './questions';
class Home extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
      let email
      let admin = false
      var user = fire.auth().currentUser;

          if (user != null) {

        email = user.email;

  }

  if(email==="admin@gmail.com"){
    console.log(email);
    admin = true
  }
  console.log(admin);
    console.log(email);
    console.log(fire.auth().currentUser);




        return (
            <div>


                {admin
                  ?
                    <h1>Admin logged in</h1>

                  :

                    <div>
                    
                    <Questions />

                    </div>


                  }


                <button className="btn btn-danger btn-lg" onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;
