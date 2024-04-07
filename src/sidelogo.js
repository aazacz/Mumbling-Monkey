class Product {
   constructor(title) {
      this.title = title;
   }
}

class User {
   constructor(name, age, likedProducts) {
      this.name = name;
      this.age = age;
      this.likedProducts = likedProducts;
   }
}

function recommendProducts(currentUser, allUsers) {
   const recommendations = [];
   const ageRanges = [
      [1, 10], [11, 20], [21, 30], [31, 40], [41, 50],
      [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]
   ];
   let userAgeRange = null;

   for (const range of ageRanges) {
      if (range[0] <= currentUser.age && currentUser.age <= range[1]) {
         userAgeRange = range;
         break;
      }
   }

   if (userAgeRange !== null) {
      for (const otherUser of allUsers) {
         let otherUserAgeRange = null;
         for (const range of ageRanges) {
            if (range[0] <= otherUser.age && otherUser.age <= range[1]) {
               otherUserAgeRange = range;
               break;
            }
         }

         if (otherUser !== currentUser && otherUserAgeRange !== null &&
            userAgeRange.toString() === otherUserAgeRange.toString()) {
            for (const product of otherUser.likedProducts) {
               if (!recommendations.some((recProduct) => recProduct.title === product.title)) {
                  recommendations.push(product);
               }
            }
         }
      }
   }

   return recommendations;
}

const product1 = new Product('Product 1 - Laptop');
const product2 = new Product('Product 2 - Smart Watch');
const product3 = new Product('Product 3 - Headphones');
const product4 = new Product('Product 4 - Smartphone');
const product5 = new Product('Product 5 - Fitness Tracker');

const user1 = new User('John', 25, [product1, product3, product4]);
const user2 = new User('Emma', 27, [product1, product3, product4]);
const user3 = new User('Michael', 45, [product2, product3, product5]);
const user4 = new User('Sarah', 48, [product2, product3, product5]);

const allUsers = [user1, user2, user3, user4];
const recommendations = recommendProducts(user3, allUsers);

console.log('Hey, users of similar age range have liked these products:');
if (recommendations.length === 0) {
   console.log('No suggested products available');
} else {
   recommendations.forEach((product, index) => {
      console.log( `${ index + 1}.${ product.title }`);
});
 }





  // <>
    //   <div class="bg-gray-100">
    //     <div class="container mx-auto p-8">
    //       < motion.h1 initial={{ x: -1000 }}
    //         animate={{ x: [0, 900, 0] }}
    //         whileHover={{ scale: 1.2, opacity: 0.5 }}
    //         transition={{ duration: 3 }} class="text-4xl font-bold mb-8">Interactive Page Example</motion.h1>


    //       <div class="grid grid-cols-3 gap-8 ">
    //         <AnimatePresence>
    //           {show && <motion.div initial={{ opacity: 0, x: -100 }}
    //             animate={{ opacity: 1, x: 0 }}
    //             exit={{ opacity: 0, x: 100 }}
    //             transition={{ duration: 2 }}>
    //             <div class="bg-blue-500 p-6 rounded-md">
    //               <p class="text-white">Rectangle 1</p>
    //             </div>
    //             <div class="bg-green-500 p-6 rounded-md">
    //               <p class="text-white">Rectangle 2</p>
    //             </div>
    //             <div class="bg-yellow-500 p-6 rounded-md">
    //               <p class="text-white">Rectangle 3</p>
    //             </div>
    //           </motion.div>}

    //         </AnimatePresence>
    //         <div>
    //           <button class="bg-purple-500 text-white py-2 px-4 rounded-md" onClick={() => setShow(!show)}>Click me</button>
    //         </div>

    //         <motion.div drag="x" dragConstraints={{ right: 100 }} class="col-span-3 mt-8">
    //           <p class="text-lg font-semibold">Some text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </motion.div >


    //         <div class="col-span-2">
    //           <img src="https://via.placeholder.com/500" alt="Placeholder Image" class="w-full rounded-md shadow-md" />
    //         </div>


    //         <div>
    //           <button class="bg-purple-500 text-white py-2 px-4 rounded-md" >Click me</button>
    //         </div>


    //         <div class="bg-red-500 p-6 rounded-md">
    //           <p class="text-white">Rectangle 4</p>
    //         </div>

    //         <div class="col-span-3 mt-8">
    //           <p class="text-lg font-semibold">More text. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
    //         </div>

    //         <div class="col-span-2">
    //           <img src="https://via.placeholder.com/600" alt="Placeholder Image" class="w-full rounded-md shadow-md" />
    //         </div>

    //         <div>
    //           <button class="bg-orange-500 text-white py-2 px-4 rounded-md">Another button</button>
    //         </div>
    //       </div>


    //       <div class="mt-16">
    //         <p class="text-lg font-semibold">Even more content...</p>

    //       </div>
    //       <motion.div class='bg-blue-500 p-6 rounded-md w-10'
    //         initial={{
    //           scale: 0, x: 0,
    //           y: 0,
    //         }}
    //         animate={{
    //           rotate: 180, scale: 1, x: 76,
    //           y: -73,
    //         }}
    //         transition={{
    //           type: "spring",
    //           stiffness: 260,
    //           damping: 20
    //         }}
    //       />






    //     </div>
    //   </div>

    // </>
