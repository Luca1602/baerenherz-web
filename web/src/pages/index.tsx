import type { GetServerSideProps } from 'next';

const RootRedirect = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/ch',
      permanent: false, // don't change
    },
  };
};

export default RootRedirect;
