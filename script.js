document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other accordions (optional, but good UX)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            }
        });
    // 4. Demo Excel Download Button
    const demoDlBtn = document.querySelector('.btn-demo-dl');
    if (demoDlBtn) {
        demoDlBtn.addEventListener('click', () => {
            const csvContent = "data:text/csv;charset=utf-8," 
                + "Date,Narration,Ref No,Debit (INR),Credit (INR),Balance (INR),GSTIN / GST Details\n"
                + "24/05/2026,IMPS-600213812-RAHUL SHARMA,600213812,,45000.00,142500.00,27AABCA5544R1ZS (18% GST)\n"
                + "25/05/2026,UPI-ZOMATO-PAYMENTS,UPI3002,650.00,,141850.00,07AAACZ9876P1Z4 (5% GST)\n"
                + "26/05/2026,NEFT-AWS CLOUD SERVICES,NF10928,4200.00,,137650.00,07AAACS1234F1Z (18% GST)\n"
                + "27/05/2026,POS-STARBUCKS-MUMBAI,POS821,840.00,,136810.00,27AACCK9988M1ZP (18% GST)\n"
                + "28/05/2026,RTGS-CLEARING-DIVIDEND,RTG4412,,12500.00,149310.00,24AAACR1234E1ZV (18% GST)\n"
                + "29/05/2026,UPI-UBER-TRIP,UPI9912,450.00,,148860.00,07AAACS1234F1Z (5% GST)\n"
                + "30/05/2026,BILLPAY-AIRTEL-BROADBAND,BP1029,1180.00,,147680.00,07AAACA8899K1Z2 (18% GST)\n"
                + "31/05/2026,INTEREST CREDITED,INT0526,,420.50,148100.50,N/A";
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Parsify_Demo_Statement.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

});

