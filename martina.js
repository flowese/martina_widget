// martina.js
// widget by @flowese (Marc Riera)

(function() {
    // Código HTML como cadena de texto
    var chatbotHTML = `
        <div id="martina" class="martina">
        <div id="martina_welcome" class="martina__welcome" data-visibility="true">
            <img class="martina__welcome-logo" src="https://ik.imagekit.io/u72iu63oj/logo.svg" alt="logo-iberojet">
            <p class="martina__welcome-text">Chat Asistencia</p>
        </div>
        
        <div id="martina_chat" class="martina-chat" data-visibility="false">
            <div class="martina-chat__header">
                <p class="martina-chat__header-title">Iberojet Martina</p>
                <div class="martina-chat__header-buttons">
                    <div id="martina_minimize" class="martina-chat__header-button-minimize">
                        <?xml version="1.0" encoding="UTF-8"?> <svg fill="none" viewBox="0 0 15 3" xmlns="http://www.w3.org/2000/svg"> <line x1="1.2" x2="13.8" y1="1.8" y2="1.8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/> </svg>
                    </div>
                    <div id="martina_close" class="martina-chat__header-button-close">
                        <?xml version="1.0" encoding="UTF-8"?> <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <path d="M14 2L2 14" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/> <path d="m2 2 12 12" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/> </svg>
                    </div>
                </div>
            </div>

            <div class="martina-chat__content">  
                <div class="martina-chat__mensages">
                    <div class="martina-chat__mensage" data-message="received">
                        <div class="messages-chat__avatar">
                            <?xml version="1.0" encoding="UTF-8"?> <svg fill="none" viewBox="0 0 25 28" xmlns="http://www.w3.org/2000/svg"> <path d="m23.333 26v-2.6667c0-1.4145-0.5619-2.771-1.5621-3.7712s-2.3567-1.5621-3.7712-1.5621h-10.667c-1.4145 0-2.771 0.5619-3.7712 1.5621-1.0002 1.0002-1.5621 2.3567-1.5621 3.7712v2.6667" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6889"/> <path d="m12.667 12.667c2.9456 0 5.3334-2.3878 5.3334-5.3334 0-2.9455-2.3878-5.3333-5.3334-5.3333-2.9455 0-5.3333 2.3878-5.3333 5.3333 0 2.9456 2.3878 5.3334 5.3333 5.3334z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6889"/> </svg>
                        </div>
                        <div class="martina-chat__mensage-content">
                            <p>¡Hola! Soy Martina, una inteligencia artificial diseñada para resolver preguntas sobre Iberojet.</p>
                        </div>
                    </div>
                    


                </div>
            </div>

            <div class="martina-chat__footer">
                <form slot="chat-form" class="martina-chat__footer-form">
                    <input autocomplete="off" id="" autofocus="autofocus" placeholder="Escribe tu pregunta" maxlength="256" type="text" class="martina-chat__input">
                    <button type="button" class="martina-chat__button"></button>
                </form>
            </div>

            <div id="martina_modal" class="martina-modal" data-visibility="false">
                <div class="martina-modal__content">
                    <span class="martina-modal__icon">
                        <?xml version="1.0" encoding="UTF-8"?> <svg fill="none" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg"> <path d="m12.036 3.17-9.7282 17.184c-0.20057 0.3676-0.3067 0.7843-0.30782 1.2087s0.1028 0.8417 0.30142 1.2104 0.48503 0.676 0.83072 0.8912 0.73862 0.3309 1.1397 0.3356h19.456c0.401-0.0047 0.794-0.1204 1.1397-0.3356 0.3456-0.2152 0.632-0.5225 0.8307-0.8912 0.1986-0.3687 0.3025-0.786 0.3014-1.2104s-0.1073-0.8411-0.3078-1.2087l-9.7282-17.184c-0.2047-0.35717-0.493-0.65246-0.8371-0.85741-0.344-0.20494-0.7321-0.3126-1.1269-0.3126s-0.7829 0.10766-1.1269 0.3126c-0.3441 0.20495-0.6324 0.50024-0.8371 0.85741v0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4444"/> <path d="m14 9.4166v4.8611" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4444"/> <path d="m14 19.139h0.0118" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4444"/> </svg>
                    </span>
                    <div class="martina-modal__text">
                        <p class="martina-modal__title">
                            ¿Quieres cerrar este chat?
                        </p>
                        <p class="martina-modal__subtitle">
                            Perderás toda la conversación.
                        </p>
                    </div>
                    <div class="martina-modal__buttons">
                        <button id="martina_modal_yes" class="martina-modal__button">Sí</button>
                        <button id="martina_modal_no" class="martina-modal__button">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;


    // Código CSS como cadena de texto
    var chatbotCSS = `
    :root{
        --border-radius: 8px;
        --box-shadow: 0 2px 3px 0 rgba(0,0,0,.16),0 3px 12px 0 rgba(0,0,0,.08);
        --color-primary: #279989;
        --color-gray: #7a7a7a;
        --color-gray-medium: #a2a2a2;;
        --color-gray-light: #f6f6f6;
        --color-text: #3d3f43;
        --color-bg-text: #deebff;
        --height-footer: 46px;
        --transition-btn: 300ms;
        --transition-block: 500ms;
    }
    
    .martina *{
        box-sizing: border-box;
        font: inherit;
        margin: 0;
        padding: 0;
    }
    
    .martina{
        bottom: 30px;
        font-family: 'Quicksand', sans-serif;
        position: fixed;
        right: 30px;
        z-index: 1000000000000;
    }
    
    /* Welcome */
    
        .martina__welcome{
            align-items: center;
            background-color: var(--color-primary);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            color: white;
            display: flex;
            font-weight: 700;
            gap: 10px;
            min-width: 64px;
            height: 64px;
            padding: 16px;
            transition: opacity var(--transition-block);
        }
    
        .martina__welcome:hover{
            cursor: pointer;
        }
    
        .martina__welcome[data-visibility="false"]{
            opacity: 0;
            pointer-events: none;
        }
    
    /* Chat */
    
        .martina-chat{
            background-color: var(--color-gray-light);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            display: grid;
            grid-template-rows: auto 1fr var(--height-footer);
            font-family: 'Quicksand', sans-serif;
            position: fixed;
            transition: opacity var(--transition-block);
        }
        @media(max-width: 767px ){
            .martina-chat{
                inset: 0;
            }	    
        }
        @media(min-width: 768px ){
            .martina-chat{
                bottom: 50px;
                height: 480px;
                right: 30px;
                width: 336px;
            }
        }
    
        .martina-chat[data-visibility="false"]{
            opacity: 0;
            pointer-events: none;
        }
    
        .martina-chat__header{
            background-color: var(--color-primary);
            border-radius: var(--border-radius) var(--border-radius) 0 0;
            box-shadow: var(--box-shadow);
            color: white;
            display: flex;
            justify-content: space-between;
            padding: 12px 16px;
        }
    
        .martina-chat__header-title{
            font-size: 20.5px;
        }
    
        .martina-chat__header-title{
            margin: 0;
        }
    
        .martina-chat__header-buttons{
            display: flex;
            gap: 20px;
        }
    
        .martina-chat__header-button-minimize, 
        .martina-chat__header-button-close{
            align-items: center;
            display: flex;
            transition: var(--transition-btn);
            width: 12px;
        }
    
        .martina-chat__header-button-minimize:hover, 
        .martina-chat__header-button-close:hover{
            cursor: pointer;
            opacity: .7;
        }
    
        .martina-chat__content{
            align-items: flex-end;
            color: var(--color-text);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            overflow: hidden;
        }
    
        .martina-chat__mensages{
            align-items: end;
            display: grid;
            gap: 10px;
            margin-block-start: auto;
            overflow: auto;
            padding: 16px;
        }
    
        .martina-chat__mensage{
            display: grid;
            gap: 10px;
            grid-template-columns: 32px auto;		
        }

        .martina-chat__mensage .martina-chat__mensage-content{
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.2),0 1px 3px 0 rgba(0,0,0,.1);
            padding: 8px;
        }
    
        .martina-chat__mensage[data-message="received"] .martina-chat__mensage-content{
            background-color: white;
            border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 0;
        }
    
        .martina-chat__mensage[data-message="sent"] .martina-chat__mensage-content{
            background-color: var(--color-bg-text);
            border-radius: var(--border-radius) var(--border-radius) 0 var(--border-radius);
            text-align: right;
        }
    
        .martina-chat__mensage[data-message="received"] p{
            font-size: 13.5px;
            line-height: 22px;
        }
    
        .martina-chat__mensage[data-message="received"] .messages-chat__avatar{
            align-items: center;
            align-self: end;
            background-color: var(--color-primary);
            border-radius: 50%;
            display: flex;
            height: 32px;
            justify-content: center;
            width: 32px;
        }
    
        .messages-chat__avatar svg{
            width: 14px;
        }
    
        .martina-chat__mensage p{
            margin: 0;
        }
    
        .martina-chat__mensage a{
            color: var(--color-primary);
            transition: .2s;
        }
    
        .martina-chat__mensage a:hover{
            opacity: .7;
        }
    
        .martina-chat__footer{
            bottom: 0;
            height: var(--height-footer);
            position: absolute;
            width: 100%;
        }
    
        .martina-chat__footer-form{
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            box-shadow: 0 -1px 2px 0 rgba(0,0,0,.05);
            display: grid;
            grid-template-columns: 1fr 50px;
            grid-template-rows: 46px;
            overflow: hidden;
        }
    
        .martina-chat__input, .martina-chat__button{
            appearance: none;
            border: none;
            border-radius: 0;
        }
    
        .martina-chat__input{
            color: var(--color-text);
            padding-left: 16px;
        }
    
        .martina-chat__input:focus{
            outline: none;
        }
    
        .martina-chat__button{
            background-color: white;
        }
    
    /* Modal */
        .martina-modal{
            align-items: center;
            background-color: rgba(61,63,67,.8);
            display: flex;
            inset: 0;
            justify-content: center;
            padding: 20px;
            position: absolute;
            transition: opacity var(--transition-block);
        }
    
        .martina-modal[data-visibility="false"]{
            opacity: 0;
            pointer-events: none;
        }
    
        .martina-modal__content{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;
            border-radius: var(--border-radius);
            padding: 36px 24px;
            text-align: center;
            width: 100%;
        }
    
        .martina-modal__icon{
            align-items: center;
            background-color: var(--color-gray-light);
            border-radius: 50%;
            display: flex;
            height: 56px;
            justify-content: center;
            width: 56px;
        }
        
        .martina-modal__icon svg{
            stroke: var(--color-primary);
            width: 32px;
        }
    
        .martina-modal__text{
            margin-top: 10px;
        }
    
        .martina-modal__text p{
            margin: 5px 0 0 0;
        }
    
        .martina-modal__title{
            color: var(--color-gray);
            font-size: 13px;		
            font-weight: 700;
        }
    
        .martina-modal__subtitle{
            color: var(--color-gray-medium);
            font-size: 12px;
        }
    
        .martina-modal__buttons{
            display: flex;
            gap:16px;
            margin-top: 40px;
        }
    
        .martina-modal__button{
            background-color: var(--color-primary);
            border: none;
            border-radius: 50px;
            box-shadow: var(--box-shadow);
            color: white;
            height: 44px;
            min-width: 76px;
            padding: 0 16px;
            transition: .3s;
        }
        
        .martina-modal__button:hover{
            cursor: pointer;
            opacity: .7;
        }
    
        /* Estilos para la barra de desplazamiento */
        .martina-chat__mensages::-webkit-scrollbar {
            width: 8px;
        }
        
        .martina-chat__mensages::-webkit-scrollbar-track {
            background-color: transparent;
        }
        
        .martina-chat__mensages::-webkit-scrollbar-thumb {
            background-color: #d1d1d1;
            border-radius: 4px;
        }
        
        .martina-chat__mensages::-webkit-scrollbar-thumb:hover {
            background-color: #a1a1a1;
        }
        
        .martina-chat__mensages::-webkit-scrollbar-thumb:active {
            background-color: #818181;
        }
        
    `;

    // Añadir el CSS al DOM
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(chatbotCSS));
    document.head.appendChild(style);

    // Añadir el HTML al DOM
    var chatbotContainer = document.createElement('div');
    chatbotContainer.innerHTML = chatbotHTML;
    document.body.appendChild(chatbotContainer);

    // Tu código JavaScript aquí...
    function ready(fn) {
        if (document.readyState !== 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    function simulateTyping(content, element, messageContainer) {
        let i = 0;
        function typeNextCharacter() {
            if (i < content.length) {
                element.innerHTML += content.charAt(i);
                i++;
                setTimeout(typeNextCharacter, Math.floor(Math.random() * (22 - 15 + 1) + 15)); 
                // Asegura que el scroll se mueve hacia abajo
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }
        }
        typeNextCharacter();
    }
    
    ready(function() {
        var triggerWelcome = document.querySelector('#martina_welcome');
        var martinaChat = document.querySelector('#martina_chat');
        var martinaCloseBtn = document.querySelector('#martina_close');
        var martinaMinimizeBtn = document.querySelector('#martina_minimize');
        var martinaModal = document.querySelector('#martina_modal');
        var martinaModalCloseChat = document.querySelector('#martina_modal_yes');
        var martinaModalCloseModal = document.querySelector('#martina_modal_no');
        var martinaForm = document.querySelector('.martina-chat__footer-form');
        var martinaInput = document.querySelector('.martina-chat__input');
        var martinaMessageContainer = document.querySelector('.martina-chat__mensages');
    
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        
        function addMessageToChat(content, type) {
            var messageElem = document.createElement('div');
            messageElem.classList.add('martina-chat__mensage');
            messageElem.setAttribute('data-message', type);
            messageElem.innerHTML = `
                <div class="messages-chat__avatar"></div>
                <div class="martina-chat__mensage-content">
                    <p></p>
                </div>
            `;
            martinaMessageContainer.appendChild(messageElem);
            var textElement = messageElem.querySelector('p');
            if(type === 'received') {
                simulateTyping(content, textElement, martinaMessageContainer);
            } else {
                textElement.innerHTML = content;
            }
            // Asegura que el scroll se mueve hacia abajo cuando se agrega un nuevo mensaje
            martinaMessageContainer.scrollTop = martinaMessageContainer.scrollHeight;
        }
    
        triggerWelcome.addEventListener('click', function() {
            triggerWelcome.setAttribute('data-visibility', 'false');
            martinaChat.setAttribute('data-visibility', 'true');
        });
    
        martinaCloseBtn.addEventListener('click', function() {
            martinaModal.setAttribute('data-visibility', 'true');
        });
    
        martinaModalCloseChat.addEventListener('click', function() {
            martinaChat.setAttribute('data-visibility', 'false');
            martinaModal.setAttribute('data-visibility', 'false');
            triggerWelcome.setAttribute('data-visibility', 'true');
        });
    
        martinaMinimizeBtn.addEventListener('click', function() {
            martinaChat.setAttribute('data-visibility', 'false');
            triggerWelcome.setAttribute('data-visibility', 'true');
        });
    
        martinaModalCloseModal.addEventListener('click', function() {
            martinaModal.setAttribute('data-visibility', 'false');
        });
    
        martinaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var userInput = martinaInput.value;
            addMessageToChat(userInput, 'sent');
        
            // Comprobar si hay un UUID almacenado en el localStorage
            var sessionID = localStorage.getItem("session_id");
        
            // Si no hay un UUID almacenado, generar uno nuevo y almacenarlo
            if (sessionID === null) {
                sessionID = generateUUID();
                localStorage.setItem("session_id", sessionID);
            }
        
            fetch('http://martina-api.westeurope.azurecontainer.io/v1/iberojet/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_input: userInput,
                    session_id: sessionID, // Usar el UUID almacenado
                    return_audio: false,
                }),
            })
            .then(response => response.json())
            .then(data => {
                addMessageToChat(data.chat_response, 'received');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            martinaInput.value = '';
        });    
    });
})();
