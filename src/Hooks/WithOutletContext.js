import { useOutletContext } from 'react-router-dom';

export const withContext = (Component) => {
  const ContextWrapper = (props) => {
    const context = useOutletContext();
    
    return (
      <Component
        context={context}
        {...props}
      />
    );
  };
  
  return ContextWrapper;
};