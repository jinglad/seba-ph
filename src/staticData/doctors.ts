import { v4 as uuidv4 } from "uuid";

export const doctors = [
  {
    id: 1,
    name: "Robert Gill",
    department: "Neurologist",
    image: "/images/doctors/doctor-1.png",
    place: "Madina-Market",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "15 Years",
    fee: 1000,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Rehabilitation",
      "Neuro Oncology",
      "Neuro Critical Care",
    ],
    awards: [
      "Best Doctor Award",
      "Best Neurologist Award",
      "Best Neuro Surgeon Award",
      "Best Neuro Rehabilitation Award",
      "Best Neuro Oncology Award",
      "Best Neuro Critical Care Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 2,
    name: "Christian Herry",
    department: "Dentist",
    image: "/images/doctors/doctor-2.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Dentistry",
    experience: "15 Years",
    fee: 1500,
    place: "Madina-Market",
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Dentistry",
      "Dental Surgery",
      "Dental Implants",
      "Dental Orthodontics",
      "Dental Prosthodontics",
    ],
    awards: [
      "Best Doctor Award",
      "Best Dentist Award",
      "Best Dental Surgery Award",
      "Best Dental Implants Award",
      "Best Dental Orthodontics Award",
      "Best Dental Prosthodontics Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 3,
    name: "Robert Snow",
    department: "Cardiologist",
    image: "/images/doctors/doctor-1.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "15 Years",
    place: "Rajshahi-Market",
    fee: 700,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Rehabilitation",
      "Neuro Oncology",
      "Neuro Critical Care",
    ],
    awards: [
      "Best Doctor Award",
      "Best Neurologist Award",
      "Best Neuro Surgeon Award",
      "Best Neuro Rehabilitation Award",
      "Best Neuro Oncology Award",
      "Best Neuro Critical Care Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 4,
    name: "Christian Robert",
    department: "Dermatologist",
    image: "/images/doctors/doctor-2.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Dentistry",
    experience: "15 Years",
    place: "Rajshahi-Market",
    fee: 500,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Dentistry",
      "Dental Surgery",
      "Dental Implants",
      "Dental Orthodontics",
      "Dental Prosthodontics",
    ],
    awards: [
      "Best Doctor Award",
      "Best Dentist Award",
      "Best Dental Surgery Award",
      "Best Dental Implants Award",
      "Best Dental Orthodontics Award",
      "Best Dental Prosthodontics Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 5,
    name: "Robert Brown",
    department: "Gynecologist",
    image: "/images/doctors/doctor-1.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "15 Years",
    place: "Dhaka-Market",
    fee: 550,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Rehabilitation",
      "Neuro Oncology",
      "Neuro Critical Care",
    ],
    awards: [
      "Best Doctor Award",
      "Best Neurologist Award",
      "Best Neuro Surgeon Award",
      "Best Neuro Rehabilitation Award",
      "Best Neuro Oncology Award",
      "Best Neuro Critical Care Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 6,
    name: "Christian Herry",
    department: "Ophthalmologist",
    image: "/images/doctors/doctor-2.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Dentistry",
    experience: "15 Years",
    place: "Chittagong-Market",
    fee: 580,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Dentistry",
      "Dental Surgery",
      "Dental Implants",
      "Dental Orthodontics",
      "Dental Prosthodontics",
    ],
    awards: [
      "Best Doctor Award",
      "Best Dentist Award",
      "Best Dental Surgery Award",
      "Best Dental Implants Award",
      "Best Dental Orthodontics Award",
      "Best Dental Prosthodontics Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 7,
    name: "Robert Gill",
    department: "Orthopedist",
    image: "/images/doctors/doctor-1.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "15 Years",
    place: "Chittagong-Market",
    fee: 610,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Rehabilitation",
      "Neuro Oncology",
      "Neuro Critical Care",
    ],
    awards: [
      "Best Doctor Award",
      "Best Neurologist Award",
      "Best Neuro Surgeon Award",
      "Best Neuro Rehabilitation Award",
      "Best Neuro Oncology Award",
      "Best Neuro Critical Care Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 8,
    name: "Christian Herry",
    department: "Psychiatrist",
    image: "/images/doctors/doctor-2.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Dentistry",
    experience: "15 Years",
    place: "Chittagong-Market",
    fee: 2500,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Dentistry",
      "Dental Surgery",
      "Dental Implants",
      "Dental Orthodontics",
      "Dental Prosthodontics",
    ],
    awards: [
      "Best Doctor Award",
      "Best Dentist Award",
      "Best Dental Surgery Award",
      "Best Dental Implants Award",
      "Best Dental Orthodontics Award",
      "Best Dental Prosthodontics Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 9,
    name: "Robert Gill",
    department: "Surgeon",
    image: "/images/doctors/doctor-1.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "15 Years",
    place: "Chittagong-Market",
    fee: 2000,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Rehabilitation",
      "Neuro Oncology",
      "Neuro Critical Care",
    ],
    awards: [
      "Best Doctor Award",
      "Best Neurologist Award",
      "Best Neuro Surgeon Award",
      "Best Neuro Rehabilitation Award",
      "Best Neuro Oncology Award",
      "Best Neuro Critical Care Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 10,
    name: "Christian Herry",
    department: "Dentist",
    image: "/images/doctors/doctor-2.png",
    rating: 4.5,
    degree: "MBBS, MD - General Medicine, DM - Dentistry",
    experience: "15 Years",
    place: "Chittagong-Market",
    fee: 500,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Dentistry",
      "Dental Surgery",
      "Dental Implants",
      "Dental Orthodontics",
      "Dental Prosthodontics",
    ],
    awards: [
      "Best Doctor Award",
      "Best Dentist Award",
      "Best Dental Surgery Award",
      "Best Dental Implants Award",
      "Best Dental Orthodontics Award",
      "Best Dental Prosthodontics Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 11,
    name: "Robert Gill",
    department: "Neurologist",
    image: "/images/doctors/doctor-1.png",
    rating: 4.5,
    place: "Rajshahi-Market",
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "15 Years",
    fee: 500,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Rehabilitation",
      "Neuro Oncology",
      "Neuro Critical Care",
    ],
    awards: [
      "Best Doctor Award",
      "Best Neurologist Award",
      "Best Neuro Surgeon Award",
      "Best Neuro Rehabilitation Award",
      "Best Neuro Oncology Award",
      "Best Neuro Critical Care Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
  {
    id: 12,
    name: "Christian Herry",
    department: "Dentist",
    image: "/images/doctors/doctor-2.png",
    rating: 4.5,
    place: "Rajshahi-Market",
    degree: "MBBS, MD - General Medicine, DM - Dentistry",
    experience: "15 Years",
    fee: 500,
    about:
      "Dr. Robert Gill is a Neurologist in Sector 51, Noida and has an experience of 15 years in this field. Dr. Robert Gill practices at Fortis Hospital in Sector 51, Noida. He completed MBBS from University of Delhi in 2001, MD - General Medicine from University of Delhi in 2005 and DM - Neurology from University of Delhi in 2009.",
    speciality: [
      "Dentistry",
      "Dental Surgery",
      "Dental Implants",
      "Dental Orthodontics",
      "Dental Prosthodontics",
    ],
    awards: [
      "Best Doctor Award",
      "Best Dentist Award",
      "Best Dental Surgery Award",
      "Best Dental Implants Award",
      "Best Dental Orthodontics Award",
      "Best Dental Prosthodontics Award",
    ],
    languages: ["English", "Hindi", "Bengali"],
    availability: [
      {
        day: "Monday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Tuesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Wednesday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Thursday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Friday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Saturday",
        time: "10:00 AM - 12:00 PM",
      },
      {
        day: "Sunday",
        time: "10:00 AM - 12:00 PM",
      },
    ],
  },
];
