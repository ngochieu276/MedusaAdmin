import { GlassLooking } from '../../style/svg/common';

export default function NormalSearch() {
  return (
    <div className="normal-search">
      <i className="normal-search-icon">
        <GlassLooking />
      </i>
      <input placeholder="Find something" type="search" />
    </div>
  );
}
