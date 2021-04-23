import React from 'react';
import styled from "styled-components";

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


function App() {
  return (
		<Container>
			<Topbar>
				<Label>
					1단 분류
				</Label>
				<Select>
					<option>
						Node
					</option>
					<option>
						Image
					</option>
					<option>
						Pod
					</option>
					<option>
						RS
					</option>
				</Select>
				<Label>
					2단 분류
				</Label>
				<Select>
					<option>
						None
					</option>
					<option>
						Node
					</option>
					<option>
						Image
					</option>
					<option>
						Pod
					</option>
					<option>
						RS
					</option>
				</Select>
			</Topbar>
		</Container>
  );
}

export default App;
