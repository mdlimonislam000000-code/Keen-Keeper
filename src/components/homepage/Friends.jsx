import Image from 'next/image';
import React from 'react';

const Friends = () => {

    const friends = [
        {
            "id": 1,
            "name": "Abir Hossain",
            "picture": "https://i.ibb.co.com/8gx5fK39/Whats-App-Image-2026-05-04-at-12-52-20.jpg",
            "email": "john.smith@example.com",
            "days_since_contact": 5,
            "status": "Almost due",
            "tags": ["collage", "friend"],
            "bio": "Entrepreneur and tech enthusiast.",
            "goal": "Expand business network",
            "next_due_date": "2026-05-10"
        },
        {
            "id": 2,
            "name": "Ramim Shaik ",
            "picture": "https://i.ibb.co.com/PzP01pPM/Whats-App-Image-2026-05-04-at-12-52-43.jpg",
            "email": "emma.johnson@example.com",
            "days_since_contact": 12,
            "status": "Overdue",
            "tags": ["collage", "friend"],
            "bio": "Marketing specialist with 5 years experience.",
            "goal": "Improve brand visibility",
            "next_due_date": "2026-05-15"
        },
        {
            "id": 3,
            "name": "Tarikul islam",
            "picture": "https://i.ibb.co.com/q3DJnvJj/Whats-App-Image-2026-05-04-at-12-53-03.jpg",
            "email": "michael.brown@example.com",
            "days_since_contact": 2,
            "status": "On track",
            "tags": ["collage", "friend"],
            "bio": "Freelance developer.",
            "goal": "Build SaaS product",
            "next_due_date": "2026-05-07"
        },
        {
            "id": 4,
            "name": "Ashraful",
            "picture": "https://i.ibb.co.com/kV3GbQP9/Whats-App-Image-2026-05-04-at-12-57-14.jpg",
            "email": "sophia.davis@example.com",
            "days_since_contact": 20,
            "status": "Almost due",
            "tags": ["Bother", "friend"],
            "bio": "UI/UX designer passionate about user experience.",
            "goal": "Create portfolio website",
            "next_due_date": "2026-05-25"
        },
        {
            "id": 5,
            "name": "Ferdous hasan",
            "picture": "https://i.ibb.co.com/C4KkZS7/Whats-App-Image-2026-05-04-at-12-57-13.jpg",
            "days_since_contact": 7,
            "status": "Overdue",
            "tags": ["Brother", "friend"],
            "bio": "Business consultant.",
            "goal": "Increase consulting clients",
            "next_due_date": "2026-05-12"
        },
        {
            "id": 6,
            "name": "Fahim kana",
            "picture": "https://i.ibb.co.com/MddHFDJ/Whats-App-Image-2026-05-04-at-12-58-05.jpg",
            "email": "olivia.martinez@example.com",
            "days_since_contact": 15,
            "status": "On track",
            "tags": ["son", "friend"],
            "bio": "Content writer and blogger.",
            "goal": "Grow blog audience",
            "next_due_date": "2026-05-18"
        },
        {
            "id": 7,
            "name": "Rasel ",
            "picture": "https://i.ibb.co.com/CKtJPFh4/Whats-App-Image-2026-05-04-at-12-57-13.jpg",
            "email": "william.anderson@example.com",
            "days_since_contact": 1,
            "status": "Almost due",
            "tags": ["son", "friend"],
            "bio": "Startup founder.",
            "goal": "Launch MVP",
            "next_due_date": "2026-05-06"
        },
        {
            "id": 8,
            "name": "Munna Don",
            "picture": "https://i.ibb.co.com/fGnfD7TL/Whats-App-Image-2026-05-04-at-12-53-53.jpg",
            "email": "ava.thomas@example.com",
            "days_since_contact": 9,
            "status": "Overdue",
            "tags": ["son", "friend"],
            "bio": "Photographer and traveler.",
            "goal": "Expand portfolio",
            "next_due_date": "2026-05-14"
        },
        {
            "id": 9,
            "name": "Limon",
            "picture": "https://i.ibb.co.com/7tSkYC9Q/Whats-App-Image-2026-05-04-at-12-51-32.jpg",
            "email": "benjamin.taylor@example.com",
            "days_since_contact": 30,
            "status": "On track",
            "tags": ["lost"],
            "bio": "Sales manager.",
            "goal": "Boost team performance",
            "next_due_date": "2026-05-30"
        },
        {
            "id": 10,
            "name": "Salman",
            "picture": "https://i.ibb.co.com/wHtYnFd/Whats-App-Image-2026-05-04-at-12-58-48.jpg",
            "email": "mia.harris@example.com",
            "days_since_contact": 3,
            "status": "Overdue",
            "tags": ["collage", "friend"],
            "bio": "Digital marketer.",
            "goal": "Increase conversion rate",
            "next_due_date": "2026-05-08"
        }
    ]

    return (
        <div className='container mx-auto'>
            <div >
                <h1>Your Friends:</h1>

                <div className='grid grid-cols-4 gap-5 p-4'>
                    {
                        friends.map(friend => (
                            <div key={friend.id} className='border p-4 rounded shadow-2xs'>

                                <Image
                                    className='mx-auto rounded-full'
                                    src={friend.picture}
                                    alt='Friends picture'
                                    width={100}
                                    height={100}
                                ></Image>
                                <p className='text-center text-[#1f2937] text-[1.3rem] mt-3'>{friend.name}</p>
                                <p className='text-center text-[#64748b]'>{friend.days_since_contact}d ago</p>

                                <div className='flex justify-center gap-7'>
                                    {
                                        friend.tags.map((tag, index) => (
                                            <span key={index}>
                                                <p>{tag}</p>
                                            </span>
                                        ))
                                    }
                                </div>

                                <p className={
                                    friend.status === "Overdue"
                                        ? "bg-red-500 text-amber-50 rounded text-center mt-2"
                                        : friend.status === "Almost due"
                                            ? "bg-yellow-500 text-amber-50 rounded  mt-2 text-center"
                                            : "bg-green-500 text-amber-50 rounded text-center mt-2"
                                }>{friend.status}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Friends;