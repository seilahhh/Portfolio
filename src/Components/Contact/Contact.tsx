import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import ContactInput from './ContactInput';
import { validateForm } from "../../utils/formValidate";

const shakeDuration = 200;  // in milliseconds

function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [shake, setShake] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formErrors = validateForm(formRef.current);
        setErrors(formErrors);

        const hasErrors = Object.keys(formErrors).length > 0;

        if (hasErrors) {
            setShake(true);
            setTimeout(() => setShake(false), shakeDuration);
            return;
        }

        setLoading(true);

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, formRef.current, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
        }).then(() => {
                setLoading(false);
                if (formRef.current) {
                    formRef.current.reset();
                }
            },
            (error) => {
                console.log(error.text);
                setLoading(false);
            }
        );
    };

    return (
        <section className="p-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary contactTitle">Contato</h2>
            <div className="max-w-lg mx-auto contactForm">
                <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                    <div>
                        <ContactInput placeholder="Nome" name="from_name" id="from_name" className={errors.name ? 'border-red-500' : ''}/>
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <ContactInput placeholder="Email" name="from_email" id="from_email" className={errors.email ? 'border-red-500' : ''}/>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <ContactInput placeholder="Mensagem" name="message" id="message" className={errors.message ? 'border-red-500' : ''}/>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 px-6 bg-primary text-white font-bold rounded-md shadow-sm duration-300 ease-in-out hover:opacity-80 ${shake ? 'animate-shake' : ''}`}
                        disabled={loading}
                    >
                        {loading ? "A enviar..." : "Enviar"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;