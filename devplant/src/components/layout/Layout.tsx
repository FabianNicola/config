import styled from 'styled-components';
import { TopHeader } from '../topHeader';
import { Home } from '../../screens/Home';
import { Button } from '../buttons/Button';
import { CreateAccount } from '../../screens/CreateAccount';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({children}:LayoutProps): JSX.Element => {
	return (
		<LayoutContainer>
			<StyledContent>
                <TopHeader />
				{children}
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