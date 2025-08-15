import React from 'react';
import WalletsSelection from './WalletsSelection';

interface IPropType {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ConnectWalletDropdown = (props: IPropType) => {
  const { isVisible, setIsVisible } = props;

  const handleSelect = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`absolute right-0 top-14 flex w-[240px] flex-col items-center justify-start transition-all duration-300 ${
        isVisible ? 'max-h-[530px]' : 'max-h-0 border-none'
      } z-[100] overflow-x-hidden overflow-hidden rounded-md bg-[#17181D]`}
      style={{
        scrollbarColor: 'none !important'
      }}
    >
      <WalletsSelection onSelect={handleSelect} />
    </div>
  );
};

export default ConnectWalletDropdown;
