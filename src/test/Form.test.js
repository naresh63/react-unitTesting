import { render, screen } from '@testing-library/react';
import Form from '../components/Form'
import userEvent from '@testing-library/user-event';

test('initial form',()=>{
    render(<Form />);
    const formH1 = screen.getByText(/login form/i)
    const usernameInp = screen.getByLabelText(/username/i)
    const passwordInp = screen.getByLabelText(/password/i)


    const loginBtn = screen.getByRole("button", {name: /login/i})

    const submitBtn = screen.getByRole("button", {name: /submit/i})

    const carSelect = screen.getByLabelText(/Choose a car:/i)

    const htmlRadio = screen.getByLabelText(/HTML/i)
    const cssRadio = screen.getByLabelText(/CSS/i)
    const jsRadio = screen.getByLabelText(/JavaScript/i)

    const termCheckbox = screen.getByRole('checkbox');
    expect(termCheckbox).toBeInTheDocument();

    expect(submitBtn).toBeDisabled();
    expect(loginBtn).toBeInTheDocument()

    expect(usernameInp).toBeInTheDocument()
    expect(passwordInp).toBeInTheDocument()
    expect(carSelect).toBeInTheDocument()

    expect(htmlRadio).toBeInTheDocument()
    expect(cssRadio).toBeInTheDocument()
    expect(jsRadio).toBeInTheDocument()
})

test('with interaction',()=>{
    render(<Form />);
    const usernameInp = screen.getByLabelText(/username/i)
    const passwordInp = screen.getByLabelText(/password/i)

    const loginBtn = screen.getByRole("button", {name: /login/i})

    const submitBtn = screen.getByRole("button", {name: /submit/i})


    const carSelect = screen.getByLabelText(/Choose a car:/i)
    const htmlRadio = screen.getByLabelText(/HTML/i)
    const cssRadio = screen.getByLabelText(/CSS/i)
    const jsRadio = screen.getByLabelText(/JavaScript/i)
    userEvent.type(usernameInp,'good');
    expect(usernameInp).toHaveValue('good')
    userEvent.type(passwordInp,'password');
    expect(passwordInp).toHaveValue('password')
    userEvent.click(loginBtn);
    userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Volvo' }),
        expect(screen.getByRole('option', { name: 'Volvo' }).selected).toBe(true)
    )
    userEvent.click(htmlRadio);
    userEvent.click(cssRadio);
    userEvent.click(jsRadio);

    const termCheckbox = screen.getByRole('checkbox');
    userEvent.click(termCheckbox);
    expect(submitBtn).toBeEnabled();
    userEvent.click(termCheckbox);
    expect(submitBtn).toBeDisabled();

})