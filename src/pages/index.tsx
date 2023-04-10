import CompIcon from 'public/icons/cv.svg';
import { FileList } from 'modules';
import { Container } from 'components';

const data = [
  { icon: CompIcon, title: 'CV' },
  { icon: CompIcon, title: 'Name' },
];

export default function Home() {
  return (
    <Container>
      <FileList data={data} />
    </Container>
  );
}
