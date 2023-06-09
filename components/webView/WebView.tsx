'use client';

import React, { useEffect } from 'react';

const WebView = () => {
  useEffect(() => {
    (async () => {
      console.log('as');
      const { WebviewWindow } = await import('@tauri-apps/api/window');
      const extId = 's';
      const webview = new WebviewWindow('theUniqueLabel', {
        url: `chrome-extension://${extId}/home.html`
      });

      webview.once('tauri://created', function () {
        console.log('webview window successfully created');
      });
      webview.once('tauri://error', function (e) {
        console.log(' an error happened creating the webview window');
      });
    })();
  }, []);

  return <div>WebView</div>;
};

export default WebView;
