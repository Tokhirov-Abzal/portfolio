import { FileList } from 'modules';
import { Container } from 'components';
import { DesktopContextProvider } from 'helpers/Desktop.context';

export default function Home() {
  return (
    <DesktopContextProvider>
      <Container>
        <FileList />
      </Container>
    </DesktopContextProvider>
  );
}
