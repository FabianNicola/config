import styled from 'styled-components';
import { TopHeader } from '../topHeader';

const Layout = (): JSX.Element => {
	return (
		<LayoutContainer>
			<StyledContent>
                <TopHeader />
			</StyledContent>
		</LayoutContainer>
	);
};

export { Layout };

const LayoutContainer = styled.div`
	display: flex;
	height: 100vh;
	overflow: hidden;
`;

const StyledContent = styled.div(
	() => `
	background: white;
	width: 100%;
	overflow: auto;
	`
);