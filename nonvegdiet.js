document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

let initialResponse = true;
let userAge = null;

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById("chat-box");

    // Add user's message to chat box
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Simulate bot response
    const typingContainer = document.createElement("div");
    typingContainer.className = "bot-message";
    typingContainer.innerHTML = '<div class="typing-indicator"></div><div class="typing-indicator"></div><div class="typing-indicator"></div>';
    chatBox.appendChild(typingContainer);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot typing
    setTimeout(() => {
        chatBox.removeChild(typingContainer);
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message visible";
        if (initialResponse) {
            botMessage.textContent = "🌿🙏 నమస్తే! నేను మీ కిడ్నీ ఆరోగ్య సహాయకుడు. మీ కిడ్నీలను ఆరోగ్యంగా ఉంచుకోవడానికి సరైన ఆహారం, జీవనశైలి మార్పులు, మరియు ముఖ్యమైన సూచనల గురించి తెలుగులో సహాయం అందిస్తాను. మీ పేరు చెప్పండి. ఏదైనా సందేహం ఉంటే, నన్ను అడగండి! 😊💙 ";
            initialResponse = false;
        } else if (userAge === null) {
            userAge = parseInt(userInput);
            botMessage.textContent = "ధన్యవాదాలు! నేను మీకు ఎలా సహాయం చేయగలను? 😊";
        } else {
            botMessage.textContent = getBotResponse(userInput);
        }
        chatBox.appendChild(botMessage);

        // Scroll to bottom again
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); 
    chatBox.appendChild(botMessage);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("కిడ్నీ ఆరోగ్యానికి ఆహారాలు")) {
        return "ఇక్కడ కిడ్నీ ఆరోగ్యానికి ఆహారాలు: చికెన్: అధిక నాణ్యత గల ప్రోటీన్. \nచేపలు: ఒమేగా-3 ఫ్యాటీ ఆమ్లాలతో సమృద్ధిగా. గుడ్డు తెల్లసొన: ప్రోటీన్ అధికంగా. సీ బాస్: ఒమేగా-3 లతో. తక్కువ కొవ్వు మాంసం: అవసరమైన పోషకాలు. ఆరోగ్యకరమైన వంట విధానాలు ఉపయోగించండి. మరింత సమాచారం కోసం, ఎల్లప్పుడూ ఆరోగ్య సంరక్షకుని సంప్రదించండి.";
    } else if (lowerInput.includes("ప్రోటీన్ అధికంగా ఉండే ఆహారాలు")) {
        return "ప్రోటీన్ అధికంగా ఉండే ఆహారాలు: గుడ్లు, చికెన్.";
    } else if (lowerInput.includes("give General diet")) {
        return "సాధారణ డైట్: పండ్లు, కూరగాయలు, మాంసాహార ఆహారాలు, తక్కువ ఉప్పు. General diet: Fruits, vegetables, protein-rich foods, low salt.";
    } else if (lowerInput.includes("give supplements")) {
        return "సరైన సప్లిమెంట్స్: విటమిన్ D, ఐరన్ టాబ్లెట్స్.Proper supplements: Vitamin D, Iron tablets.";
    } else if (lowerInput.includes("అనుమతించని ఆహారాలు")) {
        return "అనుమతించని ఆహారాలు: ఎక్కువ ఉప్పు, ప్రాసెస్డ్ ఫుడ్, క్యాన్డ్ ఫుడ్.";
    }else if (lowerInput.includes("not allowed foods")) {
        return "అనుమతించని ఆహారాలు: ఎక్కువ ఉప్పు, ప్రాసెస్డ్ ఫుడ్, క్యాన్డ్ ఫుడ్. Restricted foods: Excess salt, processed food, canned food.";
    } else if (lowerInput.includes("ప్రోటీన్ మూలాలు")) {
        return "గింజలు, కందులు, టోఫు, క్వినోవా మరియు గింజలు వంటి మొక్కల ఆధారిత ప్రోటీన్లు గొప్ప ఎంపికలు.";
    } else if (lowerInput.includes("పాల ఉత్పత్తులు")) {
        return "తక్కువ ఫాస్ఫరస్ పాల ఉత్పత్తులు వంటి రికోటా లేదా క్రీమ్ చీజ్ మంచి ఎంపికలు.";
    } else if (lowerInput.includes("నీరు ఎంత త్రాగాలి?")) {
        return "రోజుకి కనీసం 8 కప్పులు నీరు తాగడం లక్ష్యంగా పెట్టుకోండి, కానీ వ్యక్తిగత సలహా కోసం ఆరోగ్య సంరక్షకుని సంప్రదించండి.";
    } else if (lowerInput.includes("కూరగాయలు")) {
        return "బెల్ పెప్పర్స్, క్యాబేజీ, కాలీఫ్లవర్ మరియు వెల్లుల్లి కిడ్నీకి ఆరోగ్యకరమైన కూరగాయలు.";
    } else if (lowerInput.includes("ఉప్పు తీసుకోవడం")) {
        return "రక్తపోటును నియంత్రించడానికి మరియు మూత్రపిండాలపై ఒత్తిడిని తగ్గించడానికి ఉప్పు తీసుకోవడాన్ని తగ్గించండి.";
    } else if (lowerInput.includes("పండ్లు")) {
        return "బెర్రీస్, ఆపిల్స్ మరియు ద్రాక్ష వంటి తక్కువ పొటాషియం పండ్లు కిడ్నీ ఆరోగ్యానికి మంచివి.";
    } else if (lowerInput.includes("మసాలాలు")) {
        return "ఉప్పు లేకుండా రుచిని చేర్చడానికి తులసి, రోస్మరీ మరియు పరుసు వంటి మూలకాలను మరియు మసాలాలను ఉపయోగించండి.";
    } else if (lowerInput.includes("ధాన్యాలు")) {
        return "బ్రౌన్ రైస్, సంపూర్ణ గోధుమ పాస్తా మరియు ఓట్స్ వంటి మొత్తం ధాన్యాలు అద్భుతమైన ఎంపికలు.";
    } else if (lowerInput.includes("ఉప్పు లేకుండా రుచి")) {
        return "ఉప్పు లేకుండా రుచిని మెరుగుపరచడానికి మూలకాలు, మసాలాలు, నిమ్మరసం, వెనిగర్ మరియు వెల్లుల్లిని ఉపయోగించండి.";
    } else if (lowerInput.includes("పానీయాలు")) {
        return "చక్కెరతో కూడిన పానీయాలు, సోడాలు మరియు మద్యాన్ని వంచన చేయండి. నీరు, మూలక టీలు మరియు తాజా రసాలు తీసుకోండి.";
    } else if (lowerInput.includes("స్నాక్స్")) {
        return "చక్కెరతో కూడిన పాపకార్న్, ఆపిల్ స్లైసెస్, పీనట్ బట్టర్ మరియు క్యారెట్ స్టిక్స్ వంటి మంచి స్నాక్స్ ఎంపికలు.";
    } else if (lowerInput.includes("పొటాషియం")) {
        return "ఫ్లూయిడ్స్ మరియు ఖనిజాల సమతుల్యాన్ని నిర్వహించడానికి పొటాషియం ముఖ్యం, కానీ కొంతమంది మూలకాలకు హానికరం కావచ్చు.";
    } else if (lowerInput.includes("గింజలు మరియు విత్తనాలు")) {
        return "ఆల్మాండ్స్, వాల్నట్స్ మరియు చియా గింజలు మంచి ఎంపికలు కానీ పరిమిత పరిమాణంలో తీసుకోవాలి.";
    } else if (lowerInput.includes("ఫాస్ఫరస్ తీసుకోవడం")) {
        return "తక్కువ ఫాస్ఫరస్ పండ్లు మరియు కూరగాయలు, రైస్ మిల్క్ మరియు క్రీమ్ చీజ్ వంటి ఆహారాలు ఎంపిక చేయండి.";
    } else if (lowerInput.includes("వంట విధానాలు")) {
        return "స్టీమింగ్, బేకింగ్, గ్రిల్లింగ్ మరియు బాయిలింగ్ మెరుగైన విధానాలు.";
    } else if (lowerInput.includes("సోయా ఉత్పత్తులు")) {
        return "టోఫు మరియు టెంపె వంటి సోయా ఉత్పత్తులు మూలకమైన వ్యక్తుల ప్రోటీన్ మూలాలు.";
    } else if (lowerInput.includes("మూలక భోజనం")) {
        return "మూలక ఆహార భోజన ఐడియాలు కందులు మరియు కూరగాయల స్టూ, క్వినోవా సలాడ్ మరియు టోఫు స్టిర్-ఫ్రై.";
    } else if (lowerInput.includes("విటమిన్ల లోపాలు")) {
        return "మూలకులు B12 మరియు ఐరన్ వంటి విటమిన్లు మరియు ఖనిజాలు సప్లిమెంట్ చేయవలసిన అవసరం ఉండవచ్చు.";
    } else if (lowerInput.includes("డెసెర్ట్స్")) {
        return "తక్కువ పొటాషియం మరియు తక్కువ ఫాస్ఫరస్ డెసెర్ట్స్ తీసుకోండి.";
    } else if (lowerInput.includes("సూప్స్")) {
        return "మినిస్ట్రోన్, కందుల సూప్ మరియు బట్టర్‌నట్ స్క్వాష్ సూప్ వంటి మూలక సూప్స్.";
    } else {
        return "నేను మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను.";
    }
}

