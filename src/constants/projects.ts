interface Tags {
    members: string[];
    mentor: string[];
    concepts: string[];
}

interface Project {
    title: string;
    research_title: string;
    category: string;
    group: string;
    groupid: string;
    description: string;
    avp: string;
    tags?: Tags;
}

/* TODO: fill avp link */
export const projects: Record<string, Project> = {
    "agila": {
        title: "AGILA",
        category: "data_analytics",
        research_title: "Agila: Employing Knowledge-Based Recommendations in Crime Mapping for Manila City using ARIMA Forecasting Algorithm",
        group: "Agatha",
        groupid: "agatha",
        description: "Agila addresses the critical challenge of crime data analysis and visualization for law enforcement in Mania, offering a user-friendly crime heat map with precise geographical insights to enhance a comprehensive understanding of crime distribution. he system employs ARIMA algorithms to forecast future crime hotspots, enabling proactive crime prevention. The research leverages criminal information datasets from the DIDM to inform action plans. Data optimization focuses on categorization, danger level, and labor division. The system architecture involves cleaning and preprocessing data, storing it in a structured database, and using JavaScript API and Google Maps for dynamic heatmap visualization. ARIMA is integrated for crime forecasting. The web-based application supports various operating systems and devices for broad accessibility. Initial user feedback highlights the system's positive impact on user performance and productivity in crime mapping and safety assessment tasks, underscoring its potential to significantly enhance community safety efforts.",
        avp: "",
        tags: {
            members: ["Pacheco, Samuel Jacob", "Perez, Cyra Shane", "Signo, John Benedict", "Wong, Ella Belle"],
            mentor: ["DIT. Angelo C. Arguson"],
            concepts: ["Crime Forecasting", "ARIMA Model", "Knowledge-Based Recommendations"]
        }
       
    },
    "meowtion": {
        title: "MEOWTION CAPTURE",
        category: "computer_vision",
        research_title: "Meowtion Capture: Behavioral Analysis for Felines Using Video Processing",
        group: "Algoriteam",
        groupid: "algoriteam",
        description: "The rising trend of cat ownership in the Philippines highlights the urgent need for effective pet monitoring solutions. Traditional methods, such as CCTV cameras, often fall short, as they require time-consuming manual observation and fail to provide detailed behavioral insights, particularly regarding separation anxiety and overall well-being. The mobile application \"Meowtion Capture\" has been developed to offer cat owners real-time, detailed reports on five specific behaviors: sitting, standing, lying down, vomiting, and eating. Additionally, it provides first-aid instructions when abnormal behaviors are detected, ensuring timely interventions.The application employs Convolutional Neural Networks (CNN) and You Only Look Once (YOLO) for real-time video processing and behavior analysis, significantly enhancing the accuracy of existing monitoring solutions. The YOLOv8 model was trained and tested, and the application's performance was assessed through a comprehensive survey conducted with 37 participants, including 30 pet owners, 3 veterinarians, and 4 CS/ITprofessionals. Adhering to ISO 25010 standards, the mobile application achieved an overall average score of 3.82 out of 4.00 across all categories assessed by the developers. This rating indicates that the participants strongly agree with the application's effectiveness. Future research should focus on optimizingperformance, reliability, and user experience in feline behavioral analysis. Additionally, it is recommended that investigations explore advanced algorithms, robust error handling, intuitive backup solutions, and the integration of AI-driven features, while also expanding compatibility across platforms and considering applications for other animals and health monitoring.",
        avp: "",
        tags: {
            members: ["Cudiamat, Angeline C.", "Dolot, Daf C.", "Rasonanble, Ana Mary Colin"],
            mentor: ["Abraham T. Magpantay"],
            concepts: ["A.I.", "CNN", "YOLO", "Remote Pet Monitoring"],
        }
    },
    "mlfds": {
        title: "MLFDS",
        category: "nlp",
        research_title: "Multi-Layered Fraud Detection System Using Logistic Regression, Random Forests Algorithm, and Naive Bayes Algorithm",
        group: "Chilimansi",
        groupid: "chilimansi",
        description: "The Multi-Layered Fraud Detection System (MLFDS) is a comprehensive approach tocombating fraud, utilizing a combination of machine learning and natural language processing techniques. It has been validated by cybersecurity professionals who commended its potential realworld impact and high accuracy. The MLFDS effectively addresses the challenges of fraud detection, offering a promising solution for businesses across industries. While the system has shown great promise, recommendations for further improvement include model optimization,enhanced alerting mechanisms, real-timemonitoring, additional data validation, and implementation of robust data privacy measures.By incorporating these recommendations, the MLFDS can be further strengthened and its realworld impact maximized, providing businesses with a powerful tool to proactively identify and mitigate fraudulent activity.",
        avp: "",
        tags: {
            members: ["Atkinson, Andrei V.", "Gaaloul, Amir S.", "Mulsid, Elizabeth Louise I.", "Valenciado, Jeremiah", "Vasquez, Aaron John S."],
            mentor: ["Abraham T. Magpantay"],
            concepts: ["Fraud Detection", "MLFDS", "Machine Learning", "Cybersecurity", "privacy"],
        }
    },
    "fit-vision": {
        title: "FIT VISION",
        category: "computer_vision",
        research_title: "FitVision: Dumbbell Exercise Posture Assistant Using Convolutional Neural Network",
        group: "Code",
        groupid: "code",
        description: "Poor posture and incorrect exercise tempo pose significant dangers, especially for those engaging in fitness activities, leading to injuries, reduced performance, and prolonged recovery times.Many current exercise tracking devices are imprecise and offer incomplete feedback. This study introduces FitVision, asophisticated posture and tempo detection system that leverages TensorFlow and CameraX technologies. FitVision aims to address the limitations of existing monitoring technologies by enhancing exercise accuracy and providing real-time feedback. Theresearchers anticipate that FitVision will enable users to exercise more safely and effectively, improving their fitness levels and reducing injury risks. This paper highlights the development, implementation, and potential impact of FitVision, emphasizing its importance in advancing exercise monitoring techniques. The Dumbbell Romanian Deadlift reached an accuracy of 76.67%, with a precision of 80.95%, a recall rate of 85%, and an F1-score of 82.93%. The Dumbbell Goblet Squat performed exceptionally, achieving 96.67% accuracy, 95.24% precision, a recall of 100%, and an F1-score of 97.56%. Similarly, the Dumbbell Front Raise delivered solid results with an accuracy of 83.33%, a precision of 94.12%, a recall of 80%, and an F1-score of 86.49%. In contrast, the Dumbbell Lateral Raise recorded lower results, showing 73.33% accuracy, 92.86% precision, no recall, and an F1-score of 76.47%. Lastly, the Dumbbell Hammer Curl had a 70% accuracy, 86.67% precision, 65% recall, and an F1-score of 74.29%,highlighting areas where improvements are needed.",
        avp: "",
        tags: {
            members: ["Del Rosario, Rhiel John T.", "Buenaobra, Kyla Beatrice R.", "Dela Cruz, Luis Miguel C.", "Vecine, Dickson R."],
            mentor: ["Reginald Cheng"],
            concepts: ["Neural Networks", "Convolutional networks"],
        }
    },
    "carident": {
        title: "CARIDENT AI MEDIX",
        category: "health",
        research_title: "Carident AI Medix: A Convolutional Neural Network for Precise Identification of Dental Caries",
        group: "Code Geass",
        groupid: "codegeass",
        description: "This study presents the development and evaluation of CariDent AI Medix, a convolutional neural network (CNN) designed as a preliminary diagnostic tool for identifying dental caries. Utilizing the YOLOv8 architecture, the system enhances early-stage caries detection. The research is applied, descriptive, and prescriptive, focusing on practical solutions, detailing system characteristics, and providing treatment recommendations based on caries severity. The Scrum methodology was used for iterative development. A robust dataset of 1,420 dental images, labeled with 14,565 annotations across four classes, was used to train the CNN. The evaluation involved 44 computer science students, 3 dental professionals, 7 IT experts, and 2 CS professors. The Technology Acceptance Model (TAM) assessed user acceptance, while Subject Matter Expert (SME) feedback validated caries classification. IT experts and CS professors evaluated the system using ISO-25010 standards for functionality and performance. Findings demonstrate that CariDent AI Medix effectively identifies dental caries with high accuracy, achieving an Area Under the Curve (AUC) of 0.969 for healthy cases, 0.960 for initial caries, 0.953 for moderate caries, and 0.954 for extensive caries. The overall mean Average Precision for all classes combined (mAP@0.5) was 0.959. Evaluation by various respondents revealed high positive reception, with the application’s perceived usefulness rated at 4.61 and ease of use at 4.72 by students, on a 5- point Likert scale. Experts commended its functional stability (4.00), performance efficiency (4.15), and usability (4.74). The highest rating across all evaluations was for the user interface's intuitiveness and ease of navigation (4.89), while the lowest rating was for the strength of data encryption for transmitting and storing images (3.89). The overall consensus indicates strong functionality, user-friendliness, and clinical relevance, suggesting its potential for widespread adoption and positive impact in dental health management.",
        avp: "https://www.youtube.com/embed/jQNEiHzIcX4?si=z_OGbedZhXvKgCNR",
        tags: {
            members: ["Ordonez, Kendric", "Babasa, Victoria Faye", "Camasura, Jasmine", "Manarang, Geryko"],
            mentor: ["Dr. Hadji Tejuco"],
            concepts: ["Dental Caries","A.I.", "Computer Vision", "Object Detection"]
        }
    },
    "tala": {
        title: "Tala",
        category: "nlp",
        research_title: "Tala: An Ai-Powered Calendar With OpenAI Using Natural Language Processing and Reinforced Learning",
        group: "Codex",
        groupid: "codex",
        description: "The integration of AI technologies into everyday applications is revolutionizing time management for students by enhancing efficiency and productivity. This study focuses on thedevelopment and evaluation of Tala, an AI-powered calendar designed to address the common scheduling challenges faced by students. Utilizing a mixed-methods approach, this research uses quantitative surveys like Likert scale assessments with feedback from key stakeholders, including College Students from FEU Tech and CS Professionals. The research adheres to the ISO 25010 Standard criteria to evaluate user satisfaction, functionality, and usability.Results from the survey indicate that Tala significantly reduces problems encountered by students with time management like lack of motivation, distractions, and inconsistency and increases productivity, receiving positive feedback for its intuitive interface and intelligent features. The study underscores the potential of AIdriven tools to revolutionize traditional scheduling methods, offering insights into their implementation and futureenhancements. This paper aims to contribute to the broader discourse on AI applications in educational settings,demonstrating how advanced technology can meet diversestakeholder needs and improve overall time management practices for students.",
        avp: "",
        tags: {
            members: ["Pineda, Joshua Renniel A.", "Abiog, Gabriel P.", "Aguillon, John Rey Luis", "Ebina, Reuben Joseph H."],
            mentor: ["May Florence D. San Pablo"],
            concepts: ["A.I.", "Natural Language Processing", "Machine Learning", "Reinforced Learning"],
        }
    },
    "csgo": {
        title: "CSGO System",
        category: "computer_vision",
        research_title: "A Software Solution For The Foundation Of Congestion Pricing Through License Plate Recognition With Image Adaptive Processing",
        group: "Computer Science Global Offensive",
        groupid: "csgo",
        description: "This thesis presents an automatedcongestion pricing system tested on major highways in Manila, utilizing image processing, YOLO object detection, and Claude 3.5 Sonnet for license plate extraction. The system supports Congestion Pricing Policy by detecting vehicles via CCTV, classifying them, and charging based on user-defined rates when they enter congested zones. It also adapts to lowlight and foggy conditions using anImage-Adaptive framework, achieving an mAP of 90.03%. YOLOv8n was selected for its efficiency, with an mAP of 81.80% at 50% IOU and a 66% F1 score at 35.6% confidence. Testing results showed an average accuracy of 75.34%, with strong user and expert evaluations.",
        avp: "",
        tags: {
            members: ["Mendoza, Alexander D.","Pagtalunan, John Gabriel T.","RayRay, Kassandra Beatriz B.","Roa, Adriane Gil S.",],
            mentor: ["Elisa V. Malasaga"],
            concepts: ["Congestion Pricing", "YoloV8", "Image Processing", "OCR", "Traffic Management"],
        }
    },
    "mimical": {
        title: "Mimical",
        category: "nlp",
        research_title: "Implementing Machine Learning to Detect and Classify Computer Modified Voice Audio",
        group: "CtrlAltDelete",
        groupid: "ctrlaltdelete",
        description: "The advent of improved machine learning algorithms, andspecialized deep learning hardware and neural networks have significantly enhanced computer-generated content including Voice Synthesis(VS) and Voice Modification(VM). Thesetechniques have grown in sophistication and ubiquity over the last few years. Some computer generated voices are so sophisticated that they are almost indistinguishable from a human voice if one isn’t paying attention. To combat the growing risk posed by such techniques growing unchecked, this study aims to solve the problem of voice modification detection. This study determines the best method to determine audio traits using machine learning and deep learning algorithms. These algorithms are thencompared to determine which algorithm is the most capable and efficient in the job of defining and classifying the authenticity of voice audio. Using the most optimal algorithm, the researchers achieved an overall accuracy rating of 86.40%, a precision rating of 86.21%, a recall rate of 90.07%, and an overall F1 score of 88.10%. Finally, the researchers implemented the algorithm into a system for public use.",
        avp: "",
        tags: {
            members: ["Atun, Emmanuel", "Bada, Christian", "Thomas, Manuel"],
            mentor: [],
            concepts: ["Anomaly Detection", "Neural Networks", "Biometrics"],
        }
    },
    "ensys-chat": {
        title: "Ensys Chat",
        category: "nlp",
        research_title: "Enhancing Ai Chatbot For A Human-like Conversation Through Natural Language Processing In Food Services",
        group: "Ensys",
        groupid: "ensys",
        description: "This study delves into the development of an empathic AI chatbot named \"EnSys\" for the customer service sector, focusing on applications within the food and service industry. The primary reason for conducting this is to address the limitations of existing chatbots in engaging empathetically with users, thereby enhancing customer satisfaction and operational efficiency. The keyproblems this work attempts to solve include delayed response times to customer complaints, limited documentation of feedback, insufficient follow-up mechanisms and other customer service challenges tackled in the study. In addressing these issues, the study leverages the latest technologies such as natural language processing (NLP), sentiment analysis, and empathic computing, with the assistance of OpenAI. Key components include linguistic processing techniques, sentiment assessment, and empathic design principles, empowering the chatbot to understand and respond effectively to human emotions. The methodologies employedencompass alpha testing, black box testing and performance evaluation based on ISO 25010 standards. The results show that the model achieved high accuracy and performance metricsthrough an F1 score of 80.09%, reflecting its effectiveness in understanding and responding to customer emotions. Additionally, post-survey results indicated high user ratings for functionality (4.70), usability (4.74), performance (4.81), and supportability (4.72). Ultimately, the integration of empathic AI chatbots in the food services industry offers a viable solution to current feedback management challenges, providing businesses with a competitive edge through improved customer interactions and operational effectiveness. This research underscores the potential of AI-driven customer service in fostering more empathetic and efficient engagements.",
        avp: "",
        tags: {
            members: ["Galura, Ywan Scazi D.C.", "Lobaton, Reannah Ruth G.", "Monje, Marie Kristela Frances", "Ruado, Caila Jenine O."],
            mentor: ["Reginald S. Cheng"],
            concepts: ["A.I.", "Empathic Computing", "Chatbot", "Sentiment Analysis", "Natural Language Processing", "Customer Service"],
        }
    },
    "smarteyes": {
        title: "SmartEyes",
        category: "computer_vision",
        research_title: "Human Detection For Automated Video Tagging Through The Use Of Image Recognition",
        group: "GIGGA",
        groupid: "gigga",
        description: "The emergence of automated surveillance technology is reshaping security systems, leveraging advanced object detection techniques such as YOLOv8n models and color detection algorithms. This study introduces a novel approach aimed at enhancing theefficiency of CCTV footage analysis by focusing on detecting humans based on specific clothing colors. Evaluation metrics including Accuracy (71.57%), Precision (94.20%), Recall(72.77%), and F1 Score (81.76%) demonstrate the system's robust performance. Rated against ISO standards of FunctionalSuitability, Performance Efficiency, and Interaction Capability, the system garnered a weighted mean score of 4.49 from ITprofessionals, with stakeholders such as CS students, security personnel, and private/commercial owners giving it a higher rating of 4.54. This indicates promising potential for automating human detection and logging in surveillance systems, offering significant advancements in security monitoring capabilities.",
        avp: "",
        tags: {
            members: ["Menguito, Jericho L.", "Longcop, Eddie F.", "Lantajo Jr., Gregorio B."],
            mentor: ["Abraham T. Magpantay"],
            concepts: ["A.I.", "Object Detection", "Compution Vision Problems", "Object Identification"],
        }
    },
    "elixir": {
        title: "Elixir",
        category: "computer_vision",
        research_title: "Elixir: A Personalized Color Palette Analyzer using Image Processing",
        group: "HUI",
        groupid: "hui",
        description: "In the dynamic world of fashion, “Elixir” emerges as agroundbreaking solution aimed at addressing the challenges of decision fatigue and the lack of personalized guidance in consumer choices. This innovative tool leverages advanced image processing and color pattern analysis to provide tailored recommendations across clothing, makeup, and hair, with an emphasis on personalized color palette analysis. By aligning suggestions with individual undertones and diverse skin tones, “Elixir” redefines the fashion experience, empowering users to make confident decisions in color coordination. One of its standout features is the utilization of virtual try-ons for hair, makeup, and clothing, allowing users to visualize how different styles and colors will appear on them before committing. This not only enhances the shopping experience but also helps users make informed decisions based on their unique characteristics.The platform also addresses key inclusivity factors like color blindness, which is often overlooked in traditional fashion advice, ensuring accessibility to a broader audience. While the research behind “Elixir” acknowledges certain limitations—such asgeographical and cultural differences that may affect fashion trends and preferences, as well as technical constraints of the application—its contributions to the field are significant. By seamlessly combining aesthetics with practicality, “Elixir” offers a more inclusive, user-friendly, and confidence-boosting fashion experience. It reshapes the fashion landscape by empowering individuals to explore their unique styles with personalized, accessible recommendations tailored to their preferences and diverse needs, while considering factors like cultural diversity and accessibility.",
        avp: "",
        tags: {
            members: ["Bajaro, Clarissa M.", "Rosendo, Janna Rane C.", "Vicio, Shahani Fe D."],
            mentor: ["Justine Jude Pura"],
            concepts: ["Image Processing", "Facial Segmentation", "Computer Vision", "Object Detection"],
        }
    },
    "onics": {
        title: "Onics",
        category: "health",
        research_title: "Optimizing Nutritional Intake For College Students: A Decision-based Algorithm Approach To Dish Recommendations",
        group: "Hurtz",
        groupid: "hurtz",
        description: "In this study, we developed ONICS, a mobile application that aims to optimize the nutritional intake of college students through personalized meal recommendations. The application uses a decision tree algorithm to provide tailored dietary suggestions based on user-specific data, including sex, age, weight, height, activity level, health goals, and dietary preferences. ONICS addresses the prevalent issue of poor dietary habits among college students, which can negatively impact their well-being and academic performance. By combining user inputs with machine learning predictions, the system calculates Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) to generate meal recommendations that align with individual health goals, such as weight management. The algorithm considers various dietary restrictions, such as vegetarianism or food allergies, to deliver safe and relevant meal options. Through the use of ISO-25010 standards, the system's effectiveness, usability, and security were evaluated. This paper details the design,implementation, and evaluation of ONICS, emphasizing itspotential to enhance college students' nutritional intake and improve overall health outcomes. The results from initial testing indicate a significant improvement in user engagement with healthier food choices, making ONICS a promising tool for personalized nutrition in the academic setting.",
        avp: "",
        tags: {
            members: ["Bulot, Justin Matthew C.", "Raymundo, Glen Daniell F.", "Rosal, Zuphia M.", "Serrano, Albert Kobe C."],
            mentor: ["Dr. Hadji Tejuco"],
            concepts: ["Machine Learning", "Machine Learning Approaches", "Classification and Regression Trees"],
        }
    },
    "intelliwatch": {
        title: "Intelliwatch",
        category: "computer_vision",
        research_title: "IntelliWatch: Advanced Fall Detection and Analysis System with Pose Estimation for Realtime Alerts",
        group: "Intelliwatch",
        groupid: "intelliwatch",
        description: "The IntelliWatch system, designed for advanced fall detection and analysis, significantly improves the safety and well-being of elderly individuals by integrating computer vision and machine learning technologies. Using the YOLOv8s-pose model,IntelliWatch achieves exceptional performance with a sensitivity of 97.5%, specificity of 95.83%, and an overall accuracy of 96.88%. The system’s ability to detect falls in real-time and its seamless integration with existing CCTV systems enhance its practical utility. User evaluations, based on the ISO 25010 quality model, indicate high marks for security, performance efficiency, and usability. Additionally, expert validation of fall analysis through the Gemini API shows an impressive overall accuracy of 90.42%. To further enhance IntelliWatch, future research should focus on improving multi-person detection, integrating advanced human tracking, utilizing smart CCTV alert systems, exploring wearable technology, and enhancing DVR box compatibility.These advancements will bolster IntelliWatch’s effectiveness and broaden its application in elderly care.",
        avp: "",
        tags: {
            members: ["Escario, Earl Rodney N.", "Francisco, Juan Carlos S.", "Simbulan, Ian Angelo M.", "Supleo, Cyfer Nikolai"],
            mentor: ["Abraham T. Magpantay"],
            concepts: ["A.I.", "Computer Vision", "Fall Detection", "Pose Estimation", "Real-time Alerts"],
        }
    },
    "book-i": {
        title: "Book-I",
        category: "nlp",
        research_title: "Book-i: An Automated Booking System With Artificial Intelligence Integration And Future Appointment Predictions",
        group: "Jathro's Matrix",
        groupid: "jathros",
        description: "In today's rapidly evolving business landscape, effective appointment and reservation management is essential foroperational efficiency and customer satisfaction. This study introduces Book-I, an advanced automated online booking system available as both a mobile and web application designed to enhance scheduling processes for diverse industries by leveraging artificial intelligence (AI). Book-I replaces traditional manual booking methods, addressing common issues such as scheduling conflicts and inefficiencies, and offers personalized appointment dates recommendations based on users' past interactions. The system also features a chatbot powered by Natural Language Processing (NLP) to facilitate seamless and intuitive appointment bookings.The research involved feedback from 40 respondents, including dental clinic owners, hair salon and barbershop owners, business administrators, receptionists, general users, and IT experts. Their insights were instrumental in shaping the system's development to meet industry-specific needs and improve overall user experience.The evaluation of Book-I through the FURPS (Functionality, Usability, Reliability, Performance, and Security) framework yielded an overall average score of 4.32 (Strongly Agree) from business owners, administrators, receptionists, and IT experts regarding the web application. Meanwhile, the mobile application received an average score of 4.17 (Agree) from general users and IT experts.Book-I represents a significant advancement in automatedscheduling solutions, offering a powerful tool for SMEs across various sectors. By integrating advanced AI features and focusing on user-centric design, Book-I aims to streamline appointment management, reduce scheduling time, and provide a highlyadaptive and efficient solution for modern businesses.",
        avp: "",
        tags: {
            members: ["Roxas, Jethro Emmanuel C.", "Jestingor, Near Tracy D.", "Jimeno, Eymard Julian S.", "Nadonga, Henrick Brian M."],
            mentor: ["Hadji J. Tejuco"],
            concepts: ["A.I", "Algorithm", "Natural Language Processing", "Machine Learning"],
        }
    },
    "marikit": {
        title: "Marikit",
        research_title: "Enhancing Makeup Recommendations through Face Segmentation and Undertone Analysis using U-Net and Color Analysis",
        category: "computer_vision",
        group: "JLNN",
        groupid: "jlnn",
        description: "This paper aims at enhancing makeup recommendations byintegrating face segmentation and undertone analysis algorithms.Using the U-Net architecture for face segmentation, facial features are extracted to determine the user’s skin tone accurately. The Monk Skin Tone Scale is then used to classify the skin tone. The algorithms are integrated into a mobile application, enabling realtime virtual try-on of the makeup recommendations. Useracceptability was evaluated via questionnaires aligned with the ISO-25010 quality in use model by thirty (30) third-year students from FEU Tech, fifteen (15) makeup artists, and five (5) IT/CS professionals, ensuring comprehensive feedback from diverse perspectives. The system targets beginner makeup enthusiasts, primarily utilizing cosmetic products from local brands. The theoretical framework include the U-Net architecture for face segmentation, CIELAB color space for undertone analysis, and the Monk skin tone scale for skin tone classification. Results demonstrate the effectiveness of the face segmentation model achieving a mean F1 score of 0.9191 and a Jaccard index of 0.8614, with promising performance in skin extraction and undertone analysis.",
        avp: "",
        tags: {
            members: ["Macaldo, Noah Paolo L.", "Feticio, Lance Benedict F.", "Potenciano, Noah Angelo M.", "Seno, Daniel Jude R."],
            mentor: ["Mr. Jennifer A. Sabonsolin"],
            concepts: ["Makeup", "U-Net Architecture", "Color Analysis", "Face Segmentation", "Skin Tone"],
        }
    },
    "lambda": {
        title: "Lambda",
        category: "computer_vision",
        research_title: "Face Detection And Recognition With Behavioral Analysis",
        group: "Lambda",
        groupid: "lambda",
        description: "Recent advancements in face recognition technology have significantly enhanced security systems worldwide,transitioning from theoretical concepts to practical applications across various sectors. The integration of behavioral analysis with face recognition further bolsters security by interpreting human conduct patterns, offering a multi-dimensional approach to threat detection. This study develops and evaluates a face detection and recognition door lock system incorporating behavioral analysis.The system's performance metrics indicate high accuracy and reliability. Precision for detecting punching is approximately 97.9%, kicking is 95%, and no activity is 99%. Recall rates are 98.8% for punching, 95.6% for kicking, and 98.7% for no activity. The F1 scores are 98.3% for punching, 95.3% for kicking, and 98.9% for no activity. In terms of subject identification, precision for Subject1 is 96.6%, Subject2 is 94.1%, and unknown subjects is 95.4%. Recall rates for these subjects are 96.2%, 98.3%, and 97.1%, respectively. The F1 scores are 96.5% for Subject1, 96.1% for kicking, and 96.4% for no activity.These results demonstrate the system's robust capability to accurately identify individuals and analyze their behavior, providing a comprehensive security solution suitable for environments with high-security demands.",
        avp: "",
        tags: {
            members: ["Borja, Christian Jay G.", "John Alvin R. Cruz", "Kingra, Ramandeep S."],
            mentor: ["Jennifer A. Sabonsolin"],
            concepts: ["Face Detection", "Face Recogniton", "Door Lock System", "Deep Learning", "Pose Estimation"],
        }
    },
    "smart-tasks": {
        title: "SmartTasks",
        category: "nlp",
        research_title: "Ai-integrated Gmail Assistant Add-on: Task Extraction And Classification Via Natural Language Processing Techniques And Naive Bayes Algorithm",
        group: "LMDIFY",
        groupid: "lmdify",
        description: "The increasing volume of emails has created significant challenges in task organization and time management. This study aimed to address these issues by developing an AI-integrated Gmail Assistant Add-on using NaturalLanguage Processing (NLP) techniques and the NaiveBayes algorithm. The primary objective was to automate the extraction and classification of tasks based on urgency, thereby enhancing productivity and reducing the manual effort involved in email management. The system was evaluated using purposive sampling with 61 respondents, including students and professionals, ensuring a diverse perspective. The system underwent rigorous testing, achieving high performance metrics: the task prediction model reached an accuracy of 94.68%, a precision of 99.2%, a recall rate of 91.8% and an F1 score of 95.3%.The urgency prediction model achieved an accuracy of 86.80%, a precision of 86.85%, a recall rate of 86.80%, and an F1 score of 86.79%. Additionally, the system scored 4.76 in black box testing and 4.71 in white box testing, both based on a ISO 25010 standards survey. These results confirm the system's reliability and effectiveness in email management. Despite minor limitations related tosubjective assessments of task importance, theAI-integrated assistant demonstrated substantial potential for improving email management practices. This study contributes to the field of AI by providing a robust tool for enhancing productivity and task management in digital correspondence. The successful implementation andvalidation of this system suggest significant implications for enhancing user productivity and efficiency in handling email communications.",
        avp: "",
        tags: {
            members: ["Ancieto, Laurenz Lhynt A.", "Gueverra, Isaiah Ezekiel E.", "Molina, Arjen Catherine P.", "Santiago, Carl I."],
            mentor: ["Reginad S. Cheng"],
            concepts: ["A.I Integrated Gmail Assistant", "Natural Language Processing", "Naive Byes Algorithm", "Productivity"],
        }
    },
    "visual-sql": {
        title: "VisualSQL",
        category: "data_analytics",
        research_title: "Visualsql: Visual Programming In Learning Structured Query Language Using Rule- Based Expert System For Detecting Pessimistic Behavior",
        group: "LMNTRX",
        groupid: "lmntrx",
        description: "This paper presents the development and evaluation of VisualSQL, an Intelligent Tutoring System (ITS) aimed at improving SQL learning through the detection of pessimistic behavior in students. VisualSQL integrates Convolutional Neural Networks (CNNs) for facial expression analysis and a Rule-Based Expert System to provide personalized feedback and assessments. The study employed a descriptive-developmental methodology and followed an iterative Scrum process. The system achieved a 92% detection accuracy, demonstrating its effectiveness in enhancing student engagement and learning outcomes. A dataset of 10,000 facial expression images with 70,000 annotations (7 per image) was used to train the CNN model. Evaluation involved 37 students, 1 psychologist, and 4 IT experts. The Technology Acceptance Model (TAM) was utilized for user acceptance, while expert evaluation, based on ISO-25010 standards, confirmed the system's functional stability, performance efficiency, and usability. Visual SQL’s mean Average Precision (mAP@0.5) across all classes was 0.945. User feedback indicated high perceived usefulness (4.52/5) and ease of use (4.72/5), with experts rating the user interface highly for intuitiveness (4.89/5). The system’s weakest aspect was data encryption strength, rated at 3.89/5.",
        avp: "",
        tags: {
            members: ["Dimla, Audi Enrico L.", "Limpin, Janry Enrique O,", "Majarais, David Roy G,", "Miraflor, Ruzzel Mary T.", "Radam, Moira Gabrielle L."],
            mentor: ["Reginal S. Cheng"],
            concepts: ["Intelligent Tutoring System", "SQL Learning", "Pessimistic Behavior Detection", "Convolutional Neural Networks"],
        }
    },
    "etbx": {
        title: "ETBX: Express Tuberculosis Buster",
        category: "health",
        research_title: "ETBx: Express Tuberculosis Buster - An Automated Tuberculosis Screening Software using Convolutional Neural Network",
        group: "Lorem Ipsum",
        groupid: "loremIpsum",
        description: "Tuberculosis (TB) is an infectious lung disease brough about by bacterial infection and is a major cause of death worldwide. Early and accurate screening is essential so it can be treated. To address this problem, the researchers developed an application that detects the presence of TB in Chest X-rays (CXR) images through image pre-processing, data augmentation, image segmentation and deep learning based classification. Online datasets were utilized to train the segmentation and classification model; A total of 704 CXR images were employed to train the U-Net segmentation model and a total of 1148 images were used to train the EfficientNetB3 classifier model. Experiment results have shown that the proposed U-Net model has achieved a recall, F1-score, AUC, accuracy, and precision of 95.04%, 96.17%, 97.07%, 98.07%, and 97.33%respectively. For the EfficientNetB3 model, values of 83%, 83%, 91.68%, 83.33%, and 83% were obtained for recall, F1-score, AUC, accuracy, and precision respectively. The imposition of heatmap over the CXR images through Grad-CAM (Gradient-weighted Class Activation Mapping) has shown insights into the classification model's prediction. The performance of the system was also tested against a radiologist to gauge the degree of agreement using Cohen's Kappa. Using 50 random images from the test dataset, Kappa values of 0.56 and 0.64 between the radiologist and the system at classification threshold levels of 0.4 and 0.6, respectively. The research findings show the screening system’s capability of detecting TB in CXR images as well as itsapplicability in the clinical setting.",
        avp: "",
        tags: {
            members: ["Gernale, Paul Adrian T.", "Gruspe, Seth G.", "Rodriguez, Jasper David A.", "Salvatierra, Venz Rebber A."],
            mentor: ["Mr. Anthony D. Aquino"],
            concepts: ["Tuberculosis", "Segmentation", "Heatmap", "Chest X-Ray", "CNN"],
        }
    },
    "pnp": {
        title: "Puno Ng Pagmamahal",
        category: "computer_vision",
        research_title: "Integrating Machine Learning IntoDrone-Captured Data Analysis: Advancing Watershed Segmentation for End-State Deforestation and Soil Erosion Monitoring",
        group: "PnP",
        groupid: "pnp",
        description: "The thesis titled \"Integrating Machine Learning into Drone-Captured Data Analysis: Advancing WatershedSegmentation for End-State Deforestation and Soil Erosion Monitoring\" focuses on refining the analysis ofdrone-captured data, particularly in identifying forested regions within watershed boundaries. It utilizes the OpenCV Python library for image processing and the YOLOV8machine learning algorithm for accurate forest segmentation.By leveraging these technologies, the research aims to optimize the utilization of drone-generated data, including both visual imagery and accompanying metadata, to enhance environmental monitoring efforts, specifically in combating deforestation and soil erosion in the Philippines.The study's methodology involves automating the process of watershed segmentation and forest identification, aiming to streamline the workflow of foresters and environmental conservationists. By reducing manual labor andtime-intensive tasks, while simultaneously improving the accuracy of results, this research contributes to more efficient and reliable environmental monitoring practices.Ultimately, the goal is to empower stakeholders with a robust framework for leveraging drone-based data analysis in their efforts to safeguard natural ecosystems and mitigate environmental degradation.",
        avp: "",
        tags: {
            members: ["Chuegan, Francis L.", "Cruz, Sean Archer O.", "Torres, Rylan Cedric E."],
            mentor: ["Abraham T. Magpantay"],
            concepts: ["Image Processing", "Machine Learning", "Forestry", "Drones", "UAVs", "YOLOv8", "Geometric Operation"],
        }
    },
    "ultrascan": {
        title: "UltraScan",
        category: "health",
        research_title: "Utilizing Deep Learning in Ultrasound Images for Fetal Biometry Measurement in Prenatal Assessment",
        group: "Samsan",
        groupid: "samsan",
        description: "In order to monitor risk factors prior to childbirth, Gestational Age monitoring is crucial in arranging accurate treatment for newborn infant problems. Medical professionals traditionally conduct fetal biometry manually, a process that is subjective and susceptible to inaccuracies. Furthermore, poor equipment calibration,inaccurately programmed ultrasound machine calculations, and consistent over or under measurement can all lead to systematic errors [1]. To address these challenges, proponents have developed a Desktop application harnessing image processing techniques and deep learning to assist medical professionals such as OB-Sonologist and other related professionals. The proponents utilized a LinkNet-based model for image segmentation. The systemleverages an extensive dataset of pre-processed ultrasound images from the HC18 Grand Challenge [2]. This aims to provide healthcare professionals a more efficient and consistent way of acquiring reliable measurements of fetal biometric parameters and monitor pregnancy progression. The findings of the study validate the effectiveness and potential of the developed application,positioning it as a promising solution that can contribute to the advancement of prenatal assessments. To fill the gaps further, the proponents recommend future improvements for the application include developing compatibility with other platforms, such as Linux and mobile. Expanding the dataset with more diverseultrasound images will also lead to more reliable results. Lastly, additional functionalities such as real-time fetal growth tracking and abnormality detection are recommended to make the system more comprehensive for prenatal care.In order to monitor risk factors prior to childbirth, Gestational Age monitoring is crucial in arranging accurate treatment for newborn infant problems. Medical professionals traditionally conduct fetal biometry manually, a process that is subjective and susceptible to inaccuracies. Furthermore, poor equipment calibration,inaccurately programmed ultrasound machine calculations, and consistent over or under measurement can all lead to systematic errors [1]. To address these challenges, proponents have developed a Desktop application harnessing image processing techniques and deep learning to assist medical professionals such as OB-Sonologist and other related professionals. The proponents utilized a LinkNet-based model for image segmentation. The systemleverages an extensive dataset of pre-processed ultrasound images from the HC18 Grand Challenge [2]. This aims to provide healthcare professionals a more efficient and consistent way of acquiring reliable measurements of fetal biometric parameters and monitor pregnancy progression. The findings of the study validate the effectiveness and potential of the developed application,positioning it as a promising solution that can contribute to the advancement of prenatal assessments. To fill the gaps further, the proponents recommend future improvements for the application include developing compatibility with other platforms, such as Linux and mobile. Expanding the dataset with more diverseultrasound images will also lead to more reliable results. Lastly, additional functionalities such as real-time fetal growth tracking and abnormality detection are recommended to make the system more comprehensive for prenatal care.",
        avp: "",
        tags: {
            members: ["Umali, Kayla Denise L.", "Facto, Jhon Carlo P.", "Tan, Eleazar"],
            mentor: ["Dr. Beau Gray M. Habal"],
            concepts: ["Algorithms", "Link Net", "Image Processing", "Fetal Ultrasound Image"],
        }
    },
    "smish-x": {
        title: "Smish X",
        category: "data_analytics",
        research_title: "A Comprehensive Phishing Detection System Using Machine Learning Algorithms",
        group: "Strawhats",
        groupid: "strawhats",
        description: "In 2023, SMS remains a dominant communication channel with 8.9 billion mobile phone subscriptions globally, and 85% of users prefer receiving text messages over emails or phone calls. This widespread use has increased the risk of smishing—phishing via SMS—where malicious URLs in messages direct users to sites designed to steal sensitive information. Filipinos, known for exchanging the highest volume of text messages globally, are especially targeted by smishing attacks, despite initiatives such as the Sim Registration Act. SmishX, an Android application, was developed to solve this problem by employing a machine learning algorithms to detect and block smishing URLs. The model utilizes feature extraction, Natural Language Processing (NLP), entropybased features, and a stacking classifier (Random Forest and XGBoost), combined with SMOTE for handling data imbalance, to achieve high detection accuracy. A survey based in ISO standards of Effectiveness, Performance, Usability, Reliability, and Security, SmishX collected a weighted mean score of 4.6 out of 5 from CS/IT professionals, faculty, and CS students. Based on the Evaluation metrics, the machine learning model used in SmishX achieved 99.29% recall, 99.49% precision, 99.48%specificity, 99.39% F1-score, and an overall accuracy of 99.38%.",
        avp: "",
        tags: {
            members: ["Machine Learning", "Ensemble Algorithms", "Phishing Detection", "Mobile Application"],
            mentor: ["Elisa V. Malasaga"],
            concepts: ["Machine Learning", "Ensemble Algorithm", "Phishing Detection", "Data Aggregation"],
        }
    },
    "theta": {
        title: "Theta",
        category: "computer_vision",
        research_title: "Design And Evaluation Of A Low-cost Security System Using An Orange Pi Zero 3 With Haar Cascade Classifier, Local Binary Pattern Histogram (Lbph), And Background Subtraction Method (Bsm) Algorithms For Intrusion Detection",
        group: "Theta",
        groupid: "theta",
        description: "The increasing need for robust and efficient security systems, this study addresses the development of a cost-effective intrusion detection system that leverages motion detection and facialrecognition technologies. The system is designed to enhance security by identifying potential intruders and promptly notifying users via email alerts on their mobile phones. Utilizing an Orange Pi Zero 3 microprocessor, the system aims to provide a reliable and scalable solution suitable for various environments such as homes,businesses, and educational institutions. The proposed security system integrates multiple advanced algorithms to ensure high accuracy and reliability. The Haar Cascade Classifier is used for face detection, Local Binary Pattern Histogram (LBPH) for facialrecognition, and Background Subtraction Method (BSM) for motion detection. These algorithms are implemented on the Orange Pi Zero 3 microprocessor, which serves as the core processing unit. The system includes a camera to capture real-time video feeds.Programming and algorithm integration are performed using the Orange Pi IDE. The system connects to the internet to send real-time alerts to the user’s registered email address upon detecting an intrusion. To enhance user interaction and control, a dedicated website was developed, allowing users to monitor, control, and access detailed information about the security system. The system's performance was thoroughly evaluated using various classification metrics, such as false positive rates, false negative rates, precision, and recall. The results demonstrated that the integration of Haar Cascade, LBPH, and BSM algorithms significantly improved the system's ability to accurately detect and identify intruders. Extensive testing showed a reduction in false alarms and an increase in detection accuracy. User feedback was collected to assess the website's usability and functionality, with responses indicating high satisfaction with the real-time control and monitoring capabilities provided by the system.",
        avp: "",
        tags: {
            members: ["Añonuevo, Carlo Jan Harry S.", "Difuntorum, Mar-con Prince Owen", "Cabontocan, Charles Adrian M."],
            mentor: ["Jennifer A Sabonsolin"],
            concepts: ["Intrusion Detection", "Orange Pi Zero 3", "Haar Cascade Classifier", "Motion Detection", "Real-Time Surveillance"],
        }
    },
}