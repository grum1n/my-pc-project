import React from 'react';


const cars = [
    { carBrand: 'Audi', 
      carModels: [ 
        {name: 'A6'},
        {name: 'Q7'}
    ]},
    { carBrand: 'Bmw', 
      carModels: [ 
        {name: 'X1'},
        {name: 'X3'},
        {name: 'X5'},
        {name: 'X6'}
    ]},
    { carBrand: 'Toyota', 
      carModels: [ 
        {name: 'Avensis'},
        {name: 'Auris'}
    ]} 
]
 
class CarsAndModels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars : [],
            carModels : [],
            selectedCars : 'Cars',
            selectedModels : 'Models'
        };
        this.changeCar = this.changeCar.bind(this);
        this.changeModel = this.changeModel.bind(this);
    }
   
    componentDidMount() { 
        this.setState({cars});
    }
   
    changeCar(event) {
        this.setState({selectedCars: event.target.value});
        this.setState({carModels : this.state.cars.find(cntry => cntry.carBrand === event.target.value).carModels});
    }
 
    changeModel(event) {
        this.setState({selectedModels: event.target.value});
    }

    
     
    render() {
        return (
            <div>
                <div >
                    <label>Cars</label>
                    <select  placeholder='Cars' value={this.state.selectedCars} onChange={this.changeCar}>
                        <option>Select car</option>
                        {this.state.cars.map((car, carId) => {
                            return <option key={carId}>{car.carBrand}</option>;
                        })}
                    </select>
                </div>
 
                <div>
                    <label>Model</label>
                    <select  placeholder='Model' value={this.state.selectedModels} onChange={this.changeModel}>
                        <option>Select model</option>
                        {this.state.carModels.map((carModels, id) => {
                            return <option key={id}>{carModels.name}</option>;
                        })}
                    </select>
                </div>
                
                {/* <button type='submit' >Add carBrand / carModels</button> */}
               
            </div>
        )
    }
}
 
export default CarsAndModels;