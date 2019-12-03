import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
  sections:[
    [
      {name:'name', elementName:'input', type:'text', placeholder:'Your Name*'},
      {name:'email', elementName:'input', type:'email', placeholder:'Your Email*'},
      {name:'phone', elementName:'input', type:'text', placeholder:'Your Phone number*'}
    ],
    [
      {name:'msg', elementName:'textarea', type:'text', placeholder:'Your Message*'}
    ]
  ]
};

class Contact extends Component {
  // constructor(props){
  //   super(props);

  //   this.state={
  //     name:'',
  //     email:'',
  //     phone:'',
  //     msg:''
  //   }
  // }

  // submitForm = (e) => {
  //   alert("Form Submitted. Thank you!");
  // }

  render(){
    return(
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={/*e=>this.submitForm(e)*/this.props.handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  {fields.sections.map((section, secIndex)=>{
                    return(
                      <div className="col-md-6" key={secIndex}>
                        {section.map((field, i)=>{
                          return <Field
                            {...field}
                            key={i}
                            value={this.props.values[field.name]}
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={(this.props.touched[field.name])}
                            errors={this.props.errors[field.name]}
                            // value={this.state[field.name]}
                            // onChange={e => this.setState({
                            //   [field.name]: e.target.value
                            // })}
                          />
                        })}
                      </div>
                    )
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withFormik({
  mapPropsToValues:() => ({
    name:'',
    email:'',
    phone:'',
    msg:''
  }),
  // validate: values =>{
  //   const errors={};
  //   Object.keys(values).map( v => {
  //     if(!values[v]){
  //       errors[v]= "Required";
  //     }
  //     return null;
  //   })
  //   return errors;
  // },
  validationSchema : Yup.object().shape({
    name: Yup
      .string()
      .min(3,'Name must be at least 3 characters long.')
      .required('Name is required.'),
    email: Yup
      .string()
      .email('This is not a valid Email address.')
      .required('Email is required.'),
    phone: Yup
      .string()
      .min(10,'Please provide the full phone number.')
      .max(15,'Phone numbers mustn\'t be that long.' )
      .required('Phone number is required.'),
    msg: Yup
      .string()
      .min(100,'Message needs to be at least 100 characters long.')
      .required('Message is equired.'),
  }),
  handleSubmit: (values, {setSubmitting})=>{
    alert("Submitted!", JSON.stringify(values));
  }
})(Contact);