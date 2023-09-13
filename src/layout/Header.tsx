import { ArrowLeft, ArrowRight, Clock, Question } from '../style/svg/header';

export default function Header() {
  return (
    <header className="header">
      <i>
        <ArrowLeft />
      </i>
      <i>
        <ArrowRight />
      </i>
      <i>
        <Clock />
      </i>
      <i className="header-question">
        <Question />
      </i>
    </header>
  );
}
