import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Prueas en useFetchGifs', () => {
  
    test('Debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs('Nezuko') );
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


    });

    test('Debe de retornar un arreglo de imagenes y isloading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('Nezuko') );
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )


        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    })
    

})
