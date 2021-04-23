import React, { useEffect, useRef } from "react";

interface Props {
	categoryOne: String;
	categoryTwo: String;
	data: any;
}

const Chart = (props: Props) => {
	const divElement = useRef(null);
	const { categoryOne, categoryTwo, data } = props;
	
	useEffect(() => {
		console.log("divElement =", divElement);
	}, []);

	useEffect(() => {
		console.log("data update !", data);
	}, [data]);
	
	useEffect(() => {
		console.log("categoryOne update !", categoryOne);
	}, [categoryOne]);

	useEffect(() => {
		console.log("categoryTwo update !", categoryTwo);
	}, [categoryTwo]);

	return <div ref={divElement} style={{ width: "100%", height: "100%" }} />
}

export default Chart;