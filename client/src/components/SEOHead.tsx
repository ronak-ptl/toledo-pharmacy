import { useEffect } from "react";

const SITE_NAME = "Toledo Pharmacy";
const SITE_URL = "https://www.toledopharmacy.com";
const DEFAULT_OG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/hero-pharmacy-NNBzxgMYoJH5SHhL8ZDxic.webp";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

function setMeta(name: string, content: string, attribute = "name") {
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(data: Record<string, unknown>) {
  let el = document.querySelector('script[data-seo-jsonld]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo-jsonld", "");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({ title, description, path, ogImage, ogType = "website", jsonLd }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = path === "/" ? `${title} | ${SITE_NAME}` : `${title} - ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    setMeta("description", description);
    setLink("canonical", url);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", image, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_US", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    if (jsonLd) {
      setJsonLd(jsonLd);
    }

    return () => {
      const jsonLdEl = document.querySelector('script[data-seo-jsonld]');
      if (jsonLdEl) jsonLdEl.remove();
    };
  }, [title, description, path, ogImage, ogType, jsonLd]);

  return null;
}
