"setup"  
npm i  
npm run dev  

setup db
npx prisma migrate dev --name init  
"open prisma studio"  
npx prisma studio

"update db schema"  
npx prisma generate  
npx prisma db push 

"remove data"  
npx prisma migrate reset  
npx prisma generate  
npx prisma db push   
