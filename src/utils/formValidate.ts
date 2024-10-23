const isEmpty = (value: string) => !value.trim();

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const errorMessages = {
    required: 'Este campo é obrigatório.',
    invalidEmail: 'O email não é válido.',
};

export const validateForm = (form: HTMLFormElement) => {
    const name = form['from_name'].value.trim();
    const email = form['from_email'].value.trim();
    const message = form['message'].value.trim();

    const errors: { name?: string; email?: string; message?: string } = {};

    if (isEmpty(name)) {
        errors.name = errorMessages.required;
    }

    if (isEmpty(email)) {
        errors.email = errorMessages.required;
    } else if (!isValidEmail(email)) {
        errors.email = errorMessages.invalidEmail;
    }

    if (isEmpty(message)) {
        errors.message = errorMessages.required;
    }

    return errors;
};