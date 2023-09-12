import { Button, Container,Typography,TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import {signUpSchema} from '../schemas';


const initialValues = {
    name:"",
    email:"",
    password:"",
    confirm_password:""
}
function FormTwo() {
    const {values, errors,touched, handleBlur,handleChange,handleSubmit } = useFormik({
        initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action) => {
            console.log(values)
            action.resetForm();
        }
        
    });
    console.log(errors);
  return (
<Container>
      <form autoComplete='off' onSubmit={handleSubmit} >
<TextField  id='name' name='name' type='name' label="Name" value={values.name}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.name && touched.name ? <Typography sx={{color:'red'}} >{errors.name}</Typography> : null}
 
      <br />
<TextField id='email' name='email' type='email' label="Email" value={values.email}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.email && touched.email ? <Typography sx={{color:'red'}} >{errors.email}</Typography>:null}
      <br />
<TextField id='password' name='password' type='password' label="Password" value={values.password} 
onChange={handleChange} onBlur={handleBlur}></TextField>
{errors.password && touched.password ? <Typography sx={{color:'red'}} >{errors.password}</Typography> : null}  
<br />
<TextField id='confirm_password' name='confirm_password' type='password' label="Confirm Password"  
value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} ></TextField>
 {errors.confirm_password && touched.confirm_password ?  <Typography sx={{color:'red'}} >{errors.confirm_password}</Typography> : null}
      <br />
<Button type='submit ' variant='contained'>Submit</Button>
      </form>
    </Container>
  )
}
export default FormTwo
