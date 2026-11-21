/* eslint-disable @next/next/no-img-element -- Payload admin graphics render outside next/image's optimizer */

/** Big logo on the admin login / create-account screens. */
export function Logo() {
  return (
    <div className="hk-logo">
      <img src="/logo-256.png" alt="Hello Kids" width={96} height={96} />
      <div>
        <strong>Hello Kids</strong>
        <span>Pre-School &amp; Day Care · Admin</span>
      </div>
    </div>
  );
}

/** Small icon in the admin navigation / header. */
export function Icon() {
  return <img src="/logo-256.png" alt="Hello Kids" width={32} height={32} className="hk-icon" />;
}
