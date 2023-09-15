interface IconDropdown {
  icon?: JSX.Element | JSX.Element[] | React.ReactNode;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export default function IconDropdown({ icon, children }: IconDropdown) {
  return (
    <div className="icon-dropdown">
      <i>{icon}</i>
      {children}
    </div>
  );
}
