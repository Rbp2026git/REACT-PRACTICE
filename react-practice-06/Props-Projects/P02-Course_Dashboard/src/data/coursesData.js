const coursesData = [
    {
        id: 1,
        title: "React for Beginners",
        price: 499,
        isFree: false,
        rating: 4.5,
        tags: ["JS", "JSX", "Hooks"],
        instructor: {
            name: "Aman Sharma",
            experience: "5 years",
        },
    },
    {
        id: 2,
        title: "Javascript Basic",
        price: 0,
        isFree: true,
        rating: 4.8,
        tags: ["JS", "DOM", "ES6"],
        instructor: {
            name: "Priya Sharma",
            experience: "3 years",
        },
    },
    {
        id: 3,
        title: "Advanced CSS & Animations",
        price: 299,
        isFree: false,
        rating: 4.2,
        tags: ["CSS", "Animation", "Flexbox"],
        instructor: {
            name: "Rohan Das",
            experience: "4 years",
        },
    },
];

export default coursesData