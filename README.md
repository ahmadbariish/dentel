# Dental Clinic Management System

نظام إدارة عيادة الأسنان - مشروع متكامل يتكون من واجهة أمامية (Frontend) وخلفية (Backend) لإدارة عيادة الأسنان.

## المتطلبات الأساسية

قبل البدء، تأكد من تثبيت البرامج التالية:

1. **Node.js و npm**
   - قم بتحميل Node.js من [الموقع الرسمي](https://nodejs.org/)
   - اختر النسخة LTS (Long Term Support)
   - تأكد من تثبيت npm مع Node.js

2. **MongoDB**
   - قم بتحميل MongoDB Community Server من [الموقع الرسمي](https://www.mongodb.com/try/download/community)
   - اختر النسخة المناسبة لنظام Windows
   - قم بتثبيت MongoDB Compass (واجهة رسومية لإدارة قاعدة البيانات)

3. **Git**
   - قم بتحميل Git من [الموقع الرسمي](https://git-scm.com/download/win)

## تثبيت المشروع

1. **نسخ المشروع**
   ```bash
   git clone <رابط-المشروع>
   cd fullStack
   ```

2. **تثبيت مكتبات الباك إند**
   ```bash
   cd backend
   npm install
   ```

3. **تثبيت مكتبات الفرونت إند**
   ```bash
   cd ../dental-center
   npm install
   ```

## تشغيل المشروع

### 1. تشغيل MongoDB
- افتح MongoDB Compass
- تأكد من أن الخدمة تعمل على المنفذ الافتراضي (27017)
- أو قم بتشغيل MongoDB من سطر الأوامر:
  ```bash
  "C:\Program Files\MongoDB\Server\{version}\bin\mongod.exe"
  ```

### 2. تشغيل الباك إند
```bash
cd backend
npm start
```
- سيعمل الباك إند على: `http://localhost:5000`
- وثائق API متاحة على: `http://localhost:5000/docs`

### 3. تشغيل الفرونت إند
```bash
cd dental-center
npm start
```
- سيعمل الفرونت إند على: `http://localhost:3001`

## هيكل المشروع

```
fullStack/
├── backend/                # خادم الباك إند
│   ├── controllers/       # المتحكمات
│   ├── models/           # نماذج قاعدة البيانات
│   ├── routes/           # مسارات API
│   ├── middlewares/      # الوسائط
│   └── app.js           # نقطة بداية التطبيق
│
└── dental-center/        # تطبيق الفرونت إند
    ├── public/          # الملفات العامة
    ├── src/            # الكود المصدري
    │   ├── components/ # المكونات
    │   ├── pages/     # صفحات التطبيق
    │   ├── services/  # خدمات API
    │   └── config/    # ملفات التكوين
    └── package.json   # تبعيات المشروع
```

## نقاط الوصول الرئيسية

### واجهة المستخدم
- الصفحة الرئيسية: `http://localhost:3001`
- صفحة تسجيل الدخول: `http://localhost:3001/login`
- صفحة الخدمات: `http://localhost:3001/services`
- صفحة الأطباء: `http://localhost:3001/doctors`
- صفحة المواعيد: `http://localhost:3001/dates`
- صفحة المراجعات: `http://localhost:3001/reviews`

### واجهة API
- وثائق API: `http://localhost:5000/docs`
- نقاط API الرئيسية:
  - الخدمات: `http://localhost:5000/api/v1.0.0/services`
  - المواعيد: `http://localhost:5000/api/v1.0.0/dates`
  - المراجعات: `http://localhost:5000/api/v1.0.0/reviws`
  - المستخدمين: `http://localhost:5000/api/v1.0.0/users`

## حل المشاكل الشائعة

### 1. مشاكل المنافذ
إذا كان المنفذ 5000 مشغولاً:
```bash
# البحث عن العملية التي تستخدم المنفذ
netstat -ano | findstr :5000
# إيقاف العملية باستخدام معرف العملية (PID)
taskkill /PID <PID> /F
```

إذا كان المنفذ 3001 مشغولاً:
- سيطلب منك React تشغيل التطبيق على منفذ آخر
- اضغط `Y` للموافقة

### 2. مشاكل قاعدة البيانات
- تأكد من تشغيل خدمة MongoDB
- تأكد من اتصال MongoDB Compass
- تأكد من أن المنفذ 27017 متاح

### 3. مشاكل التثبيت
إذا واجهت مشاكل في تثبيت المكتبات:
```bash
# حذف مجلد node_modules وملف package-lock.json
rm -rf node_modules package-lock.json
# إعادة تثبيت المكتبات
npm install
```

## الميزات الرئيسية

1. **إدارة المستخدمين**
   - تسجيل الدخول
   - إنشاء حساب جديد
   - تحديث الملف الشخصي
   - تغيير كلمة المرور

2. **إدارة الخدمات**
   - عرض الخدمات المتاحة
   - تفاصيل كل خدمة
   - حجز موعد

3. **إدارة المواعيد**
   - عرض المواعيد
   - إضافة موعد جديد
   - تعديل المواعيد
   - إلغاء المواعيد

4. **المراجعات والتقييمات**
   - إضافة مراجعة
   - عرض المراجعات
   - تقييم الخدمات

## المساهمة في المشروع

1. قم بعمل Fork للمشروع
2. أنشئ فرع جديد (`git checkout -b feature/AmazingFeature`)
3. قم بعمل Commit للتغييرات (`git commit -m 'Add some AmazingFeature'`)
4. ادفع إلى الفرع (`git push origin feature/AmazingFeature`)
5. افتح طلب Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## الدعم

إذا واجهت أي مشاكل أو لديك أسئلة، يرجى فتح issue في المشروع. 