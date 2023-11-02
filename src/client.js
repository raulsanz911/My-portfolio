import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "or8n4wwo",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skA7q15VuD7637ICv6ecsb6wHIUuizJxeVKcEsf2TH9ruO4zINFroxw35EbZa7viH41fTm9eQkQXaIw7KWVEGMdv4WvXg0ITCvliNa71so4tWldReXQOxygMwWclDKRmcWsreKFJiizH8WYHOM7KvNkvzeB72EQxmCu2q9eTRT3PcpxhYUO3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
