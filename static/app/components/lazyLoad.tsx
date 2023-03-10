import React, {Component, ErrorInfo, lazy, Suspense, useMemo} from 'react';
import LoadingError from 'cliff/components/loadingError';
import LoadingIndicator from 'cliff/components/loadingIndicator';
// import {t} from 'sentry/locale';
import retryableImport from 'cliff/utils/retryableImport';

type PromisedImport<C> = Promise<{default: C}>;

type ComponentType = React.ComponentType<any>;

type Props<C extends ComponentType> = Omit<React.ComponentProps<C>, 'route'> & {
  /**
   * Accepts a function to trigger the import resolution of the component.
   */
  component: () => PromisedImport<C>;
};

/**
 * LazyLoad is used to dynamically load codesplit components via a `import`
 * call. This is primarily used in our routing tree.
 *
 * <LazyLoad component={() => import('./myComponent')} someComponentProps={...} />
 */
function LazyLoad<C extends ComponentType>(props: Props<C>) {
  const LazyComponent = useMemo(
    () => lazy(() => retryableImport(props.component)),
    [props.component]
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingIndicator />}>
        <LazyComponent {...(props as React.ComponentProps<C>)} />
      </Suspense>
    </ErrorBoundary>
  );
}

interface ErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
}

// Error boundaries currently have to be classes.
class ErrorBoundary extends Component<{children: React.ReactNode}, ErrorBoundaryState> {
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  state = {hasError: false, error: null};

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.error(errorInfo);
  }

  // Reset `hasError` so that we attempt to render `this.props.children` again
  handleRetry = () => this.setState({hasError: false});

  render() {
    if (this.state.hasError) {
      return (
        <LoadingError
          onRetry={this.handleRetry}
          message="There was an error loading a component."
        />
      );
    }
    return this.props.children;
  }
}

export default LazyLoad;
