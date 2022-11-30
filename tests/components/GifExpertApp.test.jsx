import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Pruebas sobre GifExpertApp', () => {
  
    test('should ', () => {
      
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();

        const input = screen.getByRole('textbox');
        fireEvent.input(input,
            {
                target:{
                    value: 'nezuko'
                }
            }
        );
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);


        

        screen.debug();
        
    })
    

})
