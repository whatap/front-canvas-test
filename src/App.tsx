import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import mockData from "./data.json";
import Chart from "./Chart";
import { Category, DataType } from './type';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`

const Topbar = styled.div`
	height: 56px;
	width: 100%;
	border-bottom: 1px solid #bdbdbd;
	font-size: 15px;
`

const Select = styled.select`
	width: 150px;
	height: 32px;
	margin-top: 12px;
`

const Label = styled.span`
	font-weight: bold;
	margin-left: 8px;
	margin-right: 4px;
`

const ChartWrapper = styled.div`
	flex: 1;
`


function App() {
	const [categoryOne, setCategoryOne] = useState<Category>('none');
	const [categoryTwo, setCategoryTwo] = useState<Category>('none');
	const [data, setData] = useState<Array<DataType>>([]);

	useEffect(() => {
		setTimeout(() => {
			setData(mockData);
		}, 2000);
	}, []);

  return (
		<Container>
			<Topbar>
				<Label>
					1단 분류
				</Label>
				<Select value={categoryOne} onChange={(e: any) => {setCategoryOne(e.target.value);}}>
				<option value="none">
						None
					</option>
					<option value="node">
						Node
					</option>
					<option value="image">
						Image
					</option>
					<option value="pod">
						Pod
					</option>
					<option value="rs">
						RS
					</option>
				</Select>
				<Label>
					2단 분류
				</Label>
				<Select value={categoryTwo} onChange={(e: any) => {setCategoryTwo(e.target.value)}}>
					<option value="none">
						None
					</option>
					<option value="image">
						Image
					</option>
					<option value="pod">
						Pod
					</option>
					<option value="rs">
						RS
					</option>
				</Select>
			</Topbar>
			<ChartWrapper>
				<Chart
					categoryOne={categoryOne}
					categoryTwo={categoryTwo}
					data={data}
				/>
			</ChartWrapper>
		</Container>
  );
}

export default App;
