import { screen,render } from "@testing-library/react";
import App from "../App";

test('detay button text should be DETAY', ()=> {
    render(<App/>);
    const buttonElement=screen.findByText(/detay/i);
    expect(buttonElement).toBeInTheDocument;
})