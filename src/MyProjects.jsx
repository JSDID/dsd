import "./Projects/Styles/Style.css";
import AboutProject01 from './Projects/AboutProject01';
import AboutProject02 from './Projects/AboutProject02';

const MyProjects = () => {
  return (
    <>
      <h1 className='Info__title'>Мої проекти</h1>
        <div className="Projects__row">
          <AboutProject01 />
          <AboutProject02 />
        </div>
    </>
  );
}
export default MyProjects;