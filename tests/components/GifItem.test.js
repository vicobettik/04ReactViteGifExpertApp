const { render, screen } = require("@testing-library/react")
const { GifItem } = require("../../src/components")

describe('Pruebas en GifItem', () => {

    const titulo = 'saitama';
    const url = 'https://url.com/';

    test('Debe hacer match con el snapcshot', () => {

        const { container } = render(<GifItem title={titulo} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con la url y el alt indicado', () => {

        render(<GifItem title={titulo} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(titulo);

    });

    test('Debe de mostrar el titulo en el componente', () => {
      
        render(<GifItem title={titulo} url={url} />);
        expect(screen.getByText(titulo)).toBeTruthy()

    })
    



})
