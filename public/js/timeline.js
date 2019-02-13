let jsonTimeline = {
    title: {
        text: {
            headline: 'My education',
            text: 'Here\'s a timeline of my education and experience.'
        },
        media: {
            url: 'images/background.jpg'
        }
    },
    events: [
        {
            start_date: {
                year: 2010,
                month: 9
            },
            end_date: {
                year: 2013,
                month: 6
            },
            text: {
                headline: 'Gymnase de Burier',
                text: 'Gymnasial matura and baccalaureate. Obtained in 3 years at the '+
                        'Gymnase de Burier in La Tour-de-Peilz, Switzerland.'
            },
            media: {
                url: 'images/timeline/burier.png'
            },
            group: "Studies"
        },
        {
            start_date: {
                year: 2013,
                month: 9
            },
            end_date: {
                year: 2015,
                month: 6
            },
            text: {
                headline: 'Ecole des Métiers du Valais',
                text: 'Federal VET diploma in general information technology. '+
                    'Obtained in 2 years at the EMVS (now called EPTM) in Sion, Switzerland.'
            },
            media: {
                url: 'images/timeline/eptm.png'
            },
            group: "Studies"
        },
        {
            start_date: {
                year: 2014,
                month: 11
            },
            end_date: {
                year: 2015,
                month: 5
            },
            text: {
                headline: 'Caisse de Compensation du Valais',
                text: 'During my apprenticeship, I had a 6-month internship at the CCCVs in Sion, Switzerland. ' +
                    'I was in charge of the maintenance of their public website, and worked on the development of '+
                    'a POC for a new website and intranet using the CMS Liferay.'
            },
            media: {
                url: 'images/timeline/cccvs.png'
            },
            group: "Job"
        },
        {
            start_date: {
                year: 2015,
                month: 13
            },
            end_date: {
                year: 2020,
                month: 12
            },
            text: {
                headline: 'Webmaster at Viviskes',
                text: "Since 2015, I've been volunteering as webmaster for the historical reenactment "+
                    "organization Viviskes. I have been developing and maintaining their website and intranet."
            },
            media: {
                url: 'images/timeline/viviskes.png'
            },
            group: "Extracurricular"
        },
        {
            start_date: {
                year: 2015,
                month: 9
            },
            end_date: {
                year: 2019,
                month: 8
            },
            text: {
                headline: 'Haute Ecole d\'Ingénierie et de Gestion',
                text: 'My current curriculum in media engineering at the HES-SO School of Applied ' +
                    'Sciences in Yverdon-les-Bains, Switzerland. Diploma planned for june 2019.' +
                    'The studies include management, communication, marketing and web development.'
            },
            media: {
                url: 'images/timeline/heig.png'
            },
            group: "Studies"
        },
        {
            start_date: {
                year: 2017,
                month: 3
            },
            end_date: {
                year: 2017,
                month: 6
            },
            text: {
                headline: 'Teamwhere SA',
                text: 'Part-time job at Teamwhere SA in Lausanne, Switzerland. Web app development' +
                    'for management purposes, using IBM Notes.'
            },
            media: {
                url: 'images/timeline/teamwhere.png'
            },
            group: "Job"
        },
        {
            start_date: {
                year: 2018,
                month: 1
            },
            end_date: {
                year: 2018,
                month: 7
            },
            text: {
                headline: 'Upwelling',
                text: 'Part-time job as coordinator between the clients and the web developer, on ' +
                    'knowledge management projects such as digital libraries.'
            },
            media: {
                url: 'images/timeline/upwelling.png'
            },
            group: "Job"
        }
    ]
};

let options = {
    scale_factor: 1,
    timenav_position: "top"
};

let timeline = new TL.Timeline('timeline-embed', jsonTimeline, options);