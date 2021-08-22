import React from 'react'
import Marker from "./Marker";
import './Marker.css'

export default function Yellow (props){

    return<div>
        {
        props.items.map((item, index) => {
            let searchResult = item.search(props.value);

            if(searchResult === -1){
                return <li className='' key={index}>{item}</li>
            } else {
                let splitted2 = [];

                splitted2.push(item.slice(0, searchResult));
                splitted2.push(item.slice(searchResult, searchResult+props.value.length));
                splitted2.push(item.slice(searchResult+props.value.length, item.length))

                const splitted = item.slice(searchResult, searchResult+props.value.length)
                console.log(splitted2)
                return <li className=''>
                    <span>{splitted2[0]}</span>
                    <span className='marker'>{splitted2[1]}</span>
                    <span>{splitted2[2]}</span>
                       </li>
            }

        })
    }
    </div>
    }