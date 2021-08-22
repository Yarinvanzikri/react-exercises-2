import React, {useState} from 'react';
import './RealNumber.css';
const numbers = ['1', '2','3', '4', '5', '6', '7', '8', '9', '0'];
function RealNumber() {
	const [value, setValue] = useState('')
	  // function visiButton() {
		//  let validator = value.split('').filter((letter)=> {
		//  	let isfiltered = true;
		//  	numbers.map((num)=> {
		// 		 // (letter &&  num)
		// 		if(num === letter){
		// 			isfiltered = false
		// 		}
		// 	});
		//  	return isfiltered;
		//  })
		//   if(validator.length > 0){
		// 	  return '';
		//   }else{
		//   	return (<button>Submit</button>)
		//   }
	  // }

	function visiButton2() {
		let validator = value.split('').filter((letter)=> {
			return letter > '9' || letter < '0';
		})
		if(validator.length > 0){
			return '';
		}else{
			return (<button>Submit</button>)
		}
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input onChange={(e) => setValue(e.target.value) } value={value} type="text" className="text-box" />
			{visiButton2()}
		</div>
	)
}

export default RealNumber;
