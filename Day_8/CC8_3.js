// Case 1
const personAccount = {
    firstName:'Kamal', 
    lastName:'Hasan', 
    incomes: [
        {
            description:'This is a des',
            amount : 1000
        },
        {
            description:'This is another des',
            amount : 200
        }
    ], 
    expenses:[
        {
            description:'This is a exp',
            amount : 500
        },
        {
            description:'This is another exp',
            amount : 210
        }
    ], 
    totalIncome : function(){
        return 'Total Income';
    }, 
    totalExpense : function(){
        return 'Total Expense';
    }, 
    accountInfo : function(){
        return 'Acc Info';
    },
    addIncome : function(){
        return 'Add Income';
    }, 
    addExpense : function(){
        return 'add exp';
    }, 
    accountBalance : function(){
        return 'Total balance';

    }
}

// Case 2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

for(each of users)
{
    console.log(each.email);
}

const signUp = (id,username,email,pass,time,islog)=>{
    let isExist = false;
    for(each of users)
    {
        if(each.email == email)
        {
            isExist = true;
        }
    }
    if(isExist)
    {
        return 'Already exist!';
    }
    else
    {
        users.push(
            {
                _id:id,
                username,
                email,
                password:pass,
                createdAt:time,
                isLoggedIn:islog

            }
        )

        return 'Added!';
    }
}

console.log(signUp('12345','Noman','noman@ex.com','123456',new Date(),true));
console.log(signUp('12345','Noman','noman@ex.com','123456',new Date(),true));
console.log(users);

// Case 3
const rateProduct = function(id,userId, rate){
    let isExist = false;
    for(each of products)
    {
        if(each._id == id)
        {
            each.ratings.push({
                userId,
                rate
            });
            isExist = true;
            break;
        }
    }
    if(isExist)
    {
        return 'Added!';
    }
    else
    {
        return 'Not found!';
    }
}
console.log(rateProduct('aegfal','a123d',5));
console.log(products);

console.log(products[1].likes);
// Case 4
const likeProduct = function(id){
    let isLiked = false;
    for(each of products)
    {
        if(each._id == id)
        {
            if(each.likes.length== 0)
            {
                each.likes.push('12345');
                isLiked = true;
            }
            else
            {
                each.likes.splice(0);
            }
            break;
        }
    }
    if(isLiked)
    {
        return 'Added!';
    }
    else
    {
        return 'Like Removed!';
    }
}

console.log(likeProduct('aegfal'),products );