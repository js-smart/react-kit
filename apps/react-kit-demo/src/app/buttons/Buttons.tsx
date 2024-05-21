import { DeleteButton } from '@react-kit/DeleteButton';

export default function Buttons() {
  return (
    <div>
      Delete Button:{' '}
      <DeleteButton loading={false} onClick={() => console.log()} /> <br />
      Delete Button:{' '}
      <DeleteButton loading={false} onClick={() => console.log()} /> <br />
      Delete Button:{' '}
      <DeleteButton loading={false} onClick={() => console.log()} /> <br />
      Delete Button:{' '}
      <DeleteButton loading={false} onClick={() => console.log()} /> <br />
      Delete Button:{' '}
      <DeleteButton loading={false} onClick={() => console.log()} /> <br />
      Delete Button:{' '}
      <DeleteButton loading={false} onClick={() => console.log()} /> <br />
    </div>
  );
}
