import Script from 'next/script'

const GoogleAnalytics = () => {
    const GA_MEASUREMENT_ID = 'G-908EHDWJPJ'

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: 'Daniyal Sohail Portfolio',
            page_location: window.location.href,
            send_page_view: true
          });
        `}
            </Script>
        </>
    )
}

export default GoogleAnalytics 