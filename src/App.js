import React, { Component } from 'react';
import './App.css';

function getHeaders(data) {
   let headers = [], header;

   for (let d in data) {
      header = '';

      if (d === 'id') continue;

      let str = d.split(/(?=[A-Z])/);
      str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);

      for (let s = 0; s < str.length; s++) {
         header += str[s] + ' ';
      }

      headers.push({title: header.substring(0, header.length-1), sort: 'asc'});
   }

   return headers;
}

function Table(props) {
   const td = props.tableData;
   const headers = td.headers.map((header, index) => <th key={index} id={header.title} className={td.headerClass}>{header.title}</th>);
   const data = td.rows.map((row, index) => <TableRow key={index} data={row} />);

   return (
      <table id={props.id} className={props.className}>
         <thead>
         <tr>
            {headers}
         </tr>
         </thead>
         <tbody>
         {data}
         </tbody>
      </table>
   );
}

function TableRow(props) {
   const data = props.data;
   let row = [];

   for (let d in data) {
      if (d !== 'id') {
         row.push(<td key={row.length}>{data[d]}</td>);
      }
   }

   return (
      <tr>{row}</tr>
   );
}

class BadApi extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         table: {
            headers: [],
            rows: [],
         },
      };
   }

   componentDidMount() {
      fetch("http://localhost:8080/api/values")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  isLoaded: true,
                  table: {headers: getHeaders(result[0]), rows: result},
                  tweets: result
               });
            },
            (error) => {
               this.setState({
                  isLoaded: true,
                  error
               });
            }
         )
   }

   render() {
      const { error, isLoaded } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Loading...</div>;
      } else {
         return (
            <div className="App">
               <Table id={'tweetTable'} className={'tweetTable'} tableData={this.state.table} />
            </div>
         );
      }
   }
}

export default BadApi;