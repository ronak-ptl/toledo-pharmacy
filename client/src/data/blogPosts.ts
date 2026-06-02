/*
 * Blog post data for Toledo Pharmacy.
 * Shared between the blog listing (/blog) and the post detail page (/blog/:id).
 */

// Topic-relevant images from Unsplash (free license, no attribution required)
const MENS_HEALTH_IMG =
  "https://images.pexels.com/photos/7108334/pexels-photo-7108334.jpeg?w=800&q=80&fit=crop&auto=compress";
const FALL_CARE_IMG =
  "https://images.unsplash.com/photo-1509838174235-432f709c7bfd?w=800&q=80&fit=crop&auto=format";
const SUMMER_CARE_IMG =
  "https://images.unsplash.com/photo-1548780607-46c78f38182d?w=800&q=80&fit=crop&auto=format";
const COVID_VACCINE_IMG =
  "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&q=80&fit=crop&auto=format";
const COVID_TEST_IMG =
  "https://images.unsplash.com/photo-1618229745296-8a86a193cc03?w=800&q=80&fit=crop&auto=format";

const DISCLAIMER: ContentBlock = {
  type: "disclaimer",
  text: "This article is for informational purposes only and does not constitute medical advice. Please consult your doctor or pharmacist before making changes to your health routine.",
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "disclaimer"; text: string };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "mens-health-month-screenings",
    title: "Men's Health Month: Small Screenings, Big Impact",
    excerpt:
      "June is Men's Health Month. Studies show men are far less likely to get routine checkups, yet a few simple screenings can catch serious conditions early. Learn which screenings matter and how your local pharmacy can help.",
    date: "June 2, 2026",
    category: "Health Tips",
    image: MENS_HEALTH_IMG,
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "June is Men's Health Month — a national effort to encourage men and boys to take charge of their health. Studies show that men are significantly less likely than women to visit a doctor for routine checkups, and many preventable conditions go undetected until they become serious. The good news? A few simple screenings can make a real difference, and many of them are available right at your local pharmacy.",
      },
      { type: "h", text: "Why Men Skip Checkups — and Why It Matters" },
      {
        type: "p",
        text: "Between work, family, and daily responsibilities, health screenings often fall to the bottom of the list. But conditions like high blood pressure, high cholesterol, and elevated blood sugar rarely cause noticeable symptoms in their early stages. By the time you feel something, the condition may have already progressed. Regular screenings catch problems early, when they are easiest to manage.",
      },
      { type: "h", text: "Screenings to Talk to Your Doctor About" },
      {
        type: "p",
        text: "The right screenings depend on your age, family history, and overall health. Here are a few that health organizations commonly recommend for adult men:",
      },
      {
        type: "ul",
        items: [
          "Blood pressure — High blood pressure is one of the leading risk factors for heart disease and stroke. The American Heart Association recommends checking it at least once a year.",
          "Cholesterol — A simple blood test can reveal whether your cholesterol levels put you at increased risk. Talk to your doctor about how often you should be tested.",
          "Blood sugar — Type 2 diabetes often develops without obvious symptoms. Screening is especially important if you have a family history or carry extra weight around the midsection.",
          "Colorectal screening — Guidelines generally recommend starting at age 45. Ask your doctor which type of screening is right for you.",
        ],
      },
      { type: "h", text: "What Your Pharmacy Can Do" },
      {
        type: "p",
        text: "You don't always need a doctor's appointment to start. At Toledo Pharmacy, we offer convenient walk-in blood pressure checks — no appointment needed. We can also help you understand your over-the-counter options for heart health, vitamins, and wellness, and we are happy to coordinate with your doctor's office on your prescriptions and refills.",
      },
      { type: "h", text: "A Reminder for the Women in Their Lives" },
      {
        type: "p",
        text: "Sometimes the best motivation comes from the people closest to us. If there is a man in your life — a partner, father, brother, or friend — who has been putting off a checkup, a gentle nudge can go a long way.",
      },
      { type: "h", text: "En Español" },
      {
        type: "p",
        text: "Junio es el Mes de la Salud del Hombre. Lo invitamos a visitarnos en Toledo Pharmacy para un chequeo de presión arterial sin cita. Hable con su médico sobre los exámenes de salud que necesita. Estamos aquí para ayudarle — llámenos al (201) 867-0297.",
      },
      DISCLAIMER,
    ],
  },
  {
    id: "fall-care-tips",
    title: "Fall Care Tips",
    excerpt:
      "As the seasons change, it's important to prepare your health routine for the cooler months ahead. Here are our top tips for staying healthy this fall, from flu prevention to managing seasonal allergies.",
    date: "October 8, 2024",
    category: "Health Tips",
    image: FALL_CARE_IMG,
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "As the days grow shorter and the air turns crisp, fall brings its own set of health challenges. Cooler temperatures, drier air, and the start of flu season all mean it's a good time to give your health routine a seasonal tune-up. Here at Toledo Pharmacy, we want to help you and your family stay well through the cooler months ahead.",
      },
      { type: "h", text: "Get Your Flu Shot Early" },
      {
        type: "p",
        text: "The single most effective thing you can do this fall is get your annual flu vaccine. It takes about two weeks for your body to build full protection, so getting vaccinated in early fall means you're covered before flu activity peaks. No appointment is needed — just walk in and our pharmacists will take care of the rest.",
      },
      { type: "h", text: "Manage Seasonal Allergies" },
      {
        type: "p",
        text: "Fall allergies — often triggered by ragweed pollen and indoor mold — can be just as stubborn as spring ones. A few simple steps can keep symptoms in check:",
      },
      {
        type: "ul",
        items: [
          "Keep windows closed on high-pollen days and use air conditioning instead.",
          "Shower and change clothes after spending time outdoors.",
          "Start antihistamines before symptoms ramp up, not after.",
          "Ask our pharmacists which over-the-counter option is right for you.",
        ],
      },
      { type: "h", text: "Support Your Immune System" },
      {
        type: "p",
        text: "Shorter days mean less sunlight and, for many people, lower vitamin D levels. Eating a balanced diet rich in fruits and vegetables, staying physically active, and getting enough sleep all help your immune system stay strong. If you're considering a vitamin D or other supplement, talk to us first so we can check for any interactions with your current medications.",
      },
      { type: "h", text: "Don't Forget Your Refills" },
      {
        type: "p",
        text: "Busy holiday schedules can make it easy to let prescriptions lapse. Set up automatic refills or our free delivery service so you never run out of the medications you depend on. Stop by or give us a call at (201) 867-0297 — we're always happy to help you prepare for the season ahead.",
      },
      DISCLAIMER,
    ],
  },
  {
    id: "summer-care-tips",
    title: "Summer Care Tips",
    excerpt:
      "Stay safe and healthy during the hot summer months with these essential tips from our pharmacists. Learn about sun protection, hydration, and managing summer allergies.",
    date: "April 19, 2023",
    category: "Health Tips",
    image: SUMMER_CARE_IMG,
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Summer is a time for sunshine, outdoor activities, and travel — but the heat also brings real health risks. With a little preparation, you can enjoy the season safely. Our pharmacists have put together their top recommendations for staying healthy when the temperatures climb.",
      },
      { type: "h", text: "Protect Your Skin from the Sun" },
      {
        type: "p",
        text: "Sun protection isn't just about avoiding sunburn — it's about reducing your long-term risk of skin cancer. Choose a broad-spectrum sunscreen with at least SPF 30, apply it generously about 15 minutes before going outside, and reapply every two hours (or more often if you're swimming or sweating).",
      },
      { type: "h", text: "Stay Hydrated" },
      {
        type: "p",
        text: "Dehydration sneaks up quickly in hot weather. Watch for these warning signs and act early:",
      },
      {
        type: "ul",
        items: [
          "Dry mouth, headache, or dizziness.",
          "Dark-colored urine or reduced urination.",
          "Feeling unusually tired or irritable.",
        ],
      },
      {
        type: "p",
        text: "Drink water regularly throughout the day rather than waiting until you feel thirsty, and limit caffeine and alcohol, which can make dehydration worse.",
      },
      { type: "h", text: "Mind Your Medications in the Heat" },
      {
        type: "p",
        text: "Some medications — including certain blood pressure drugs, antihistamines, and antibiotics — can increase sun sensitivity or affect how your body regulates temperature. Never store your medications in a hot car, and ask us if any of your prescriptions require special care during the summer.",
      },
      { type: "h", text: "Manage Summer Allergies" },
      {
        type: "p",
        text: "Grass pollen and air pollution can trigger summer allergy flare-ups. Keep your symptoms under control with the right antihistamine or nasal spray — stop in and we'll help you find the best option. Have a safe and healthy summer, and remember we're here at 3808 Bergenline Ave whenever you need us.",
      },
      DISCLAIMER,
    ],
  },
  {
    id: "covid-19-vaccine",
    title: "COVID-19 Vaccine Available",
    excerpt:
      "Pfizer and Moderna Booster vaccines are available at Toledo Pharmacy! No appointment needed — just walk in. Protect yourself and your loved ones today. Vacunas Pfizer y Moderna Booster disponibles.",
    date: "December 6, 2022",
    category: "Vaccinations",
    image: COVID_VACCINE_IMG,
    readTime: "2 min read",
    content: [
      {
        type: "p",
        text: "Toledo Pharmacy is proud to offer the latest Pfizer and Moderna COVID-19 booster vaccines to our Union City community. Staying up to date with your boosters is one of the best ways to protect yourself and the people around you from severe illness.",
      },
      { type: "h", text: "No Appointment Needed" },
      {
        type: "p",
        text: "We've made getting your booster as easy as possible — just walk in during our regular hours and one of our pharmacists will administer your vaccine. Most major insurance plans cover the cost, and we'll handle the paperwork for you.",
      },
      { type: "h", text: "What to Bring" },
      {
        type: "ul",
        items: [
          "A photo ID.",
          "Your insurance card, if you have one.",
          "Your vaccination record card, if you still have it.",
        ],
      },
      { type: "h", text: "En Español" },
      {
        type: "p",
        text: "¡Vacunas de refuerzo Pfizer y Moderna disponibles en Toledo Pharmacy! No se necesita cita — simplemente visítenos. Protéjase a usted y a sus seres queridos hoy mismo. Hablamos español y con gusto le ayudamos.",
      },
      {
        type: "p",
        text: "Have questions before you come in? Call us at (201) 867-0297 and our team will be glad to help.",
      },
      DISCLAIMER,
    ],
  },
  {
    id: "home-covid-test-kits",
    title: "Home COVID Test Kits",
    excerpt:
      "COVID-19 Home Test Kits are now available at Toledo Pharmacy. Stop by our location at 3808 Bergenline Ave, Union City, NJ 07087 to pick up yours today. Kit de prueba COVID-19 disponible.",
    date: "December 6, 2022",
    category: "COVID-19",
    image: COVID_TEST_IMG,
    readTime: "2 min read",
    content: [
      {
        type: "p",
        text: "Rapid at-home COVID-19 test kits are now in stock at Toledo Pharmacy. These easy-to-use tests give you reliable results in minutes from the comfort of your home — perfect for checking before family gatherings, travel, or whenever you have symptoms.",
      },
      { type: "h", text: "Why Keep a Test Kit on Hand" },
      {
        type: "ul",
        items: [
          "Get results in about 15 minutes — no lab visit required.",
          "Test before visiting elderly or immunocompromised loved ones.",
          "Find out quickly if symptoms could be COVID-19 so you can take precautions.",
        ],
      },
      { type: "h", text: "Stop By and Pick Yours Up" },
      {
        type: "p",
        text: "Visit us at 3808 Bergenline Ave, Union City, NJ 07087 to grab a kit today. Supplies are limited, so we recommend stopping in soon. If you test positive, our pharmacists can walk you through next steps and answer any questions about treatment and isolation.",
      },
      { type: "h", text: "En Español" },
      {
        type: "p",
        text: "Kits de prueba de COVID-19 para el hogar ya disponibles en Toledo Pharmacy. Visítenos en 3808 Bergenline Ave, Union City, NJ 07087 para recoger el suyo hoy. Si tiene preguntas, llámenos al (201) 867-0297.",
      },
      DISCLAIMER,
    ],
  },
];

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
