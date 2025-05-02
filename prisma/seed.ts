import {prisma} from './index'
import bcrypt from 'bcrypt'

async function main() {
    const alice = await prisma.user.upsert({
        where : {
            number : '1111111111'
        },
        update : {},
        create : {
            number: '1111111111',
            password : await bcrypt.hash('alice', 10),
            name : 'alice',
            Balance : {
                create : {
                    amount: 10000,
                    locked : 0
                }
            },
            OnRampTransaction : {
                create : {
                    startTime : new Date(),
                    status : "Success",
                    amount : 2000,
                    token : 'token_1',
                    provider : "HDFC Bank "
                }
            }
        }
    })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
})