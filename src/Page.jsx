import './App.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function Page() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const isInstagram =
    /instagram/i.test(navigator.userAgent) ||
    /Instagram/.test(navigator.userAgent) ||
    /InstagramWebView/.test(navigator.userAgent);

  const isAndroid = /android/i.test(navigator.userAgent);
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  console.log('User Agent:', navigator.userAgent);
  console.log('Is Instagram:', isInstagram);
  console.log('Is Android:', isAndroid);
  console.log('Is iOS:', isIOS);
  console.log('ID:', id);

  useEffect(() => {
    if (id && isInstagram) {
      window.location.href = `intent://www.kookxtra.com/chef/?id=${id}#Intent;scheme=https;package=com.kookxtra.kx;end`;
    } else {
      if (isAndroid) {
        window.location.href = `https://play.google.com/store/apps/details?id=com.kookxtra.kx&pli=1`;
      } else if (isIOS) {
        window.location.href = `https://apps.apple.com/tt/app/kookxtra/id1597903577`;
      }
    }
  }, [id, isInstagram, isAndroid, isIOS]);

  if (!isInstagram) {
    return <div></div>;
  }

  return (
    <div>
      <p>Redirecting...</p>
      <button>Re-Launch</button>
      {isInstagram && <p>Opening from Instagram...</p>}
      {isAndroid && <p>Android device detected</p>}
      {isIOS && <p>iOS device detected</p>}
    </div>
  );
}

export default Page;
