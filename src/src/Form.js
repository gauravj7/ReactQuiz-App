import React,{Component} from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import ShowDetails from './ShowDetails';

import MenuItem from '@material-ui/core/MenuItem';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

class Form extends Component {

  constructor(props){
  super(props);
  this.state={
  name:'',
  email:'',
  password:'',
  gender: '',
  age: '',
  showDetails: false
  }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);

 }

 handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }

 handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }

  handleAgeChange (evt) {
    this.setState({ age: evt.target.value });
  };

  handleGenderChange (evt) {
    this.setState({ gender: evt.target.value });
  };

  handleSubmit() {
    if(this.state.name!='' && this.state.email!='' && this.state.password!='' && this.state.age!='' && this.state.gender!='' ){
      this.setState({ showDetails: true });
    }

  }

  render() {

    return (
      <div>

      { this.state.showDetails===false ?
        <Paper className="paper">


          <Typography variant="h3">
           React Form
          </Typography>

          <form className="form">
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" name="name" autoComplete="name" autoFocus onChange={this.handleNameChange}/>
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmailChange}/>
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  onChange={this.handlePasswordChange}
                />

              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="age">Age</InputLabel>
                <Input id="age" name="age" type="number" autoComplete="age" autoFocus onChange={this.handleAgeChange}/>
              </FormControl>


              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="gender-helper">Gender</InputLabel>
                <Select
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                  input={<Input name="gender" id="gender-helper" />}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>

              </FormControl>



              <br />
              <br />
              <Button

                variant="contained"
                color="primary"
                size="large"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </form>

        </Paper>

        :
        <ShowDetails {...this.state}/>
      }

      </div>


    )
  }
}

export default Form;
