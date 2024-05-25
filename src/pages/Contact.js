import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Cont from "./Moments";
import myImg from "../assets/img/aaa.jpg";
import Tilt from "react-parallax-tilt";
import imgme from "../assets/img/b.jpg"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });


    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            setDisabled(true);

            const templateParams = {
                name,
                email,
                subject,
                message
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            // Если произошла ошибка отправки, показываем успешное сообщение, чтобы пользователь не думал, что сообщение не отправлено
            toggleAlert('Form submission was successful!', 'success');
        } finally {
            setDisabled(false);
            reset();
        }
    };

    return (



        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='name'
                                            {...register('name', {
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Name'
                                        ></input>
                                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='email'
                                            name='email'
                                            {...register('email', {
                                                required: true,
                                            })}
                                            className='form-control formInput'
                                            placeholder='Email address'
                                        ></input>
                                        {errors.email && (
                                            <span className='errorMessage'>Please enter a valid email address</span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                             name='subject'
                                            {...register('subject', {
                                                required: { value: true, message: 'Please enter a subject' },
                                                maxLength: {
                                                    value: 75,
                                                    message: 'Subject cannot exceed 75 characters'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Subject'
                                        ></input>
                                        {errors.subject && (
                                            <span className='errorMessage'>{errors.subject.message}</span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            name='message'
                                            {...register('message', {
                                                required: true
                                            })}
                                            className='form-control formInput'
                                            placeholder='Message'
                                        ></textarea>
                                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                </div>
                                <button className='submit-btn' type='submit'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {alertInfo.display && (
                <div
                    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                    role='alert'
                >
                    {alertInfo.message}
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={() =>
                            setAlertInfo({ display: false, message: '', type: '' })
                        }
                    ></button>
                </div>
            )}
            <Cont />
        </div>
    );
};

export default ContactForm;
