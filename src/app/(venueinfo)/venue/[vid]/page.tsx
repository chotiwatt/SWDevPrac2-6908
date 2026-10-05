import Link from "next/link";
import styles from "./page.module.css";

const venueDetails = new Map([
  ["001", { name: "The Bloom Pavilion", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80", location: "Bangkok, Thailand" }],
  ["002", { name: "Spark Space", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80", location: "Nonthaburi, Thailand" }],
  ["003", { name: "The Grand Table", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80", location: "Pathum Thani, Thailand" }],
]);

type VenuePageProps = {
  params: Promise<{ vid: string }>;
};

export default async function VenueDetailPage({ params }: VenuePageProps) {
  const { vid } = await params;
  const venue = venueDetails.get(vid);

  if (!venue) {
    return <main className={styles.page}><h1>Venue not found</h1><Link href="/venue">Back to venues</Link></main>;
  }

  return (
    <main className={styles.page}>
      <Link href="/venue" className={styles.backLink}>← Back to venues</Link>
      <article className={styles.detail}>
        <img src={venue.image} alt={venue.name} />
        <div className={styles.text}>
          <p>{venue.location}</p>
          <h1>{venue.name}</h1>
        </div>
      </article>
    </main>
  );
}
