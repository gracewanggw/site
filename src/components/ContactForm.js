import React, { useState }  from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function ContactForm({handleClose}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const SERVICE_ID='service_2fblxwa';
    const TEMPLATE_ID='template_6l9636q';
    const PUBLIC_KEY='KxRoClFcNYVZh7rxC';

    const isFormValid = firstName !== '' && lastName !== '' && email !== '' && message !== '';


    const handleSubmit = (e) => {
        e.preventDefault();
      
        if(isFormValid){
            const formData = {
                'first-name': firstName,
                'last-name': lastName,
                'email': email,
                'message': message,
    
            };
    
            emailjs
              .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
              .then((result) => {
                console.log(result.text);
                Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully',
                });
              })
              .catch((error) => {
                console.error('Failed to send the message:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops, something went wrong',
                  text: error.message,
                });
              });
    
            handleClose();
          
            e.target.reset();
        }
        
      };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div style={{display: 'flex',
                flexDirection: 'row'}}>
                <TextField 
                    sx={{padding: '4px'}}
                    required
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName} 
                />
                <TextField
                    sx={{padding: '4px'}}
                    required
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName} 
                />
            </div>
            <div>
                <TextField
                    sx={{padding: '4px'}}
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
            </div>
            <div>
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    fullWidth
                    rows={6}
                    sx={{padding: '4px'}}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant='contained' type='submit' disabled={!isFormValid}>
                    Submit
                </Button>
            </div>
        </Box>
    )
}

export default ContactForm;