// عامل خدمة بسيط جداً — وجوده فقط شرط تقني ليقبل المتصفح تثبيت الصفحة كتطبيق (لا تخزين مؤقت).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
