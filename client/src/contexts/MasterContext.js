import React, { Component, createContext } from 'react';

export const MasterContext = createContext();

export class MasterProvider extends Component {
    state = {
        loading: true,
        tiles: [],

        fetchData: async (url) => {
            let res = await fetch(url)
            let data = await res.json();

            return data;
        },

        loadProducts: (res) => {

            this.setState( prevState => {
                return {
                    tiles: [...res.payload],
                    loading: false
                }
            });
            
        }

     }

    render() { 
        return ( 
            <MasterContext.Provider value={{...this.state}}>
                {this.props.children}
            </MasterContext.Provider>
         );
    }
}
 
