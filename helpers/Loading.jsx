import { Loading3QuartersOutlined } from '@ant-design/icons';

export default function Loading(props) {
  const { loading } = props;
  return (
    <div className={`loader-container animate__animated  ${!loading ? 'animate__fadeOut' : 'animate__fadeIn'}`}>
      <Loading3QuartersOutlined style={{ fontSize: 20 }} spin />
    </div>
  );
}
