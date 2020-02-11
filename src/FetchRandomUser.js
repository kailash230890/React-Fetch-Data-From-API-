import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.results[0]);
    this.setState({ person: data.results[0], loading: false });
    // this.setState({ person: null, loading: false }); // didn't get a person...
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person...</div>;
    }

    return (
      <div>
        <div>Title : {this.state.person.name.title}</div>
        <div>FirstName : {this.state.person.name.first}</div>
        <div>Age : {this.state.person.dob.age}</div>
        <div>Phone : {this.state.person.cell}</div>
        <div>City : {this.state.person.location.city}</div>
        <div>State : {this.state.person.location.state}</div>
        <div>Email : {this.state.person.email}</div>
        <img src={this.state.person.picture.large} />
      </div>
    );
  }
}
