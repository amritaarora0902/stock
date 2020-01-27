import React, { Component } from 'react';
import Plot from 'react-plotly.js';




class Stock extends Component {
    constructor(props){
        super(props);
        this.state ={
            XValues: [],
            YValues: [],
            myState: this.props.passer
            
        }
    }


componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.passer !== prevProps.passer) {
      this.fetchStock(this.props.passer);
    }
  }
    fetchStock() {
        const pointer = this;
        const Api_Name=this.props.passer;
        console.log('passer in stock',this.props.passer);
        const API_KEY='3M3UW9BJTEPF28BK';
        let Api_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+Api_Name+'&outputsize=compact&apikey=' + API_KEY;
        // console.log(Api_Call)
        let stockXvalues = [];
        let stockYvalues = [];
        fetch(Api_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);

                for (var key in data['Time Series (Daily)'])
                {
                    stockXvalues.push(key);
                    stockYvalues.push(data['Time Series (Daily)']
                    [key]['1. open']);
                }

                pointer.setState({
                    XValues: stockXvalues,
                    YValues: stockYvalues
                });
            }
        )
    
    
    
    }


    render() {
        

     
    return (
        <div>
        {/* <h1>Stock Market</h1> */}
        {/* <p>x-values: {this.state.XValues}</p>
        <p>y-values: {this.state.YValues}</p> */}
          <Plot
        data={[
          {
            x: this.state.XValues,
            y: this.state.YValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'black'},
          }
          
        ]}
        layout={ {width: 650, height: 500, title:''} }
      />
    
        </div>
    );
    }
}




export default Stock;