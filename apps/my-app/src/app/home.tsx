import { CompOne, CompTwo, CompThree } from '@components';
import { useCallback, useEffect } from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  const loadHelpContent = useCallback(
    async (route: string) => {
      const context = determineContext(route);

      try {
        const rootPath = process.env.REACT_APP_ROOT_PATH || '';
        const manifestModule = await import(`./${rootPath}${context}/manifest`);
        const manifest = manifestModule.default;

        console.log('Manifest:', manifest);

        const routeInfo = manifest[route];

        console.log(routeInfo);
      } catch (error) {
        console.error(`Error loading manifest for context: ${context}`, error);
      }
    },
    [] // Add dependencies here
  );

  useEffect(() => {
    const currentRoute = location.pathname;
    loadHelpContent(currentRoute);
  }, [loadHelpContent, location]);

  const determineContext = (route: string): string | null => {
    if (route.startsWith('/comp-one')) {
      return '/comp-one';
    }
    if (route.startsWith('/comp-two')) {
      return '/comp-two';
    }
    if (route.startsWith('/comp-three')) {
      return '/comp-three';
    }
    return null;
  };

  // Both values in User are required.
  type User = {
    name: string;
    age: number;
  };

  // pass User to a Partial util type and all values within User are now optional (name:?) and can be changed.
  const updateUser: Partial<User> = { name: 'John' };

  console.log(updateUser);

  return (
    <>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">comp-one</Link>
          </li>
          <li>
            <Link to="/comp-two">comp-two</Link>
          </li>
          <li>
            <Link to="/comp-three">comp-three</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<CompOne />} />
        <Route path="/comp-two" element={<CompTwo />} />
        <Route path="/comp-three" element={<CompThree />} />
      </Routes>
    </>
  );
};
