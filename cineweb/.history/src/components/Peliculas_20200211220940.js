import React, { Component } from 'react';
import axios from 'axios';


export default class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        }
    }

    /*componentDidMount() {
        axios.get('http://localhost:3001/peliculas')
            .then(response => {
                console.log(response)
                this.setState({ peliculas: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { peliculas } = this.state;
        return (
            <div class="w-2/3 mx-auto -400">

                <div class="bg-white  shadow-md rounded my-6">

                    <table class="text-left w-full border-collapse">
                        <thead class="bg-green-300 rounded my-6">
                            <tr>
                                <th class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">TITULO</th>
                                <th class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">CATEGORIA</th>
                                <th class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">PRECIO BOLETO</th>
                                <th class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">RESUMEN</th>
                                <th class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">IMAGEN</th>
                                <th class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ACCIONES</th>
                            </tr>
                        </thead>

                        <tbody >
                            {
                                peliculas.map(pelicula => {
                                    return (
                                        <tr key={pelicula.id}>
                                            <td class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm ">{pelicula.titulo}</td>
                                            <td class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm ">{pelicula.categoria}</td>
                                            <td class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm ">{pelicula.precio}</td>
                                            <td class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm ">{pelicula.resumen}</td>
                                            <td class="py-4 px-10 bg-grey-lightest font-bold uppercase text-sm ">{pelicula.imagen}</td>
                                            <div class="flex" >
                                                <div class="text-green-700  px-2 py-4">
                                                    <button class="uppercase bg-grey-lightest font-bold uppercase text-sm">
                                                        ACTUALIZAR
                                                    </button>
                                                </div>
                                                <div class="text-red-700 px-2 py-4">
                                                    <button class="uppercase bg-grey-lightest font-bold uppercase text-sm">
                                                        ELIMINAR
                                                    </button>
                                                </div>
                                            </div>
                                        </tr>
                                    )
                                }
                                )
                            }
                    </tbody>
                </table>
            </div>
        </div>

        )
    }
}