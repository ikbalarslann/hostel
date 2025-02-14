"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import MapPage from "@/components/map";
import Template from "@/components/contact/template";
import PageTemplate from "@/components/page.template";

const ContactPage = () => {
  return (
    <main>
      <PageTemplate title="Contact Us" />
      <div className="flex">
        <div className="w-[70vw] h-[50vh] bg-black hidden md:block">
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <MapPage className="h-[80vh] max-w-screen " />
            </APIProvider>
          )}
        </div>
        <div className="flex-1">
          <Template
            header="ENQUIRIES"
            mail="info@yolohostel.com"
            phone="+90 538 561 93 58"
          />
          <Template
            header="RESERVATIONS"
            mail="bookings@yolohostel.com"
            phone="+90 538 561 93 58"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
