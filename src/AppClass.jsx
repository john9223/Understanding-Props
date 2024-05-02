import React, {Component} from 'react'
import './App.css'
import DataComponent from './components/DataComponent'

export default class AppClass extends Component{
    render(){
        const imageData = DataComponent()
        return(
            <>
            <h1 className="title">Kalvium Gallery</h1>
            <div className="main">
                {
                    this.imageData.map((img)=>(
                        <div key={img.id}>
                            <img src={img.img} alt="elephant" />
                        </div>
                    ))
                }
            </div>
            </>
        )
    }
}