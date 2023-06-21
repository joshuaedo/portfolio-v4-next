export default function Marquee() {
  return (
    <>
      <div className="marquee">
        <div className="marquee__group">
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
        </div>
        <div className="marquee__group" aria-hidden="true">
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__group">
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
        </div>
        <div className="marquee__group" aria-hidden="true">
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
        </div>
      </div>
    </>
  );
}
