import React from 'react'

class UserCard extends React.Component {

  state = {

    name: ""

  };

  updateName() {

    this.setState({ name: "Preety" });

  }

  render() {

      return(

          <div>

              {this.state.name}

          </div>

      )

  }

}
export default UserCard;