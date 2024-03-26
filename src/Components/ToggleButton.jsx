import { useGlobalContext } from './utils/global.context';

const ToggleButton = () => {

  const { toggleTheme } = useGlobalContext();

  return (
    
    <div className="toggle-button">
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="toggle-button-input"
        onChange={toggleTheme}
      />
      <label htmlFor="darkmode-toggle" className="toggle-button-label">
      </label>
      <div className="toggle-button-background"></div>
    </div>
  );
};

export default ToggleButton;
