import { RouteComponentProps } from 'react-router-dom';

const reactRouterPropsFactory = <Props = null, State = null, Search = null>(
  props: any = {},
  state: any = {},
  search: any = null
): RouteComponentProps<Props, any, State> => {
  return {
    location: {
      hash: '/',
      pathname: '/',
      key: '',
      search: 'something=value&other=value',
      state,
    },
    history: {
      action: 'POP',
      replace: jest.fn(),
      go: jest.fn(),
      block: jest.fn(),
      createHref: jest.fn(),
      goForward: jest.fn(),
      length: 0,
      listen: jest.fn(),
      location: {
        hash: '/',
        pathname: '/',
        key: '',
        search: 'something=value&other=value',
        state,
      },
      push: jest.fn(),
      goBack: jest.fn(),
    },
    match: {
      params: {
        ...props,
      },
      isExact: true,
      path: '/base-url',
      url: '/some-url/some-other-path',
    },
  };
};

export default reactRouterPropsFactory;
