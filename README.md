# KhSol-Nest

🚀 **KhSol-Nest** არის მოდულური RESTful API პლატფორმა, აშენებული [NestJS](https://nestjs.com/)-ზე და ინტეგრირებული MongoDB-თან.

---

## 📦 გამოყენებული ტექნოლოგიები

- **NestJS** – TypeScript-ზე აგებული scalable და მოდულური ჩარჩო
- **MongoDB + Mongoose** – დოკუმენტზე დაფუძნებული მონაცემთა ბაზა
- **JWT Authentication** – ავტორიზაციის სტანდარტული მექანიზმი
- **RBAC (Role-based Access Control)** – granular-level წვდომის კონტროლი
- **Swagger** – API-ის ავტომატური დოკუმენტაცია
- **Class-validator & class-transformer** – მოთხოვნების ვალიდაცია და ტრანსფორმაცია
- **Nodemailer + Handlebars** – Email შაბლონები და გაგზავნა
- **Docker-ready სტრუქტურა** – სურვილისამებრ კონტეინერიზაცია

---

## ⚙️ ინსტალაცია

### 1. პროექტის კლონირება

```bash
git clone https://github.com/your-username/khsol-nest.git
cd khsol-nest
```

### 2. პაკეტების დაყენება

```bash
npm install
```

### 3. .env ფაილის შექმნა

`.env` ფაილი (მაგალითი):

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/khsol-db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_email_password
```

### 4. აპის გაშვება

```bash
npm run start:dev
```

---

## 🚀 API Endpoint-ები

Swagger UI ავტომატურად გენერირდება შემდეგ მისამართზე:

```
http://localhost:3000/api
```

> შეიცავს ყველა endpoint-ს, DTO-ს და ვალიდაციის წესებს ინტერფეისით.

---

## 📁 მოდულების სტრუქტურა

| მოდული       | აღწერა |
|--------------|---------|
| `auth`       | ავტორიზაცია, რეგისტრაცია, token მართვა |
| `users`      | მომხმარებლების CRUD |
| `roles`      | როლების შექმნა და მინიჭება |
| `profile`    | იუზერის პერსონალური მონაცემები |
| `basket`     | კალათის მოდული |
| `procedures` | ძირითადი ოპერაციები და სერვისები |
| `token`      | refresh/access ტოკენების ცალკე მოდული |
| `mail`       | მეილების გაგზავნა და აქტივაცია |
| `common`     | shared რესურსები (pipes, guards, dto-ები) |

---

## 🧪 ტესტირება

```bash
npm run test
```

---

## 🐳 Docker (სურვილის შემთხვევაში)

### Dockerfile

```Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]
```

### docker-compose.yml (MongoDB-ის მხარდაჭერით)

```yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - mongo

  mongo:
    image: mongo:5
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

---

## ✍ ავტორი

დამზადებულია ❤️-ით KhSol-ის გუნდის მიერ

📫 Contact: [შენი ელფოსტა ან GitHub ბმული]

---