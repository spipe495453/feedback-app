const Header = ({ text = 'DefaultText' }) => {
  return (
    <header>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
