import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas sobre GifGrid', () => {
  
    const category = 'One punch'

    test('Debe de mostrar el loading inicialmente', () => {
      
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('Debe de mostrar items cuando se obtengan desde el usefetc', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://www.google.com'
            },
            {
                id: 'ABC2',
                title: 'Saitama2',
                url: 'https://www.google.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();

    })
    
    

})
